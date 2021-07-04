
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, makeStyles, Box } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Component } from 'react';
import Balance  from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';

const useStyle = makeStyles({
  header:{
    color: '#2b302b',
    fontSize: 35,
    margin: '10px, 0',
    textTransform: 'uppercase'
  },
  component:{
    background: 'white',
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    
    '& > *':{
      width: '50%',
      padding: 10,
      height: '80vh'
    }
  }
})

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id:1,text:"momos",amount:-20},
    { id:2,text:"salary",amount:3000},
    { id:3,text:"book",amount:-100},
    { id:4,text:"bonus",amount:300}
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
  }

  return (
    <div className="App">
      <Typography className={classes.header}>EXpense TRacker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
          </Box>
      </Box>
    </div>
  );
}

export default App;
