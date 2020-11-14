import React from 'react';
import styles from './board.module.css';
import Draggable from 'react-draggable';

class Board extends React.Component {

  nameChanged = (event) => {
    window.firebase.database().ref('users/'+this.props.userId+'/name').set(event.target.value)
  }

  onStop = (event, data) => {
    window.firebase.database().ref('users/'+this.props.userId+'/'+data.node.id).set({x: data.x, y: data.y})
  }

  render() {
    return (
      <div>
        <Draggable onStop={this.onStop.bind(this)}><div id="nameInput" className={styles.name}><input type="text" placeholder="Votre nom" size="50" onChange={this.nameChanged.bind(this)}></input></div></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="whiteClothTitle" className={styles.title} style={{ left: 'calc(10vw*0.9)' }}>Vêtement blanc</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="faithTitle" className={styles.title} style={{ left: 'calc(20vw*0.9)' }}>Profession de foi</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="waterTitle" className={styles.title} style={{ left: 'calc(30vw*0.9)' }}>Eau</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="signationTitle" className={styles.title} style={{ left: 'calc(40vw*0.9)' }}>Signation</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="ourFatherTitle" className={styles.title} style={{ left: 'calc(50vw*0.9)' }}>Notre Père</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="anointingWithChrismTitle" className={styles.title} style={{ left: 'calc(60vw*0.9)' }}>Onction de Saint Chrême</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="litanieOfTheSaintsTitle" className={styles.title} style={{ left: 'calc(70vw*0.9)' }}>Litanie des saints</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="wordOfGodTitle" className={styles.title} style={{ left: 'calc(80vw*0.9)' }}>Parole de Dieu</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="candleTitle" className={styles.title} style={{ left: 'calc(90vw*0.9)' }}>Cierge allumé</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image1.jpg" alt="" id="signationImage" className={styles.image} style={{ left: 'calc(9vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image2.jpg" alt="" id="candleImage" className={styles.image} style={{ left: 'calc(18vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image3.jpg" alt="" id="faithImage" className={styles.image} style={{ left: 'calc(27vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image4.jpg" alt="" id="litanieOfTheSaintsImage" className={styles.image} style={{ left: 'calc(36vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image5.jpg" alt="" id="whiteClothImage" className={styles.image} style={{ left: 'calc(45vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image6.jpg" alt="" id="anointingWithChrism1Image" className={styles.image} style={{ left: 'calc(54vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image7.jpg" alt="" id="waterImage" className={styles.image} style={{ left: 'calc(63vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image8.jpg" alt="" id="anointingWithChrismImage" className={styles.image} style={{ left: 'calc(72vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image9.jpg" alt="" id="ourFatherImage" className={styles.image} style={{ left: 'calc(81vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><img src="/image0.jpg" alt="" id="wordOfGodImage" className={styles.image} style={{ left: 'calc(90vw*0.9)' }} draggable="false" /></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="whiteClothQuote" className={styles.quote} style={{ left: 'calc(10vw*0.9)' }}>«Vous êtes une création nouvelle dans le Christ, vous avez revêtu le Christ»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="wordOfGodQuote" className={styles.quote} style={{ left: 'calc(20vw*0.9)' }}>«Acclamons la parole de Dieu»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="anointingWithChrismQuote" className={styles.quote} style={{ left: 'calc(30vw*0.9)' }}>«Vous êtes membres du corps du Christ... Dieu vous marque de l'huile du salut»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="litanieOfTheSaintsQuote" className={styles.quote} style={{ left: 'calc(40vw*0.9)' }}>«Vous tous saints et saintes de Dieu, priez pour nous»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="waterQuote" className={styles.quote} style={{ left: 'calc(50vw*0.9)' }}>«Je te baptise au nom du Père, du Fils, du Saint Esprit»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="signationQuote" className={styles.quote} style={{ left: 'calc(60vw*0.9)' }}>«L'Eglise vous accueille avec joie, en son nom je vous marque de la croix, le signe du Christ notre Sauveur»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="faithQuote" className={styles.quote} style={{ left: 'calc(70vw*0.9)' }}>«Croyez vous en Dieu le Père, le Fils, le Saint Esprit ?»<br />«Voulez-vous que votre enfant soit baptisé dans la foi de l'Eglise ?»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="ourFatherQuote" className={styles.quote} style={{ left: 'calc(80vw*0.9)' }}>«Notre Père, qui es aux cieux...»</p></Draggable>
        <Draggable onStop={this.onStop.bind(this)}><p id="candleQuote" className={styles.quote} style={{ left: 'calc(90vw*0.9)' }}>«Recevez la lumière du Christ»</p></Draggable>
      </div>
    );
  }
}

export default Board;
