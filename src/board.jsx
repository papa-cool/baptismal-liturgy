import React from 'react';
import styles from './board.module.css';
import Draggable from 'react-draggable';
import DATA from './data.js';
import { withRouter } from "react-router";

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
    //    admin: boolean
    // }
    super(props)

    this.state = {
      id: this.props.match.params.id,
      name: "",
      users: {},
      data: this.defaultPosition
    }
  }

  componentDidMount() {
    let users = {}
    if (this.state.id) { users[this.state.id] = "" }

    window.firebase.database().ref('data/'+this.state.id).once('value', (snapshot) => {
      this.setState({ data: {...this.defaultPosition, ...snapshot.val()} })
    })
    if (this.props.admin) {
      window.firebase.database().ref('users/').once('value', (snapshot) => {
        this.setState({ users: {...users, ...snapshot.val()} })
      })
      window.firebase.database().ref('data/'+this.state.id).on('value', (snapshot) => {
        this.setState({ data: {...this.defaultPosition, ...snapshot.val()} })
      })
      window.firebase.database().ref('users/').on('value', (snapshot) => {
        this.setState({ users: snapshot.val() || {} })
      })
    } else {
      window.firebase.database().ref('users/'+this.state.id).once('value', (snapshot) => {
        this.setState({ name: snapshot.val() || "" })
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.admin) {
        window.firebase.database().ref('data/'+prevState.id).off('value');
        window.firebase.database().ref('data/'+this.state.id).on('value', (snapshot) => {
          this.setState({ data: {...this.defaultPosition, ...snapshot.val()} })
        })
      }
      window.firebase.database().ref('data/'+this.state.id).once('value', (snapshot) => {
        this.setState({ data: {...this.defaultPosition, ...snapshot.val()} })
      })
    }
  }

  componentWillUnmount() {
    if (this.props.admin) {
      window.firebase.database().ref('data/'+this.state.id).off('value');
      window.firebase.database().ref('users/').off('value');
    }
  }

  defaultPosition = {
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

  changeUser = (event) => {
    this.props.history.push(`/admin/${event.target.value}`);
    this.setState({ id: event.target.value })
  }

  nameChanged = (event) => {
    window.firebase.database().ref('users/'+this.state.id).set(event.target.value)
    this.setState({name: event.target.value})
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
    window.firebase.database().ref('data/'+this.state.id+'/'+data.node.id).set({
      ratioDeltaX: data.x/data.node.offsetLeft + this.state.data[data.node.id].ratioDeltaX,
      ratioDeltaY: data.y/data.node.offsetTop + this.state.data[data.node.id].ratioDeltaY
    })
  }

  render() {
    const dragHandlers = {disabled: this.props.admin, onStop: this.onStop};
    let defaultOption
    if (!this.state.id) {
      defaultOption = <option disabled value="" selected="true">Select one user</option>
    }
    let nameInput
    if(this.props.admin) {
      nameInput =
        <select name="users" id="userSelect" onChange={this.changeUser.bind(this)}>
          { defaultOption || "" }
          {
            Object.entries(this.state.users).map(([id, name]) => {
              return (<option value={ id } selected={ id === this.state.id }>{name || id}</option>)
            })
          }
        </select>
    } else {
      nameInput =
        <Draggable>
          <div id="nameInput" className={styles.name}>
            <input type="text" placeholder="Votre nom" size="50" value={this.state.name} onChange={this.nameChanged.bind(this)} />
          </div>
        </Draggable>
    }
    return (
      <div>
        { nameInput }
        {// Display image first in order to get them behind title and quote when there are superimposed.
          DATA['image'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state.data[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state.data[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <img src={ attr.src } alt={ attr.id } id={ attr.id } className={styles.image} style={{ left: `calc(${attr.left})` }} draggable="false" />
              </Draggable>
            )
          })
        }
        {// Display quote before title in order to have titles easily selectable when both are superimposed.
          DATA['quote'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state.data[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state.data[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <p id={ attr.id } className={styles.quote} style={{ left: `calc(${attr.left})` }}>{ `${attr.text}` }</p>
              </Draggable>
            )
          })
        }
        {
          DATA['title'].map((attr) => {
            return (
              <Draggable positionOffset={{ x: `calc(${attr.left}*${this.state.data[attr.id].ratioDeltaX})`, y: `calc(${attr.top}*${this.state.data[attr.id].ratioDeltaY})` }} {...dragHandlers}>
                <p id={ attr.id } className={styles.title} style={{ left: `calc(${attr.left})` }}>{ attr.text }</p>
              </Draggable>
            )
          })
        }
      </div>
    );
  }
}

export default withRouter(Board);
