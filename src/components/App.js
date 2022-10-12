import React, { useState } from 'react';

import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import { ProfileEditForm } from './PopupWithForm.js';
import { CardAddForm } from './PopupWithForm.js';
import { AvatarEditForm } from './PopupWithForm.js';
import { CardDeleteForm } from './PopupWithForm.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name="profile"
          title="Редактировать профиль"
          childrenForm={<ProfileEditForm />}
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name="card"
          title="Новое место"
          childrenForm={<CardAddForm />}
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name="avatar"
          title="Обновить аватар"
          childrenForm={<AvatarEditForm />}
        />
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          childrenForm={<CardDeleteForm />}
        />
        <ImagePopup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
