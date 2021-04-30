import React from 'react'
import './ContentCv.css'
import Experience from './Experience';
import Etudes from './Etudes'
import Langues from './Langues'
import Competences from './Competences'

class ContentCv extends React.Component{
    render(){
        return(
        <div className="content">
            <Experience className="experience"/>
            <Etudes className="etudes"/>   
            <Langues className="langues"/>    
            <Competences className="competences"/>
        </div>
            
        )
    }           
}
export default ContentCv;