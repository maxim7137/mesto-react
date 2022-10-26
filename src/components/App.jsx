import React, { useState, useEffect } from 'react';
// Импортируем объекты контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import api from '../utils/Api';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';

function App() {
  // <-- Контекст текущего пользователя
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api
      .getInitialUser()
      .then(result => {
        setCurrentUser(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // Контекст текущего пользователя -->

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  // Обработчик отправки профиля
  function handleUpdateUser(data) {
    api
      .setUser(data)
      .then((result) => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onHandleCardClick={handleCardClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="card"
            title="Новое место"
            buttonText="Создать"
          >
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
          </PopupWithForm>
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
          >
            <label className="popup__field">
              <input
                required
                type="url"
                name="link"
                id="avatar-address-input"
                className="popup__input popup__input_avatar_address"
                placeholder="Ссылка на аватар"
              />
              <span className="popup__error avatar-address-input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />

          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
