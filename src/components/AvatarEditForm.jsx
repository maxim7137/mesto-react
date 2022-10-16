import React from 'react';

function AvatarEditForm() {
  return (
    <>
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
    </>
  );
}

export default AvatarEditForm;
