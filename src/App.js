import React from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable'
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "",
      name: "",
      date: "",
      amount: "",
      items: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items]

    items.push({
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
    })   

    this.setState({
      items,
      type: '',
      name: '',
      date: '',
      amount: ''
    })
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteItem(e){
    console.log('delete btn works!')
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <ExpenseForm 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
          <ExpenseTable items = {this.state.items} deleteItem = {this.deleteItem}/>
        </div>
      </>
    );
  }
}

export default App
