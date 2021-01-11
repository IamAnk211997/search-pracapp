import React,{ Component } from 'react';
import { Cardlist } from './component/cardlist/card-list.component';
import { SearchBox } from './component/searchbox/searchbox.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      services : [],
      searchfield : ''
    }
  }

handleChange = e =>{
  this.setState({searchfield : e.target.value})
}


  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ services : users}))
  }

  render() {
  const { services, searchfield }=this.state;
  const searchstate = services.filter(svc =>
     svc.name.toLowerCase().includes(searchfield.toLowerCase())
    );  
  return (

    <div className="App">
      <h1>Monsters</h1>
          <SearchBox 
          placeHolder='Search Services' 
          handleChange={this.handleChange}
          />  
          <Cardlist services={searchstate} />
    </div>
  );
  }
}

export default App;
