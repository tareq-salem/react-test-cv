import React from 'react';
import Header from './Header';
import ContentCv from './ContentCv';
import Footer from './Footer'
import './photo2.jpg'

class App extends React.Component {
  render(){
    
    return(
      <div>
        <Header/>
        <ContentCv/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;
