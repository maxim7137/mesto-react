import React from 'react';

function ProfileEditForm() {
  return (
    <>
      <label className="popup__field">
        <input
          required
          type="text"
          name="name"
          id="user-name-input"
          className="popup__input popup__input_user_name"
          defaultValue=""
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
          defaultValue=""
          placeholder="Занятие"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error user-character-input-error"></span>
      </label>
    </>
  );
}

export default ProfileEditForm;
