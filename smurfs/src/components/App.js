import React, { Component } from 'react';
import './App.css';
import { addSmurf, getSmurfs} from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: 0,
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  componentDidUpdate() {
    this.props.getSmurfs()
  }

  
  onInputChange = e => {
    const {name, value} = e.target;
    this.setState ({
      [name] : value
    })
  }
  
  onButtonClick = () => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

      this.props.addSmurf(smurf)
      this.setState({
        name: '',
        age: 0,
        height: ''
      })
    }
  

  render() {
    console.log (this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <ul>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <h2>
                {smurf.name}
              </h2>
              <p>{smurf.age}</p>
              <p> {smurf.height} </p>
            </div>
          )
        })}
      </ul>
      <input name='name' onChange={this.onInputChange} value={this.state.name} />
      <input name='age' onChange={this.onInputChange} value={this.state.age} />
      <input name='height' onChange={this.onInputChange} value={this.state.height} />

      <button onClick={this.onButtonClick}> Add new smurf </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
  }

export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);