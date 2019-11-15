import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Loadable from 'react-loadable';
// import List from './component/list.jsx';
import Loading from './component/loading';
import './home.css';

export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    const List = Loadable({
      loader: () => import('./component/list'),
      loading: Loading,
    });
    return <div>
      <Header></Header>
      <div className="main">
        <div className="page-container page-component">
          <List list={this.props.list}></List>
        </div>
      </div>
    </div>;
  }
}