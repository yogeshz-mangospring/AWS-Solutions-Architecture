import PopUp from "../components/popup";

const DeleteTodo = (props) => {

  const deleteTodo = () => {
    props.handleDeleteTodo(props.todoItem)
  }

  return (
    <div>
      <PopUp 
        title="Confirmation"
        handleClose={props.handleClose}
        body={(
          <div>
            <span>
              Are you sure you want to delete this todo?
            </span>
          </div>
        )}
        buttons={(
          <div>
            <button className="btn btn-secondary" type="button" onClick={props.handleClose}>Close</button>
            <button className="btn btn-secondary left-10" onClick={(e) => { e.preventDefault(); deleteTodo() }}>Delete</button>
          </div> 
        )}
      />
    </div>
  )
}

export default DeleteTodo;