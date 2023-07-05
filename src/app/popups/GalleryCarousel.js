import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseSquare } from "react-icons/ai";

const GalleryCarousel = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "55%",
      left: "55%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffffff",
      width: 1000,
      height: 580,
    },
  };

  return (
    <Modal
      isOpen={modalOpen}
      //   onRequestClose={() => setModalOpen(false)}
      style={customStyles}
    >
      <div className="_popup">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <button onClick={() => setModalOpen(false)} className="close-btn">
                <AiOutlineCloseSquare size={30} />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">sliding images</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryCarousel;
