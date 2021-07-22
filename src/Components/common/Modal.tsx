import { CloseIcon } from "../../Assets/Icons/index";

type CustomModalProps = {
  width?: number;
  backdropClose?: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  backdropClose,
  width = "",
}) => {
  const styles = {
    maxWidth: width,
  };
  return (
    <div className="modal__layout">
      {!!backdropClose && (
        <div onClick={backdropClose} className="modal__close-icon">
          <CloseIcon />
        </div>
      )}
      <div className="modal__child" style={styles}>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
