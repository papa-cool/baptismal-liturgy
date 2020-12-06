import React from 'react';
import styles from './board.module.css';
import Draggable from 'react-draggable';
import DATA from './data.js';

// I'm not fully satisfied by the Draggable lib. Drag and drop triggers transform with pixel which
// is not responsive. In case of window resize, object can move outside the window.
// Since the goal of the app is to synchronize the window with another screen, responsivness is
// fully required.
// The synchronized state is relative to the window size and the initial position. We don't
// synchronize the absolute position.
// Admin screen is fully responsible.
// User screen needs to be reload after the resize of the window. (A reload of the component on
// resize should be implemented).
class Board extends React.Component {

  constructor(props){
    // props = {
    //    admin: boolean,
    //    userId: UUID (mandatory if not admin)
    // }
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
    
    if (this.props.admin) {
      this.onFirebaseChange();
    }
  }

  componentDidMount() {
    window.firebase.database().ref('users/').once('value', (snapshot) => {
      this.setState(snapshot.val())
    })
  }

  onFirebaseChange = () => {
    window.firebase.database().ref('users/').on('value', (snapshot) => {
      const data = snapshot.val();
      this.setState(data);
    })
  }

  nameChanged = (event) => {
    window.firebase.database().ref('users/'+this.props.userId+'/name').set(event.target.value)
  }

  onStop = (event, data) => {
    // Synchronize the ratio of the translation to calculate the new position
    // New position = Initial position + delta = Initial position + ratioDelta * Initial position
    // 
    // Draggable position only support number for pixel but nor vw/vh neither percentage.
    // We use Draggable positionOffset instead which add transform attribute with translate.
    // But this attributes is not overriden after the drag and drop. Draggable add a new translate.
    // This make wrong the calculation of the ratio. That-s why we need to addition the new ratio
    // and the ratio already in the state.
    // Switch the 2 following lines after the testing admin page
    // window.firebase.database().ref('users/'+this.props.userId+'/'+data.node.id).set({
    window.firebase.database().ref('users/'+data.node.id).set({
      ratioDeltaX: data.x/data.node.offsetLeft + this.state[data.node.id].ratioDeltaX,
      ratioDeltaY: data.y/data.node.offsetTop + this.state[data.node.id].ratioDeltaY
    })
  }

  render() {
    const dragHandlers = {disabled: this.props.admin, onStop: this.onStop};
    return (
      <div>
        <Draggable><div id="nameInput" className={styles.name}><input type="text" placeholder="Votre nom" size="50" onChange={this.nameChanged.bind(this)}></input></div></Draggable>
        {
          DATA['title'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <p id={ attr.id } className={styles.title} style={{ left: `calc(${attr.left})` }}>{ attr.text }</p>
              </Draggable>
            )
          })
        }
        {
          DATA['image'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <img src={ attr.src } alt={ attr.id } id={ attr.id } className={styles.image} style={{ left: `calc(${attr.left})` }} draggable="false" />
              </Draggable>
            )
          })
        }
        {
          DATA['quote'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <p id={ attr.id } className={styles.quote} style={{ left: `calc(${attr.left})` }}>{ `${attr.text}` }</p>
              </Draggable>
            )
          })
        }
      </div>
    );
  }
}

export default Board;
