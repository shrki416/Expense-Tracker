import React from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

export default App
