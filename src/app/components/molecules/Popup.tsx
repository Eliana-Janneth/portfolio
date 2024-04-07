import React from 'react'
import Popup from 'reactjs-popup'

type PopupProps = {
  closeModal: () => void
  open: boolean
  children: React.ReactNode
}

//función para crear un pop-up
export const PopUp = ({ closeModal, open, children }: PopupProps) => (
  <Popup open={open} closeOnDocumentClick onClose={closeModal}>
    <div className="modal w-fit  rounded-lg bg-[#F9CFC7] p-10 lg:max-w-5xl">
      <a className="close text-3xl" onClick={closeModal}>
        &times;
      </a>
      {children}
    </div>
  </Popup>
)
