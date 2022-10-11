import pen from '../images/pen.svg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main() {
  return (
    <main className='main'>
      <section className='profile'>
        <button className='profile__cover'>
          <img src={pen} alt='карандаш' className='profile__pen' />
          <img
            src='https://www.placecage.com/c/120/120'
            alt='аватар'
            className='profile__avatar'
          />
        </button>
        <div className='profile__info'>
          <div className='profile__name-edit'>
            <h1 className='profile__name'>Жак-Ив Кусто</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='редактировать профиль'
            >
              <img
                src={edit}
                alt='карандаш'
                className='profile__edit-button-img'
              />
            </button>
          </div>
          <p className='profile__character'>Исследователь океана</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='добавить карточку'
        >
          <img src={plus} alt='плюс' className='profile__add-button-img' />
        </button>
      </section>
      <ul className='elements'>
        <template id='card-template'>
          <li className='elements__element'>
            <img
              src='https://picsum.photos/282?random=1'
              alt='фото загруженное пользователем'
              className='elements__image'
            />
            <div className='elements__captions'>
              <h2 className='elements__name'>Карачаевск</h2>
              <div className='elements__like-container'>
                <button
                  className='elements__like-button'
                  type='button'
                  aria-label='отметить карточку'
                ></button>
                <span className='elements__like-counter'>0</span>
              </div>
            </div>
            <img
              src="<%=require('./images/trash.svg')%>"
              alt='корзина'
              className='elements__trash'
              aria-label='удалить карточку'
            />
          </li>
        </template>
      </ul>

      <div className='popup popup_profile'>
        <div className='popup__container'>
          <button
            className='popup__close-button cross'
            type='button'
            aria-label='закрыть'
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt='Крест'
              className='popup__close-button-img cross__img'
            />
          </button>
          <div className='popup__form-container'>
            <h2 className='popup__heading'>Редактировать профиль</h2>
            <form
              name='user-edit'
              className='popup__form popup__form_profile'
              noValidate
            >
              <label className='popup__field'>
                <input
                  required
                  type='text'
                  name='name'
                  id='user-name-input'
                  className='popup__input popup__input_user_name'
                  value='Жак-Ив Кусто'
                  minLength='2'
                  maxLength='40'
                />
                <span className='popup__error user-name-input-error'></span>
              </label>
              <label className='popup__field'>
                <input
                  required
                  type='text'
                  name='about'
                  id='user-character-input'
                  className='popup__input popup__input_user_character'
                  value='Исследователь океана'
                  minLength='2'
                  maxLength='200'
                />
                <span className='popup__error user-character-input-error'></span>
              </label>
              <button
                type='submit'
                className='popup__button'
                aria-label='сохранить изменения'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап карточки--> */}
      <div className='popup popup_card'>
        <div className='popup__container'>
          <button
            className='popup__close-button cross'
            type='button'
            aria-label='закрыть'
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt='Крест'
              className='popup__close-button-img cross__img'
            />
          </button>
          <div className='popup__form-container'>
            <h2 className='popup__heading'>Новое место</h2>
            <form
              name='card-edit'
              className='popup__form popup__form_card'
              noValidate
            >
              <label className='popup__field'>
                <input
                  required
                  type='text'
                  name='name'
                  id='card-name-input'
                  className='popup__input popup__input_card_name'
                  placeholder='Название'
                  minLength='2'
                  maxLength='30'
                />
                <span className='popup__error card-name-input-error'></span>
              </label>
              <label className='popup__field'>
                <input
                  required
                  type='url'
                  name='link'
                  id='card-address-input'
                  className='popup__input popup__input_card_address'
                  placeholder='Ссылка на картинку'
                />
                <span className='popup__error card-address-input-error'></span>
              </label>
              <button
                type='submit'
                className='popup__button'
                aria-label='создать новую карточку'
              >
                Создать
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап картинки--> */}
      <div className='popup popup_image'>
        <figure className='popup__container'>
          <button
            className='popup__close-button cross'
            type='button'
            aria-label='закрыть'
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt='Крест'
              className='popup__close-button-img cross__img'
            />
          </button>
          <img
            className='popup__img'
            src='https://loremflickr.com/1280/720'
            alt='Большое фото загруженное пользователем'
          />
          <figcaption className='popup__caption'>Подпись</figcaption>
        </figure>
      </div>
      {/* <!-- Попап удаления карточки--> */}
      <div className='popup popup_delete'>
        <div className='popup__container'>
          <button
            className='popup__close-button cross'
            type='button'
            aria-label='закрыть'
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt='Крест'
              className='popup__close-button-img cross__img'
            />
          </button>
          <div className='popup__form-container'>
            <h2 className='popup__heading'>Вы уверены?</h2>
            <form
              name='card-delete'
              className='popup__form popup__form_delete'
              noValidate
            >
              <button
                type='submit'
                className='popup__button'
                aria-label='создать новую карточку'
              >
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Попап аватара --> */}
      <div className='popup popup_avatar'>
        <div className='popup__container'>
          <button
            className='popup__close-button cross'
            type='button'
            aria-label='закрыть'
          >
            <img
              src="<%=require('./images/close.svg')%>"
              alt='Крест'
              className='popup__close-button-img cross__img'
            />
          </button>
          <div className='popup__form-container'>
            <h2 className='popup__heading'>Обновить аватар</h2>
            <form
              name='avatar-edit'
              className='popup__form popup__form_avatar'
              noValidate
            >
              <label className='popup__field'>
                <input
                  required
                  type='url'
                  name='link'
                  id='avatar-address-input'
                  className='popup__input popup__input_avatar_address'
                  placeholder='Ссылка на аватар'
                />
                <span className='popup__error avatar-address-input-error'></span>
              </label>
              <button
                type='submit'
                className='popup__button'
                aria-label='создать новую карточку'
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
