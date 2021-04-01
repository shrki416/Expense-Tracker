import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";

const App = () => (
  <>
    <Header />
    <ExpenseForm />
    <ExpenseTable />
  </>
);

export default App;

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       type: "",
//       name: "",
//       date: "",
//       amount: "",
//       checked: false,
//       items: [],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.checkedItem = this.handleCheck.bind(this);
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     let items = [...this.state.items];

//     items.push({
//       type: this.state.type,
//       name: this.state.name,
//       date: this.state.date,
//       amount: this.state.amount,
//       checked: this.state.checked,
//     });

//     this.setState({
//       items,
//       type: "cash",
//       name: "",
//       date: "",
//       amount: "",
//       checked: false,
//     });
//   };

//   handleChange = (e) => {
//     const target = e.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;
//     this.setState({ [name]: value });
//   };

//   handleCheck = (index) => {
//     const items = [...this.state.items];
//     const item = items[index];
//     item.checked = !item.checked;
//     this.setState({ items: items });
//   };

//   deleteItem() {
//     const newItems = this.state.items.filter((item) => !item.checked);
//     this.setState({ items: newItems });
//   }

//   componentDidMount() {
//     const items = localStorage.getItem("items") || "[]";
//     this.setState({ items: JSON.parse(items) });
//   }

//   componentDidUpdate() {
//     localStorage.setItem("items", JSON.stringify(this.state.items));
//   }
