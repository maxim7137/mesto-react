import React from 'react';

function CardAddForm() {
  return (
    <>
      <label className="popup__field">
        <input
          required
          type="text"
          name="name"
          id="card-name-input"
          className="popup__input popup__input_card_name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error card-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          required
          type="url"
          name="link"
          id="card-address-input"
          className="popup__input popup__input_card_address"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error card-address-input-error"></span>
      </label>
    </>
  );
}

export default CardAddForm;
