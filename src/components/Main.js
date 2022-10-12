import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

import { ProfileEditForm } from './PopupWithForm.js';
import { CardAddForm } from './PopupWithForm.js';
import { AvatarEditForm } from './PopupWithForm.js';
import { CardDeleteForm } from './PopupWithForm.js';

import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function handleEditAvatarClick() {
  document.querySelector('.popup_avatar').classList.add('popup_opened');
}
function handleEditProfileClick() {
  document.querySelector('.popup_profile').classList.add('popup_opened');
}
function handleAddPlaceClick() {
  document.querySelector('.popup_card').classList.add('popup_opened');
}

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__cover" onClick={handleEditAvatarClick}>
          <img src={pen} alt="карандаш" className="profile__pen" />
          <img
            src="https://www.placecage.com/c/120/120"
            alt="аватар"
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={handleEditProfileClick}
            >
              <img
                src={edit}
                alt="карандаш"
                className="profile__edit-button-img"
              />
            </button>
          </div>
          <p className="profile__character">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={handleAddPlaceClick}
        >
          <img src={plus} alt="плюс" className="profile__add-button-img" />
        </button>
      </section>
      <ul className="elements">
        <template id="card-template">
          <li className="elements__element">
            <img
              src="https://picsum.photos/282?random=1"
              alt="фото загруженное пользователем"
              className="elements__image"
            />
            <div className="elements__captions">
              <h2 className="elements__name">Карачаевск</h2>
              <div className="elements__like-container">
                <button
                  className="elements__like-button"
                  type="button"
                  aria-label="отметить карточку"
                ></button>
                <span className="elements__like-counter">0</span>
              </div>
            </div>
            <img
              src="<%=require('./images/trash.svg')%>"
              alt="корзина"
              className="elements__trash"
              aria-label="удалить карточку"
            />
          </li>
        </template>
      </ul>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        childrenForm={<ProfileEditForm />}
      />
      <PopupWithForm
        name="card"
        title="Новое место"
        childrenForm={<CardAddForm />}
      />
      <PopupWithForm
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
    </main>
  );
}

export default Main;
