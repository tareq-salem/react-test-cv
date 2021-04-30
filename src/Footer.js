import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <address>Adresse: 4 Montéé du Père Camus<br/>
                                  69250 Albigy sur Saône
                </address>
                <p>Email: Tareqsalem@hotmail.com</p>
            </div>
        )
    }
}
export default Footer