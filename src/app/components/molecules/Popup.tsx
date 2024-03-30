import React from 'react';
import Popup from 'reactjs-popup';

type PopupProps = {
  closeModal: () => void;
  open: boolean;
  children: React.ReactNode;

}


export const PopUp = (props: PopupProps) => (

  <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
    <div className="modal bg-pink-700 max-w-5xl p-10 rounded-lg">
      <a className="close" onClick={props.closeModal}>
        &times;
      </a>
      {props.children}
    </div>
  </Popup>
);