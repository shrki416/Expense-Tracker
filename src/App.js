import React from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkedItem = this.handleCheck.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      type: this.state.type,
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
      checked: this.state.isCheckedToDelete
    });

    this.setState({
      items,
      type: "",
      name: "",
      date: "",
      amount: "",
      isCheckedToDelete: false
    });
    console.log(this.state);
    console.log(items.length);

    localStorage.setItem("items", JSON.stringify(items));
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name] : value})
  };

  handleCheck = (index) => {
    const items = [...this.state.items];
    if (items.isCheckedToDelete === false){
      const item = items.filter(item => item.index === index);
      item.isCheckedToDelete = !item.isCheckedToDelete;
    }
    this.setState({ items: items });
    console.log(items);
    console.log(index)
  };

  deleteItem(index) {
    const newItems = [...this.state.items];
    console.log(newItems)
    if (newItems.checked === true) {
      newItems.splice(index, 1);
    }
    this.setState({ items: newItems });
  }

  componentDidMount() {
    localStorage.getItem("items") &&
      this.setState({ items: JSON.parse(localStorage.getItem("items")) });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <ExpenseForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            type={this.state.type}
            date={this.state.date}
            amount={this.state.amount}
          />
          <ExpenseTable
            items={this.state.items}
            deleteItem={this.deleteItem}
            checkedItem={this.handleCheck}
          />
        </div>
      </>
    );
  }
}

export default App