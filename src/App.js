import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={apiResponse: ""};

    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callApi();
  }

  render() {
    const {
      apiResponse
    } = this.state;
    
    return (
      <div className="App">
        <p>{apiResponse}</p>
      </div>
    );
  }
}

export default App;
