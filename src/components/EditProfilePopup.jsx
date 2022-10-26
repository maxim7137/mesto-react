import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const user = React.useContext(CurrentUserContext);
  const [userName, setUserName] = useState(user.name);
  const [userDescription, setUserDescription] = useState(user.about);
  useEffect(() => {
    setUserName(user.name);
    setUserDescription(user.about);
  }, [user, isOpen]);
  // Обработчик изменения инпута обновляет стейт
  function handleChange(e) {
    if (e.target.name === 'name') {
      setUserName(e.target.value);
    }
    if (e.target.name === 'about') {
      setUserDescription(e.target.value);
    }
  }
// Обработчик отправки формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: userName,
      about: userDescription
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          defaultValue={userName}
          onChange={handleChange}
          required
          type="text"
          name="name"
          id="user-name-input"
          className="popup__input popup__input_user_name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error user-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          defaultValue={userDescription}
          onChange={handleChange}
          required
          type="text"
          name="about"
          id="user-character-input"
          className="popup__input popup__input_user_character"
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
