import React from 'react';

const Filters = () => {
  return (
    <form className="border--medium m-0 mb-1 mt-1 col2">
      <div>
        <label htmlFor="filterName" className="form__label ">
          Filtrar por nombre
        </label>
        <input type="text" className="form__input-text" id="filterName" />
      </div>
      <div>
        <label htmlFor="filterPrice" className="form__label ">
          Filtrar por precio menor que
        </label>
        <select id="filterPrice" className="form__input-text">
          <option value="5">5 €</option>
          <option value="10">10 €</option>
          <option value="15">15 €</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
