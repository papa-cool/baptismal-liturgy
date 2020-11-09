import React from 'react';
import styles from './board.module.css';
import Draggable from 'react-draggable';

class Board extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.name}><input type="text" placeholder="Votre nom" size="50"></input></div>
        <Draggable><p className={styles.title} style={{ left: 'calc(10vw*0.9)' }}>Vêtement blanc</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(20vw*0.9)' }}>Profession de foi</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(30vw*0.9)' }}>Eau</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(40vw*0.9)' }}>Signation</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(50vw*0.9)' }}>Notre Père</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(60vw*0.9)' }}>Onction de Saint Chrême</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(70vw*0.9)' }}>Litanie des saints</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(80vw*0.9)' }}>Parole de Dieu</p></Draggable>
        <Draggable><p className={styles.title} style={{ left: 'calc(90vw*0.9)' }}>Cierge allumé</p></Draggable>
        <Draggable><img src="/image1.jpg" alt="" className={styles.image} style={{ left: 'calc(9vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image2.jpg" alt="" className={styles.image} style={{ left: 'calc(18vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image3.jpg" alt="" className={styles.image} style={{ left: 'calc(27vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image4.jpg" alt="" className={styles.image} style={{ left: 'calc(36vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image5.jpg" alt="" className={styles.image} style={{ left: 'calc(45vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image6.jpg" alt="" className={styles.image} style={{ left: 'calc(54vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image7.jpg" alt="" className={styles.image} style={{ left: 'calc(63vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image8.jpg" alt="" className={styles.image} style={{ left: 'calc(72vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image9.jpg" alt="" className={styles.image} style={{ left: 'calc(81vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><img src="/image10.jpg" alt="" className={styles.image} style={{ left: 'calc(90vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(10vw*0.9)' }}>«Vous êtes une création nouvelle dans le Christ, vous avez revêtu le Christ»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(20vw*0.9)' }}>«Acclamons la parole de Dieu»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(30vw*0.9)' }}>«Vous êtes membres du corps du Christ... Dieu vous marque de l'huile du salut»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(40vw*0.9)' }}>«Vous tous saints et saintes de Dieu, priez pour nous»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(50vw*0.9)' }}>«Je te baptise au nom du Père, du Fils, du Saint Esprit»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(60vw*0.9)' }}>«L'Eglise vous accueille avec joie, en son nom je vous marque de la croix, le signe du Christ notre Sauveur»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(70vw*0.9)' }}>«Croyez vous en Dieu le Père, le Fils, le Saint Esprit ?»<br />«Voulez-vous que votre enfant soit baptisé dans la foi de l'Eglise ?»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(80vw*0.9)' }}>«Notre Père, qui es aux cieux...»</p></Draggable>
        <Draggable><p className={styles.quote} style={{ left: 'calc(90vw*0.9)' }}>«Recevez la lumière du Christ»</p></Draggable>
      </div>
    );
  }
}

export default Board;
