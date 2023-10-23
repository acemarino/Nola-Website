import React, { useState } from "react"
import ReactDOM from "react-dom"


export const Modal = ({ src, alt, caption, onClose }) => {
  console.log("reached Modal")
  return (
    <><div id="header">modal</div>
    <div className="modal-box">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
      {caption.length > 0 && <div className="caption">{caption}</div>}
      </div>
    </>
  )
}

 const ImgClick = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)
console.log("open: "+isOpen)
  return (
    <div className="App">
      
      
      <img
        className="image"
        onClick={showModal}
        src="https://source.unsplash.com/NQSWvyVRIJk/800x599"
        alt="Snow"
      />
      {isOpen && (
        <Modal
          src="https://source.unsplash.com/NQSWvyVRIJk/800x599"
          alt="snow"
          caption="caption"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
export default ImgClick

