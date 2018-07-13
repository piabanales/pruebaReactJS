import { Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AltaEmpresaEmisora from './AltaEmpresaEmisora';

class NavBarTest extends Component {
  
  /*constructor() {
    super();
    this.state = {
      viewAlta: false
    };
  }*/

  /*onSelect(eventKey, syntheticEvent) {
    if (eventKey == 3.1) {
      this.setState((prevState, props) => {
        return { viewAlta: true}
      });
    }
  }*/

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home" onClick={this.props.handleHomeClick}>InvestIT</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Entidades administradoras" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Alta</MenuItem>
              <MenuItem eventKey={3.2}>Listado</MenuItem>
              <MenuItem eventKey={3.3}>Usuarios</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Empresas emisoras" id="basic-nav-dropdown">
              <MenuItem id={1} eventKey={3.1} onSelect={this.props.handleAltaClick}>Alta</MenuItem>
              <MenuItem eventKey={3.2}>Listado</MenuItem>
              <MenuItem eventKey={3.3}>Usuarios</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Emisiones" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Alta</MenuItem>
              <MenuItem eventKey={3.2}>Listado</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Reportes" id="basic-nav-dropdown">
              <MenuItem eventKey={3.2}>Listado</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Configuraciones" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Canales</MenuItem>
              <MenuItem eventKey={3.2}>Monedas</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>;
      </div>
    );
  }
}

export default NavBarTest;