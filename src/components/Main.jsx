import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';
import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main(props) {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = useState(
    'Исследователь океана'
  );
  const [userAvatar, setUseAvatar] = useState(
    'https://www.placecage.com/c/120/120'
  );
  const [cards, setCards] = useState([]);

  const handleCardClick = props.onHandleCardClick;

  useEffect(() => {
    // Загрузка начальных данных --
    api
      .getInitialUser()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUseAvatar(result.avatar);
        setUserId(result._id);
        // Загрузка начальных карточек --
        api
          .getInitialCards()
          .then((result) => {
            setCards(result);
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          });
        // -- Загрузка начальных карточек //
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    // -- Загрузка начальных данных //
  }, [userName, userDescription, userAvatar, cards, userId]);

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
        {cards.map((card) => (
          <Card
            key={card._id}
            userId={userId}
            onCardClick={handleCardClick}
            card={card}
            {...card}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
