import React from 'react';

class Item extends React.Component {
  render() {
    const membersLi = this.props.members.map((member, index) => {
      return <li key={index}>{member}</li>;
    });

    // const icon = this.props.icon === null ? 'Icono por defecto' : this.props.icon;

    // let icon = '';
    // if (this.props.icon === null) {
    //   icon = 'Icono por defecto';
    // } else {
    //   icon = this.props.icon;
    // }

    return (
      <article>
        <h2 className="card__title ">{this.props.name}</h2>
        <div className="card__description ">
          <span className={`card__img fa ${this.props.icon}`}></span>
          {/* <span>{this.props.icon}</span> */}
          {/* <span>{this.props.icon === null ? 'Icono por defecto' : this.props.icon}</span> */}
          <h3>Members:</h3>
          <ul className="card__description ">{membersLi}</ul>
        </div>
      </article>
    );
  }
}

Item.defaultProps = {
  icon: 'Icono por defecto!!!!!!!'
};

export default Item;
