import React from 'react';
import styles from './board.module.css';

class Admin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      whiteClothTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      faithTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      waterTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      signationTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      ourFatherTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      anointingWithChrismTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      litanieOfTheSaintsTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      wordOfGodTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      candleTitle: {ratioDeltaX: 0, ratioDeltaY: 0},
      signationImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      candleImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      faithImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      litanieOfTheSaintsImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      whiteClothImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      anointingWithChrism1Image: {ratioDeltaX: 0, ratioDeltaY: 0},
      waterImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      anointingWithChrismImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      ourFatherImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      wordOfGodImage: {ratioDeltaX: 0, ratioDeltaY: 0},
      whiteClothQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      wordOfGodQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      anointingWithChrismQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      litanieOfTheSaintsQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      waterQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      signationQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      faithQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      ourFatherQuote: {ratioDeltaX: 0, ratioDeltaY: 0},
      candleQuote: {ratioDeltaX: 0, ratioDeltaY: 0}
    }
    this.onFirebaseChange()
  }

  onFirebaseChange = () => {
    window.firebase.database().ref('users/').on('value', (snapshot) =>{
      const data = snapshot.val();
      console.log(data.signationTitle)
      this.setState(data);
    })
  }

  render() {
    return (
      <div>
        <p id="whiteClothTitle" className={styles.title} style={{ left: 'calc(10vw*0.9)', transform: `translate(calc(10vw*0.9*${this.state.whiteClothTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.whiteClothTitle.ratioDeltaY}))` }}>Vêtement blanc</p>
        <p id="faithTitle" className={styles.title} style={{ left: 'calc(20vw*0.9)', transform: `translate(calc(20vw*0.9*${this.state.faithTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.faithTitle.ratioDeltaY}))` }}>Profession de foi</p>
        <p id="waterTitle" className={styles.title} style={{ left: 'calc(30vw*0.9)', transform: `translate(calc(30vw*0.9*${this.state.waterTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.waterTitle.ratioDeltaY}))` }}>Eau</p>
        <p id="signationTitle" className={styles.title} style={{ left: 'calc(40vw*0.9)', transform: `translate(calc(40vw*0.9*${this.state.signationTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.signationTitle.ratioDeltaY}))` }}>Signation</p>
        <p id="ourFatherTitle" className={styles.title} style={{ left: 'calc(50vw*0.9)', transform: `translate(calc(50vw*0.9*${this.state.ourFatherTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.ourFatherTitle.ratioDeltaY}))` }}>Notre Père</p>
        <p id="anointingWithChrismTitle" className={styles.title} style={{ left: 'calc(60vw*0.9)', transform: `translate(calc(60vw*0.9*${this.state.anointingWithChrismTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.anointingWithChrismTitle.ratioDeltaY}))` }}>Onction de Saint Chrême</p>
        <p id="litanieOfTheSaintsTitle" className={styles.title} style={{ left: 'calc(70vw*0.9)', transform: `translate(calc(70vw*0.9*${this.state.litanieOfTheSaintsTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.litanieOfTheSaintsTitle.ratioDeltaY}))` }}>Litanie des saints</p>
        <p id="wordOfGodTitle" className={styles.title} style={{ left: 'calc(80vw*0.9)', transform: `translate(calc(80vw*0.9*${this.state.wordOfGodTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.wordOfGodTitle.ratioDeltaY}))` }}>Parole de Dieu</p>
        <p id="candleTitle" className={styles.title} style={{ left: 'calc(90vw*0.9)', transform: `translate(calc(90vw*0.9*${this.state.candleTitle.ratioDeltaX}), calc(25vh*0.9*${this.state.candleTitle.ratioDeltaY}))` }}>Cierge allumé</p>
        <img src="/image1.jpg" alt="" id="signationImage" className={styles.image} style={{ left: 'calc(9vw*0.9)', transform: `translate(calc(9vw*0.9*${this.state.signationImage.ratioDeltaX}), calc(50vh*0.9*${this.state.signationImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image2.jpg" alt="" id="candleImage" className={styles.image} style={{ left: 'calc(18vw*0.9)', transform: `translate(calc(18vw*0.9*${this.state.candleImage.ratioDeltaX}), calc(50vh*0.9*${this.state.candleImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image3.jpg" alt="" id="faithImage" className={styles.image} style={{ left: 'calc(27vw*0.9)', transform: `translate(calc(27vw*0.9*${this.state.faithImage.ratioDeltaX}), calc(50vh*0.9*${this.state.faithImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image4.jpg" alt="" id="litanieOfTheSaintsImage" className={styles.image} style={{ left: 'calc(36vw*0.9)', transform: `translate(calc(36vw*0.9*${this.state.litanieOfTheSaintsImage.ratioDeltaX}), calc(50vh*0.9*${this.state.litanieOfTheSaintsImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image5.jpg" alt="" id="whiteClothImage" className={styles.image} style={{ left: 'calc(45vw*0.9)', transform: `translate(calc(45vw*0.9*${this.state.whiteClothImage.ratioDeltaX}), calc(50vh*0.9*${this.state.whiteClothImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image6.jpg" alt="" id="anointingWithChrism1Image" className={styles.image} style={{ left: 'calc(54vw*0.9)', transform: `translate(calc(54vw*0.9*${this.state.anointingWithChrism1Image.ratioDeltaX}), calc(50vh*0.9*${this.state.anointingWithChrism1Image.ratioDeltaY}))` }} draggable="false" />
        <img src="/image7.jpg" alt="" id="waterImage" className={styles.image} style={{ left: 'calc(63vw*0.9)', transform: `translate(calc(63vw*0.9*${this.state.waterImage.ratioDeltaX}), calc(50vh*0.9*${this.state.waterImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image8.jpg" alt="" id="anointingWithChrismImage" className={styles.image} style={{ left: 'calc(72vw*0.9)', transform: `translate(calc(72vw*0.9*${this.state.anointingWithChrismImage.ratioDeltaX}), calc(50vh*0.9*${this.state.anointingWithChrismImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image9.jpg" alt="" id="ourFatherImage" className={styles.image} style={{ left: 'calc(81vw*0.9)', transform: `translate(calc(81vw*0.9*${this.state.ourFatherImage.ratioDeltaX}), calc(50vh*0.9*${this.state.ourFatherImage.ratioDeltaY}))` }} draggable="false" />
        <img src="/image0.jpg" alt="" id="wordOfGodImage" className={styles.image} style={{ left: 'calc(90vw*0.9)', transform: `translate(calc(90vw*0.9*${this.state.wordOfGodImage.ratioDeltaX}), calc(50vh*0.9*${this.state.wordOfGodImage.ratioDeltaY}))` }} draggable="false" />
        <p id="whiteClothQuote" className={styles.quote} style={{ left: 'calc(10vw*0.9)', transform: `translate(calc(10vw*0.9*${this.state.whiteClothQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.whiteClothQuote.ratioDeltaY}))` }}>«Vous êtes une création nouvelle dans le Christ, vous avez revêtu le Christ»</p>
        <p id="wordOfGodQuote" className={styles.quote} style={{ left: 'calc(20vw*0.9)', transform: `translate(calc(20vw*0.9*${this.state.wordOfGodQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.wordOfGodQuote.ratioDeltaY}))` }}>«Acclamons la parole de Dieu»</p>
        <p id="anointingWithChrismQuote" className={styles.quote} style={{ left: 'calc(30vw*0.9)', transform: `translate(calc(30vw*0.9*${this.state.anointingWithChrismQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.anointingWithChrismQuote.ratioDeltaY}))` }}>«Vous êtes membres du corps du Christ... Dieu vous marque de l'huile du salut»</p>
        <p id="litanieOfTheSaintsQuote" className={styles.quote} style={{ left: 'calc(40vw*0.9)', transform: `translate(calc(40vw*0.9*${this.state.litanieOfTheSaintsQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.litanieOfTheSaintsQuote.ratioDeltaY}))` }}>«Vous tous saints et saintes de Dieu, priez pour nous»</p>
        <p id="waterQuote" className={styles.quote} style={{ left: 'calc(50vw*0.9)', transform: `translate(calc(50vw*0.9*${this.state.waterQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.waterQuote.ratioDeltaY}))` }}>«Je te baptise au nom du Père, du Fils, du Saint Esprit»</p>
        <p id="signationQuote" className={styles.quote} style={{ left: 'calc(60vw*0.9)', transform: `translate(calc(60vw*0.9*${this.state.signationQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.signationQuote.ratioDeltaY}))` }}>«L'Eglise vous accueille avec joie, en son nom je vous marque de la croix, le signe du Christ notre Sauveur»</p>
        <p id="faithQuote" className={styles.quote} style={{ left: 'calc(70vw*0.9)', transform: `translate(calc(70vw*0.9*${this.state.faithQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.faithQuote.ratioDeltaY}))` }}>«Croyez vous en Dieu le Père, le Fils, le Saint Esprit ?»<br />«Voulez-vous que votre enfant soit baptisé dans la foi de l'Eglise ?»</p>
        <p id="ourFatherQuote" className={styles.quote} style={{ left: 'calc(80vw*0.9)', transform: `translate(calc(80vw*0.9*${this.state.ourFatherQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.ourFatherQuote.ratioDeltaY}))` }}>«Notre Père, qui es aux cieux...»</p>
        <p id="candleQuote" className={styles.quote} style={{ left: 'calc(90vw*0.9)', transform: `translate(calc(90vw*0.9*${this.state.candleQuote.ratioDeltaX}), calc(75vh*0.9*${this.state.candleQuote.ratioDeltaY}))` }}>«Recevez la lumière du Christ»</p>
      </div>
    );
  }
}

export default Admin;
