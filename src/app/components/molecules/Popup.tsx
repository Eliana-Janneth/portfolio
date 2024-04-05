import React from 'react'
import Popup from 'reactjs-popup'

type PopupProps = {
  closeModal: () => void
  open: boolean
  children: React.ReactNode
}

export const PopUp = ({ closeModal, open, children }: PopupProps) => (
  <Popup open={open} closeOnDocumentClick onClose={closeModal}>
    <div className="modal w-screen rounded-lg bg-pink-700 p-10 lg:max-w-5xl">
      <a className="close" onClick={closeModal}>
        &times;
      </a>
      {children}
    </div>
  </Popup>
)
