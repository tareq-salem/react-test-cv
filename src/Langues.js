import React from 'react'
import PropTypes from 'prop-types'
import './ContentCv.css'

const Langues = ({langues}) => (
    <div className={`langues`}>
                <h2>Langues:</h2>
                <ul>
                    <li>Arabe:</li>
                    <b>bilingue.</b>
                    <li>Anglais:</li>
                    <b>parlé, écrit et compris.</b>
                </ul>
            </div>
)
Langues.propTypes = {
    langues: PropTypes.string.isRequired,
  }

export default Langues