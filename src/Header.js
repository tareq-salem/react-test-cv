import React from 'react';
import './photo2.jpg'
import './Header.css'
class Header extends React.Component {
 
    render(){
      return(
        <div className="header">
          <div className="titre">
            <h1>Tareq Salem</h1>
            <p>Développeur Web</p>
          </div>
          <div className="photo">
            <img src="https://www.bing.com/th/id/OIP.tLUZfA_5RyNiEYhHn998yQHaFj?w=288&h=205&c=7&o=5&pid=1.7" alt="photoPersonelle" className="photo_identite"/>
          </div>
        </div>
      )
    }  
}
export default Header;