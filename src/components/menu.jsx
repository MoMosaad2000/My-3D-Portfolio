import React from 'react';
import 'tailwindcss/tailwind.css';
import '../index.css';
import '../stylee.css';

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="fixed top-0 right-0 translate-y-1/2 p-3 bg-indigo-600 w-11 h-11 rounded-md z-50"
        aria-label={menuOpened ? "Close menu" : "Open menu"}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-1/4" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`fixed top-0 right-0 translate-y-0/4 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        }`}
      > 
        <div className="flex-1 flex flex-col gap-6 p-8" style={{backgroundColor:'#681D77'}} >
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors" aria-label={label}>
      {label}
    </button>
  );
};

export default Menu;
