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
      isCheckedToDelete: false,
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

  // need to fix: will be deprecated soon
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('items', JSON.stringify(nextState.items))
  }
  
  componentDidMount() {
    localStorage.getItem("items") &&
      this.setState({
        items: JSON.parse(localStorage.getItem("items"))
      });
  }
  
  deleteItem(){
    console.log('delete btn works!')

    // const arrayCopy = this.state.items
    // this.setState({ items: arrayCopy })
    // console.log(arrayCopy)
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
            name = {this.state.name}
            type = {this.state.type}
            date = {this.state.date}
            amount = {this.state.amount}
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