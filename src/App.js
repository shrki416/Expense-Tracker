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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('items', JSON.stringify(nextState.items))
  }
  
  componentDidMount() {
    localStorage.getItem("items") &&
      this.setState({
        items: JSON.parse(localStorage.getItem("items"))
      });
  }
  
  deleteItem(e){
    console.log('delete btn works!')
  }

  checked(e){
    console.log('checkbox checked!')
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
          <ExpenseTable 
            items = {this.state.items} 
            deleteItem = {this.deleteItem}
            checked = {this.checked}
          />
        </div>
      </>
    );
  }
}

export default App