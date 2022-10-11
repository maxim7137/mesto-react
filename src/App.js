import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page">
    <div class="container">
      <header class="header">
        <img
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип Mesto Russia"
          class="header__logo"
        />
      </header>
      <main class="main">
        <section class="profile">
          <button class="profile__cover">
            <img
              src="<%=require('./images/pen.svg')%>"
              alt="карандаш"
              class="profile__pen"
            />
            <img
              src="https://www.placecage.com/c/120/120"
              alt="аватар"
              class="profile__avatar"
            />
          </button>
          <div class="profile__info">
            <div class="profile__name-edit">
              <h1 class="profile__name">Жак-Ив Кусто</h1>
              <button
                class="profile__edit-button"
                type="button"
                aria-label="редактировать профиль"
              >
                <img
                  src="<%=require('./images/edit.svg')%>"
                  alt="карандаш"
                  class="profile__edit-button-img"
                />
              </button>
            </div>
            <p class="profile__character">Исследователь океана</p>
          </div>
          <button
            class="profile__add-button"
            type="button"
            aria-label="добавить карточку"
          >
            <img
              src="<%=require('./images/plus.svg')%>"
              alt="плюс"
              class="profile__add-button-img"
            />
          </button>
        </section>
        <ul class="elements">
          <template id="card-template">
            <li class="elements__element">
              <img
                src="https://picsum.photos/282?random=1"
                alt="фото загруженное пользователем"
                class="elements__image"
              />
              <div class="elements__captions">
                <h2 class="elements__name">Карачаевск</h2>
                <div class="elements__like-container">
                  <button
                    class="elements__like-button"
                    type="button"
                    aria-label="отметить карточку"
                  ></button>
                  <span class="elements__like-counter">0</span>
                </div>
              </div>
              <img
                src="<%=require('./images/trash.svg')%>"
                alt="корзина"
                class="elements__trash"
                aria-label="удалить карточку"
              />
            </li>
          </template>
        </ul>
      </main>
      <footer class="footer">
        <p class="footer__text">&copy; 2020 Mesto Russia</p>
      </footer>
      {/* <!-- Попап профиля --> */}
      <div class="popup popup_profile">
        <div class="popup__container">
          <button
            class="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt="Крест"
              class="popup__close-button-img cross__img"
            />
          </button>
          <div class="popup__form-container">
            <h2 class="popup__heading">Редактировать профиль</h2>
            <form
              name="user-edit"
              class="popup__form popup__form_profile"
              novalidate
            >
              <label class="popup__field">
                <input
                  required
                  type="text"
                  name="name"
                  id="user-name-input"
                  class="popup__input popup__input_user_name"
                  value="Жак-Ив Кусто"
                  minlength="2"
                  maxlength="40"
                />
                <span class="popup__error user-name-input-error"></span>
              </label>
              <label class="popup__field">
                <input
                  required
                  type="text"
                  name="about"
                  id="user-character-input"
                  class="popup__input popup__input_user_character"
                  value="Исследователь океана"
                  minlength="2"
                  maxlength="200"
                />
                <span class="popup__error user-character-input-error"></span>
              </label>
              <button
                type="submit"
                class="popup__button"
                aria-label="сохранить изменения"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап карточки--> */}
      <div class="popup popup_card">
        <div class="popup__container">
          <button
            class="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt="Крест"
              class="popup__close-button-img cross__img"
            />
          </button>
          <div class="popup__form-container">
            <h2 class="popup__heading">Новое место</h2>
            <form
              name="card-edit"
              class="popup__form popup__form_card"
              novalidate
            >
              <label class="popup__field">
                <input
                  required
                  type="text"
                  name="name"
                  id="card-name-input"
                  class="popup__input popup__input_card_name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                />
                <span class="popup__error card-name-input-error"></span>
              </label>
              <label class="popup__field">
                <input
                  required
                  type="url"
                  name="link"
                  id="card-address-input"
                  class="popup__input popup__input_card_address"
                  placeholder="Ссылка на картинку"
                />
                <span class="popup__error card-address-input-error"></span>
              </label>
              <button
                type="submit"
                class="popup__button"
                aria-label="создать новую карточку"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап картинки--> */}
      <div class="popup popup_image">
        <figure class="popup__container">
          <button
            class="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt="Крест"
              class="popup__close-button-img cross__img"
            />
          </button>
          <img
            class="popup__img"
            src="https://loremflickr.com/1280/720"
            alt="Большое фото загруженное пользователем"
          />
          <figcaption class="popup__caption">Подпись</figcaption>
        </figure>
      </div>
      {/* <!-- Попап удаления карточки--> */}
      <div class="popup popup_delete">
        <div class="popup__container">
          <button
            class="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt="Крест"
              class="popup__close-button-img cross__img"
            />
          </button>
          <div class="popup__form-container">
            <h2 class="popup__heading">Вы уверены?</h2>
            <form
              name="card-delete"
              class="popup__form popup__form_delete"
              novalidate
            >
              <button
                type="submit"
                class="popup__button"
                aria-label="создать новую карточку"
              >
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап аватара --> */}
      <div class="popup popup_avatar">
        <div class="popup__container">
          <button
            class="popup__close-button cross"
            type="button"
            aria-label="закрыть"
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt="Крест"
              class="popup__close-button-img cross__img"
            />
          </button>
          <div class="popup__form-container">
            <h2 class="popup__heading">Обновить аватар</h2>
            <form
              name="avatar-edit"
              class="popup__form popup__form_avatar"
              novalidate
            >
              <label class="popup__field">
                <input
                  required
                  type="url"
                  name="link"
                  id="avatar-address-input"
                  class="popup__input popup__input_avatar_address"
                  placeholder="Ссылка на аватар"
                />
                <span class="popup__error avatar-address-input-error"></span>
              </label>
              <button
                type="submit"
                class="popup__button"
                aria-label="создать новую карточку"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
