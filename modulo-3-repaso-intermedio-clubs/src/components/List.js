import React from 'react';
import Item from './Item';

const List = props => {
  const items = props.clubs.map((club, index) => {
    return (
      <li className="card " key={index}>
        <Item name={club.name} icon={club.fa} members={club.members} />
      </li>
    );
  });

  return <ul className="cards">{items}</ul>;
};

export default List;
