import React, {Component} from 'react';
import Home from './src/screen/home';
import Screen1 from './src/screen/screen1';
import Screen2 from './src/screen/screen2';
import Navigation from './src/screen/Navigate';

export default class App extends Component {
  render() {
    return (
      <Navigation />
      // <Screen1 />
      // <Screen2 />
    );
  }
}
