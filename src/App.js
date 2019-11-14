import React from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      type: '',
      amount: ''
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm 
          name=""
          date=""
          type=""
          amount=""
        />
      </div>
    );
  }
}

export default App
