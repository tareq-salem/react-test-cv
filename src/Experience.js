import React from 'react'
import PropTypes from 'prop-types'
import './ContentCv.css'

const Experience = ({experience}) => (
    <div className={`experience`}>
                <h2>Expérience professionnelles:</h2>
                <h3>Janvier 2014 - Février 2015:</h3>
                <p>Cariste polyvalent chez Hillion à Chassagny:</p>
                <ul>
                <li>Gestion de stock,</li>
                <li>Approvisionnement des maches,</li>
                <li>Chargement et déchargement de camions.</li>
                </ul>
                <h3>Août 2011 - Novembre 2012:</h3>
                <p>Préparateur de commandes chez la Général de Gastronomie à Oullins</p>
                <h3>Juillet 2008 - Novembre 2011:</h3>
                <p>Chef de ligne de production en agro-alimentaire au sein d'Adrimex à Nantes:</p>
                <ul>
                    <li>Contrôleur d'étiquetage,</li>
                    <li>Programmateur des machines,</li>
                    <li>Vérification des etrées au niveau des stocks.</li>
                </ul>
                <h3>Avril 2004 - Novembre 2007</h3>
                <p>Agent de production au sein de l'EARL du Pays d'Andreux en Loire Atlantique.</p>
            </div>
)
Experience.propTypes = {
    experience: PropTypes.string.isRequired,
  }

export default Experience