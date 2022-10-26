import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';
import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const userName = user.name;
  const userDescription = user.about;
  const userAvatar = user.avatar;
  const handleCardClick = props.onHandleCardClick;
  const handleCardLike = props.onCardLike;
  const handleCardDelete = props.onCardDelete;
  const cards = props.cards;

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
            onCardLike={handleCardLike}
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
