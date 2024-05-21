import React from 'react';

function NavList({ menus, setSelectedCategory }) {
  return (
    <nav>
      <ul>
        {menus.map(menu => (
          <li key={menu.id} onClick={() => setSelectedCategory(menu.id)}>
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;