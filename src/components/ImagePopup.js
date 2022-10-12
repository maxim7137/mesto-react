import close from '../images/close.svg';

function ImagePopup() {
  return (
      <div className="popup popup_image">
        <figure className="popup__container">
          <button
            className="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src={close}
              alt="Крест"
              className="popup__close-button-img cross__img"
            />
          </button>
          <img
            className="popup__img"
            src="https://loremflickr.com/1280/720"
            alt="Большое фото загруженное пользователем"
          />
          <figcaption className="popup__caption">Подпись</figcaption>
        </figure>
      </div>
  );
}

export default ImagePopup;