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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items]

    items.push({
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
      checked: this.state.isCheckedToDelete
    })   

    this.setState({
      items,
      type: '',
      name: '',
      date: '',
      amount: '',
      isCheckedToDelete: false
    })
    console.log(this.state)
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    let formatDate = new Date()
    let dd = formatDate.getDate()
    let mm = formatDate.getMonth()
    let yy = formatDate.getFullYear()
    if (dd < 10) {
      dd += '0'
    } if (mm < 10) {
      mm += '0'
    }
    formatDate = `${mm}/${dd}/${yy}`
    if (e.target.name === 'date'){
      this.setState({
        date: formatDate
      }) 
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
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
  
  deleteItem(e){
    console.log('delete btn works!')
    // Create a variable that is a copy of items
    let items = [...this.state.items];

    items.push({
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
      checked: this.state.isCheckedToDelete
    });   
    console.log(items)

    // Loop through each item in items (copy)
      // if item is marked for deletion
      // then remove item from items array
    
    // update state: set items to equal the copy of the items
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
          />
        </div>
      </>
    );
  }
}

export default App