import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Expense Tracker</h1>
          <p>A simple expense tracker application</p>
        </Container>
      </Jumbotron>

    )
  }
}

export default Header;