import React, { useState } from 'react';
import './DropDownMenu.sass';
import arrowImg from '../../Images/arrow_down.svg';

function DropDownMenu({ children, isActiveMenu, activeItem, onClick }) {
  return (
    <div className={`dropdown ${isActiveMenu && 'dropdown_active'}`}>
      <button onClick={onClick} type="button" className="dropdown__button">
        <h5 className="dropdown__title">
          {activeItem} <span className="dropdown__percent">20%</span>
        </h5>
        <div
          style={{
            backgroundImage: `url(${arrowImg})`,
          }}
          className="dropdown__arrow"
        />
      </button>
      <ul className={`dropdown-list dropdown-list_active`}>{children}</ul>
    </div>
  );
}
export { DropDownMenu };
