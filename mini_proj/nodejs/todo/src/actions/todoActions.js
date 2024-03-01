
export const fetchTodo = (setTodo) => {
  fetch('http://localhost:5000/todo/getList', {
    headers: {
      'Content-Type' : 'application/json'
    },
  }).then((resp) => resp.json()).then(({status, todo}) => {
    if (status === 'Success') {
      return setTodo(todo);
    }
  }).catch((err) => {
  })
};


export const addTodoItem = (todo, setTodo) => {
  fetch('http://localhost:5000/todo/addTodo', {
    method: 'POST',
    body: JSON.stringify({
      description: todo.title
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((res) => res.json()).then(({status, result}) => {
    if (status === 'Success') {
      setTodo(prev => {
        return [...prev, result]
      });
    }
  }).catch((err) => {
    console.error(err);
    alert(err);
  })
}; 

export const deleteTodo = (id, todo, setTodo, setIsdelete, isDelete ) => {
  fetch('http://localhost:5000/todo/deleteTodo', {
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((res) => res.json()).then(({ status, result }) => {
    if (status === 'Success') {
      const index = todo.findIndex((obj) => obj.id === result );
      todo.splice(index,1);
      setTodo(todo);
      setIsdelete({
        ...isDelete,
        isDelPopup: false,
      })
    }
  }).catch((err) => {
    console.error(err);
    alert(err);
  })
};


export const editTodo = (id,description, todo, setTodo, setIsEdit, isEdit) => {
  fetch('http://localhost:5000/todo/editTodo', {
    method: 'POST',
    body: JSON.stringify({
      id,
      description,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resp.json()).then(({status, result}) => {
    if (status === "Success"){
      setTodo(todo.map((item) => {
        if  ( item.id === result.id ){
          return result;
        } else {
         return item;
        }
      }));
      setIsEdit({
        ...isEdit,
        isbtn: false,
      })
    }
  }).catch((err) => {
    console.log(err);
  })
};