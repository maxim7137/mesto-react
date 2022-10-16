import React from 'react';
import close from '../images/close.svg';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button cross"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        >
          <img
            src={close}
            alt="Крест"
            className="popup__close-button-img cross__img"
          />
        </button>
        <div className="popup__form-container">
          <h2 className="popup__heading">{props.title}</h2>
          <form name={props.name} className={`popup__form popup__form_${props.name}`}>
            {props.childrenForm}
            <button type="submit" className="popup__button" aria-label={props.buttonText}>
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopupWithForm;
