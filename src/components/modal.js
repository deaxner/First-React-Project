function Modal(props) {

  return (

    <div className="modal">
      <p>is de taak {props.taak} afgerond?</p>
      <button className="btn btn--alt" onClick={props.onClose}>nee</button>
      <button className="btn" onClick={props.onConfirm}>Ja</button>
    </div>
  );
}

export default Modal;
