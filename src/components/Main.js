import React, { useState } from 'react';
import api from '../utils/Api.js';

import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main(props) {
  const [userName, setUserName] = useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = useState(
    'Исследователь океана'
  );
  const [userAvatar, setUseAvatar] = useState(
    'https://www.placecage.com/c/120/120'
  );
  // Загрузка начальных данных --
  api
    .getInitialUser()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUseAvatar(result.avatar)
      const userId = result._id;
/*
      // Загрузка начальных карточек --
      api
        .getInitialCards()
        .then((result) => {
          cardsList.renderItems(result); // вставка карточек
          const cardsNodeList = cardsContainer.querySelectorAll('li'); // вставка лайков
          for (let i = 0; i < result.length; i++) {
            cardsNodeList[i].querySelector('span').textContent =
              result[i].likes.length;
          }
          // проверка своих карточек
          // лайкнута ли мной
          function isLiked(array) {
            const arrayOfLikedId = [];
            array.forEach((element) => {
              arrayOfLikedId.push(element._id);
            });
            const containsUserId = arrayOfLikedId.some(
              (element) => element === userId
            );
            return containsUserId;
          } // лайкнута ли мной //

          for (let i = 0; i < result.length; i++) {
            // для удаления
            if (result[i].owner._id !== userId) {
              cardsNodeList[i].querySelector('.elements__trash').remove();
            }
            // для лайков
            if (isLiked(result[i].likes)) {
              cardsNodeList[i]
                .querySelector(selectorsOfCard.buttonLike)
                .classList.add(selectorsOfCard.liked);
            }
          }
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
      // -- Загрузка начальных карточек // */
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  // -- Загрузка начальных данных //
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__cover" onClick={props.onEditAvatar}>
          <img src={pen} alt="карандаш" className="profile__pen" />
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            >
              <img
                src={edit}
                alt="карандаш"
                className="profile__edit-button-img"
              />
            </button>
          </div>
          <p className="profile__character">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={props.onAddPlace}
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
    </main>
  );
}

export default Main;
