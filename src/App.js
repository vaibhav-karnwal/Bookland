import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import Search from './components/Search'

import {DataProvider} from './components/Context'

class App extends React.Component{
  render(){
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Search />
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
