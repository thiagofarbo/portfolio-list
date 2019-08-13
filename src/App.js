import React, {Component} from 'react';
import './App.css';
import Portfolios from './components/portfolios';

class App extends Component {
  render() {
    return (
        <Portfolios portfolios={this.state.portfolios} />
    )
}

state = {
  portfolios: []
};

componentDidMount (){

   const URL = 'http://localhost:8090/api/peoples';

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
         this.setState({ portfolios: data})
    }).catch(console.log)
  }
} 
export default App;
