const express = require('express');
const db = require('../db')

const router = express.Router();
const todoTable = 'user_todo';
const getCurrentTime = () => {
  const date = new Date();
  const currentDateTime = date.toISOString().slice(0, 19).replace('T', ' ');
  return currentDateTime;
}

//======================================GET TODO======================================
router.get('/getList', (request, response) => {
  const statement = `SELECT *FROM ${todoTable};`;
  db.execute(statement, (error, data) => {
    if (error) {
      response.send({
        status: 'error',
        message: 'Unable to show todos',
      });
    } else {
      if (data && data.length) {
        let result = [];
        data.map((item) => { result.push(item) });
        return response.send({
          status: 'Success',
          todo: result,
        });
      } else {
        response.send({
          status: 'success',
          message: 'There is no todo available. Please add!',
        })
      }
    }
  })
});

// ========================================Add Todod ==================================

router.post('/addTodo', (request, response) => {
  const { description } = request.body;
  const statement = `INSERT INTO ${todoTable}(description, created_at, updated_at) VALUES ('${description}', '${getCurrentTime()}' , '${getCurrentTime()}' );`;
  db.execute(statement, (error, data) => {
    if (error) {
      response.send({
        status: 'error',
        message: 'Unable to add todo',
      });
    } else {
      if (data) {
        console.log(data.insertId);
        todoId = data.insertId;
        const query = `SELECT *FROM ${todoTable} where id=${todoId}`;
        db.execute(query,(error, result) => {
          if (error) {
            response.send({
              status: 'error',
              message: 'Unable to show todos',
            });
          } else {
            if (result && result.length) {
              let item = result[0];
              response.send({
                status: 'Success',
                result: item,
              });
            }
          }
        })
      } else {
        response.send({
          status: 'error',
          message: 'Failed to add todo',
        });
      }
    }
  });
});

// ======================================== Delete Todod ==================================

router.post('/deleteTodo', (request, resp) => {
  const { id } = request.body;
  const statement = `DELETE FROM user_todo where id=${id}`;
  db.execute(statement, (error, data) => {
    if (error) {
      resp.send({
        status: 'error',
        result: 'error',
      });
    } else {
      if (data) {
        let result  = id;
        return resp.send({
          status: 'Success',
          result,
        });
      }
    }
  });
});

// ======================================== Edit Todo ==================================

router.post('/editTodo', (request, response) => {
  const {id, description} = request.body;
  const statement = `UPDATE ${todoTable} SET description='${description}', updated_at='${getCurrentTime()}' where id=${id};`;
  console.log(statement);
  db.execute(statement, (error, data) => {
    if (error) {
      response.send({
        status: 'error',
        message: 'Unable to update',
      });
    } else {
      if (data && data.affectedRows) {
        const query = `SELECT *FROM ${todoTable}  WHERE id=${id}`;
        db.execute(query, (error, data) => {
          if (error) {
            response.send({
              status: 'error',
              message: 'Unable to update',
            });
          } else {
            if (data && data.length) {
              let result = data[0];
              response.send({
                status: 'Success',
                result,
              });
            }
          }
        });
      }
    }
  })
});

module.exports = router;