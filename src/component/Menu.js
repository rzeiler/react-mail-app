import React, { Component } from 'react';

class Menu extends Component {

  render() {
    const items = this.props.menu.map((key,index) =>
      <Menuitem key={index} label={key.label} href={key.href} sum={key.sum} activ={key.activ} />
    );
    return (
      <div id="nav" className="pure-u">
          <a href="#/" className="nav-menu-button">Menu</a>
          <div className="nav-inner">
              <button className="primary-button pure-button">Compose</button>
              <div className="pure-menu">
                  <ul className="pure-menu-list">
                      {items}
                      <li className="pure-menu-heading">Labels</li>
                      <li className="pure-menu-item"><a href="#/" className="pure-menu-link"><span className="email-label-personal"></span>Personal</a></li>
                      <li className="pure-menu-item"><a href="#/" className="pure-menu-link"><span className="email-label-work"></span>Work</a></li>
                      <li className="pure-menu-item"><a href="#/" className="pure-menu-link"><span className="email-label-travel"></span>Travel</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }

}

class Menuitem extends Component {

  render() {
    return (
      <li className={(this.props.activ) ? 'pure-menu-item pure-menu-selected' : 'pure-menu-item'}><a href={this.props.href} className="pure-menu-link">{this.props.label} <span className="email-count">({this.props.sum})</span></a></li>
    );
  }

}

export default Menu;
