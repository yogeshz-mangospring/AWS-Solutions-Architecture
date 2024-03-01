import "../stylesheet/todo.css";
import { FaTimes } from "react-icons/fa";
const PopUp = (props) => {
  return (
    <div className="popup ms-flex align-items-center justify-center">
      <div className="dialog-wrapper" style={props.style}>
        <div className="dialog-header ms-flex justify-between align-items-center">
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <button onClick={props.handleClose}><FaTimes size={20} /></button>
          </div>
        </div>
        <div className="dialog-body">
          <div className="container-outer">
            {props.body}
          </div>
        </div>
        <div className="dialog-footer ms-flex align-items-center justify-end">
          {props.buttons}
        </div>
      </div>
    </div>
  )
}

export default PopUp;