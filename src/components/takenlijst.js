import { useState } from "react";
import Modal from "./modal";
import Achtergrond from "./Achtergrond";

function Takenlijst(props) {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  function verwijderTaak() {
    setModalIsOpen(true);
  }
  function sluitModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={verwijderTaak}>
          delete
        </button>
      </div>
      {ModalIsOpen && (
        <Modal taak={props.text} onClose={sluitModal}   onConfirm={sluitModal} />
      )}
      {ModalIsOpen && <Achtergrond onClick={sluitModal} />}
    </div>
  );
}

export default Takenlijst;
