import './App.css';
// Import the functions you need from the SDKs you need
import db from "./firebase";
import { onSnapshot, collection } from '@firebase/firestore';
import React, { useEffect, useState, Component } from 'react';

function App() {

  class Suggestions extends React.Component {

    constructor(props) {
      super(props) 
      this.state = { 
        inputVal: "",
        alts: ["Suggested Alternatives"]
      }
      this.onChangeHandler = this.onChangeHandler.bind(this)
      this.displayMatches = this.displayMatches.bind(this)
    }

    onChangeHandler(event) {
        this.setState({
          inputVal: event.target.value.toLowerCase()
      });
    }
    

    displayMatches = () => {
      alert("Materials you're using: " + this.state.inputVal)
      const matchedAlternatives = materials.filter(mat => mat.name == this.state.inputVal)
      if(matchedAlternatives.length >= 1) { 
        const matchedAltStr = matchedAlternatives.map(obj => String(obj.alternative))
        this.setState({
          alts: this.state.alts.push(String(matchedAlternatives[0].alternative))
        })
        alert("We recomend you use: " + matchedAlternatives[0].alternative + " instead")
        console.log(matchedAltStr)
        
      }
      else { alert("We could not find any alternatives on our databse, but keep looking for carbon friendly options!")} 
    }

    render() {
      return (
        <form onSubmit={this.displayMatches} autocomplete="off" className="form-field">
        <input id='name' placeholder='Name of Material' type='text' onChange={this.onChangeHandler}  required />
        <p>{this.alternativesList}</p>
        <button type="submit">Add Material</button>
        </form>
      )
    }
  }

  const [materials, setMaterials] = useState([]);

  useEffect(
    () => 
      onSnapshot(collection(db, "Materials"),(snapshot) =>
        setMaterials(snapshot.docs.map(doc => doc.data()))
      ), 
    []
  );



  return (
    <div className="App">
        <nav id="navbar">
          <a href="#Materials">Materials</a>
          <a href="#Green Technology">Green Technology</a>
        </nav>
  
        <section className="welcome-section">
          <h1></h1>
          <h2></h2>
        </section>
  
        <Suggestions />

        <div id="firebase_data">
        </div>
    </div>
    
  );
}


export default App;
