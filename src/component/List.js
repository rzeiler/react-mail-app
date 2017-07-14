import React, { Component } from 'react';


class ListItem extends Component {

  render() {

    return (
      <div className="email-item email-item-selected pure-g">
          <div className="pure-u">
              test
          </div>
          <div className="pure-u-3-4">
              <h5 className="email-name">{this.props.name}</h5>
              <h4 className="email-subject">{this.props.subject}</h4>
              <p className="email-desc">
                  {this.props.body}
              </p>
          </div>
      </div>
    );

  }

}


class List extends Component {

  render() {
    const items = this.props.list.map((key,index) =>
      console.log('mai',key)
      //<ListItem key={index} name={key.name} subject={key.subject} body={key.body} />
    );
    return (
      <div id="list" className="pure-u-1">
        {items}
      </div>
    );
  }

}

export default List;
