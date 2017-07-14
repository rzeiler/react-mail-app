import React, { Component } from 'react';

import Menu from './component/Menu';
import List from './component/List';
import Content from './component/Content';
import './css/pure-min.css';
import './css/layouts/email.css';

import mails from './data/content.json';

class App extends Component {

  constructor(props) {
    super(props);

    var filterMails = mails.map( function (key,index) {
      return (key.type === 0) ? key : false;
    });


    this.state = {
      open: false,
      menu: [
        {label: 'Inbox', activ: true, href: '#/inbox', sum: 40, type: 0 },
        {label: 'Important', activ: false, href: '#/important', sum: 1, type: 1 },
        {label: 'Sent', activ: false, href: '#/sent', sum: 205, type: 2 },
        {label: 'Drafts', activ: false, href: '#/drafts', sum: 1, type: 3 },
        {label: 'Trash', activ: false, href: '#/trash', sum: 35, type: 4 },
      ],
      mails: filterMails
    };
    window.addEventListener('popstate', this.onLocationChange);
  }



  onLocationChange = (e) => {
    var t = this.state.menu.map( function (key,index) {
      var item = key;
      item.activ = (document.location.hash === key.href) ? true : false;
      return item;
    });
    this.setState({menu: t});
  }

  render() {
    return (
      <div id="layout" className="content pure-g">
        <Menu menu={this.state.menu} />
        <List list={this.state.mails} />
        <Content content={this.state.mails} />
     </div>
    );
  }
}

export default App;
