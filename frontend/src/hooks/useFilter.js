import { useState } from 'react';

function useFilter(initialValues) {
  const [values, setValues] = useState(initialValues);
  const valuesKeys = Object.keys(initialValues);
  const initialStateOpenedMenus = valuesKeys.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});
  const [openedMenus, setOpenedMenus] = useState(initialStateOpenedMenus);
  function openTargetMenu(e) {
    const id = e.currentTarget.id;
    const menusStateArray = Object.entries(openedMenus);
    const menusStateArrayWithOpenedMenu = menusStateArray.map(([key, value]) =>
      key === id ? [key, !value] : [key, false],
    );
    const newState = menusStateArrayWithOpenedMenu.reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {},
    );
    setOpenedMenus(newState);
  }
  function resetValues() {
    setValues(initialValues);
  }
  function closeAllMenus() {
    setOpenedMenus(initialStateOpenedMenus);
  }
  function changeValue(e) {
    const { type, id, name } = e.currentTarget;
    console.log(name);
    setValues(prev => ({ ...prev, [type]: id }));
    closeAllMenus();
  }
  return {
    values,
    openedMenus,
    changeValue,
    openTargetMenu,
    closeAllMenus,
    resetValues,
  };
}

export default useFilter;
