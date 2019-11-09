import React from 'react';
import './App.css';
import ExpenseTracker from './ExpenseTracker';
import ExpenseForm from './ExpenseForm';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ExpenseTracker />
      <ExpenseForm />
    </>
  );
}

export default App;
