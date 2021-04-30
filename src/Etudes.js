import React from 'react'
import PropTypes from 'prop-types'
import './ContentCv.css'

const Etudes = ({etudes}) => (
    <div className={`etudes`}>
                <h2>Etudes et diplômes:</h2>
                <ul>
                    <li>2011 - 2014</li>
                    <p>Licence en LEA Anglais-Arabe opton droit et gestion à l'université de Lyon 3.</p>
                    <li>2006 - 2007</li>
                    <p>Informatique à l'IUT de Nantes.</p>
                    <li>2000 - 2002</li>
                    <p>Ecole d'architecture à Ramallah (Palestine).</p>
                    <li>2000 - 2002</li>
                    <p>Baccalauréat série S avec mention très bien à Bethléem.</p><br/>
                    <br/>
                </ul>
            </div>
)
Etudes.propTypes = {
    etudes: PropTypes.string.isRequired,
  }

export default Etudes