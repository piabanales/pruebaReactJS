import { Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import NavBarTest from './NavBarTest';
import AltaEmpresaEmisora from './AltaEmpresaEmisora';

class App extends Component {

  constructor(props) {
    super(props);
    //alert(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAltaClick = this.handleAltaClick.bind(this);
    this.state = {
      viewAlta: false
    };
  }

  handleHomeClick() {
    this.setState({viewAlta: false});
  }

  handleAltaClick() {
    this.setState({viewAlta: true});
  }

  showScreen(){
    alert('Hello!');
  }

  myCallback = (dataFromChild) => {
        this.setState({ viewAlta: dataFromChild });
    }

  render() {
    const viewAlta = this.state.viewAlta;
    let divToShow;

    if(viewAlta){
      divToShow = <div><AltaEmpresaEmisora/></div>
    } else {
      divToShow = <div>This is the home page.</div>
    }
    return (
      <div>
        <NavBarTest callbackFromParent={this.myCallback}/>
        {divToShow}
      </div>

    );
  }
}

export default App;
