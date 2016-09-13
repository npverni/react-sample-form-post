import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onNameInput = this._onNameInput.bind(this);
    this.onEmailInput = this._onEmailInput.bind(this);

    this.state = {
      name: 'Fred',
      email: 'fred@example.com',
    };
  }

  _onNameInput(e) {
    this.setState({ name: e.target.value });
  }
 
  _onEmailInput(e) {
    this.setState({ email: e.target.value });
  }

  _onSubmit() {
    axios.post(
      'SOME_URL',
      {
        name: this.state.name,
        email: this.state.email
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 

  render() {
    const { name, email } = this.state;

    return (
      <div className="App">
        <p>
          <label>Name</label>
          <input value={name} type="text" onChange={this.onNameInput} />
        </p>
        <p>
          <label>Email</label>
          <input value={email} type="text" onChange={this.onEmailInput} />
        </p>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
