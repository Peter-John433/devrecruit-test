import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
      <div className="bg-white p-[20px] rounded-[5px]">
        <button onClick={onClose}>close</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
