import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';
import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const userId = user._id;
  const userName = user.name;
  const userDescription = user.about;
  const userAvatar = user.avatar;
  const handleCardClick = props.onHandleCardClick;

  // <-- Карточки
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then(result => {
        setCards(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // Карточки -->

  // <--Лайки
  function handleLike(card) {
    const isLiked = card.likes.some(i => i._id === userId);
    if (isLiked) {
      api
        .dislikeCard(card._id)
        .then(newCard => {
          setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .likeCard(card._id)
        .then(newCard => {
          setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // Лайки-->

  // <-- Удаление
  function handleCardDelete(card) {
    api
      .delCard(card._id)
      .then(setCards(state => state.filter(stateCard => stateCard._id !== card._id)))
      .catch(err => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  // Удаление -->

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
        {cards.map(card => (
          <Card
            key={card._id}
            onCardClick={handleCardClick}
            onCardLike={handleLike}
            onCardDelete={handleCardDelete}
            card={card}
            {...card}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
