import trash from '../images/trash.svg';
const srcError =
  'https://camo.githubusercontent.com/2515d63ed9f010c45188fb16aa813f67c886fcb713f8395964abcbd22bd791ef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f41394563427a64367438445a652f67697068792e676966';

// проверка своих карточек
// лайкнута ли мной
function isLikedByMe(array, userId) {
  const arrayOfLikedId = [];
  array.forEach((element) => {
    arrayOfLikedId.push(element._id);
  });
  const containsUserId = arrayOfLikedId.some((element) => element === userId);
  return containsUserId;
}
// моя ли карточка
function isMyCard(userId, owner) {
  return userId === owner._id;
}
// заменить картинку если ошибка
function errorHandler(event) {
  event.target.src = srcError;
}

function Card({ link, name, likes, userId, owner }) {
  return (
    <li className="elements__element">
      <img
        src={link}
        alt={name}
        className="elements__image"
        onError={errorHandler}
      />
      <div className="elements__captions">
        <h2 className="elements__name">{name}</h2>
        <div className="elements__like-container">
          <button
            className={
              isLikedByMe(likes, userId)
                ? 'elements__like-button elements__like-button_liked'
                : 'elements__like-button'
            }
            type="button"
            aria-label="отметить карточку"
          ></button>
          <span className="elements__like-counter">{likes.length}</span>
        </div>
      </div>
      {isMyCard(userId, owner) && (
        <img
          src={trash}
          alt="корзина"
          className="elements__trash"
          aria-label="удалить карточку"
        />
      )}
    </li>
  );
}

export default Card;
