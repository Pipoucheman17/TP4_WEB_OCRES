import React from 'react';
import profil from './profil-de-lutilisateur.png';


export default class Picture extends React.Component {
    render() {
        return (
            <img src={profil} width="80px" alt=""></img>
        );
    }
}