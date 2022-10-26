import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
          >
            <label className="popup__field">
              <input
                required
                type="text"
                name="name"
                id="user-name-input"
                className="popup__input popup__input_user_name"
                defaultValue=""
                placeholder="Имя"
                minLength="2"
                maxLength="40"
              />
              <span className="popup__error user-name-input-error"></span>
            </label>
            <label className="popup__field">
              <input
                required
                type="text"
                name="about"
                id="user-character-input"
                className="popup__input popup__input_user_character"
                defaultValue=""
                placeholder="Занятие"
                minLength="2"
                maxLength="200"
              />
              <span className="popup__error user-character-input-error"></span>
            </label>
          </PopupWithForm>
  );
}

export default EditProfilePopup;
