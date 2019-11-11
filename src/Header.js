import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text-dark">Expense Tracker</h1>
          <p className="text-dark">A simple expense tracker application</p>
        </div>
      </div>
    )
  }
}

export default Header;