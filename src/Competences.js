import React from 'react'
import PropTypes from 'prop-types'
import './ContentCv.css'

const Competences = ({competences}) => (
    <div className={`competences`}>
                <h2>Compétences:</h2>
                <strong>PHP :
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </strong><br />
                <strong>PHP : 
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </strong><br />
                <strong>PHP : 
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </strong>
            </div>
)
Competences.propTypes = {
    competences: PropTypes.string.isRequired,
  }

export default Competences