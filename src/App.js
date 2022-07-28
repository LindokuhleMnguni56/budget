import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import './css/displayTransaction.css'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';

import {BrowserRouter as Router, Switch, Router} from 'react-router-dom'

function App(props) {

  const [transactionType, setTransactionType] = useState([]);
  const [transaction, setTransaction] = useState([]);
  

  const addTransaction = ((amount, item, transactionType)=>{
   
    setTransaction((items)=> [...items,{
      amount:amount,
      item:item,
      transactionType:transactionType
    }])

      console.log(transactionType) ;
  })
  return (

    <Router>
      <Switch>
        <Route path="/" component={Login}>

        </Route>
      </Switch>
    </Router>


    <div className="container">

        <DisplayTransaction list={transaction} />
        <AddItem  add={addTransaction} />
    </div>
  );
}

export default App;
