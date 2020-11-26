import React from 'react';
import Header from './Header';
import Middle from './Middle';
import Info from './Info';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Middle/>
        <Info/>
      </div>
    );
  }
}

export default App;
