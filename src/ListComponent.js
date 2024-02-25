// ListComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/` + item.name}>
            {item.name} {/* Display whatever property you want */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
