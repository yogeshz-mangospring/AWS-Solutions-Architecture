import React, {useState} from 'react';
import "../stylesheet/todo.css"
import PopUp from '../components/popup';
const Todo = (props) => {
  const [todoItem, setTodoItem] = useState('');
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState({isbtn: false});
  const addTodo = () => {
    if (todoItem) {
      const data = {
        id : todo.length+1 ,
        title: todoItem,
      }
      setTodo((prevData) => {
        return [data, ...prevData]
      });
      setTodoItem('');
    }
  }

  const handleInput = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const handleClose = () => {
    setIsEdit({
      ...isEdit,
      isbtn: false,
    })
  }

  const handleEdit = (data) => {
    console.log(data);
    setTodo(
      todo.map((item) => {
        if (item.id !== data.currentItem.id) return item;
        return data.currentItem;
      })
    )
    setIsEdit({
      ...isEdit,
      isbtn: false,
    })
  }

  return (
    <div>
       <div className="wrapper">
        <div className="ms-flex align-items-center">
          <input className="form-control form-control-lg right-5" type="text" placeholder="Type Todo" aria-label=".form-control-lg example"
            value={todoItem}
            onKeyUp={handleInput}
            onChange={(e) => {
              e.preventDefault();
              setTodoItem(e.currentTarget.value)
            }}
          />
          <button type="button" className="btn btn-primary" onClick={addTodo}>ADD</button>
        </div>
        {todo && todo.map((item, index) => (
          <div className="todo-item ms-flex align-items-center justify-between top-10" id={item.id} key={item.id}>
            <div className="todo-title ms-flex align-items-center">
              <ul className="bottom-0">
                <li>
                  <h5>{item.title}</h5>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className='btn btn-warning' onClick={() => setIsEdit({
                isbtn: true,
                currentItem: item
              })}>EDIT</button>
              <button type="button" className='btn btn-danger left-10' onClick={() => setIsEdit({
                isbtn: true,
                currentItem: item
              })}>Delete</button>
            </div>
          </div>
        ))}
       </div>
      {isEdit.isbtn && 
          <PopUp
            style={{ width: '650px' }}
            title="Edit Todo"
            body={(
              <div>
                <input class="form-control form-control-lg right-5" type="text" placeholder="Type Todo" aria-label=".form-control-lg example" value={isEdit.currentItem.title}
                  onChange={(e) => {
                    setIsEdit({
                      ...isEdit,
                      currentItem: {
                        ...isEdit.currentItem,
                        title: e.currentTarget.value,
                      }
                    })
                  }}
                />
              </div>
            )}
            handleClose ={handleClose}
            buttons={(
              <div>
                <button className="btn btn-secondary" type="button" onClick={handleClose}>Close</button>
                <button className="btn btn-secondary left-10" onClick={(e) => {e.preventDefault(); handleEdit(isEdit)}}>Save Changes</button>
              </div>
            )}
          />
      }
    </div>
  )
}

export default Todo;