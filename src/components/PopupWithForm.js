import close from '../images/close.svg';

export function ProfileEditForm(props) {
  return (
    <form
      name={props.name}
      className={`popup__form popup__form_${props.name}`}
      noValidate
    >
      <label className="popup__field">
        <input
          required
          type="text"
          name="name"
          id="user-name-input"
          className="popup__input popup__input_user_name"
          value=""
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
          value=""
          placeholder="Занятие"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error user-character-input-error"></span>
      </label>
      <button
        type="submit"
        className="popup__button"
        aria-label="сохранить изменения"
      >
        Сохранить
      </button>
    </form>
  );
}
export function CardAddForm(props) {
  return (
    <form
      name={props.name}
      className={`popup__form popup__form_${props.name}`}
      noValidate
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
      <button
        type="submit"
        className="popup__button"
        aria-label="создать новую карточку"
      >
        Создать
      </button>
    </form>
  );
}
export function AvatarEditForm(props) {
  return (
    <form
      name={props.name}
      className={`popup__form popup__form_${props.name}`}
      noValidate
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
      <button
        type="submit"
        className="popup__button"
        aria-label="создать новую карточку"
      >
        Сохранить
      </button>
    </form>
  );
}
export function CardDeleteForm(props) {
  return (
    <form
      name={props.name}
      className={`popup__form popup__form_${props.name}`}
      noValidate
    >
      <button
        type="submit"
        className="popup__button"
        aria-label="создать новую карточку"
      >
        Да
      </button>
    </form>
  );
}

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button cross"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        >
          <img
            src={close}
            alt="Крест"
            className="popup__close-button-img cross__img"
          />
        </button>
        <div className="popup__form-container">
          <h2 className="popup__heading">{props.title}</h2>
          {props.childrenForm}
        </div>
      </div>
    </div>
  );
}
export default PopupWithForm;
