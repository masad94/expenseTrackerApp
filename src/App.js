import React, { useContext, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalContext } from './context/GlobalContext';
import AppReducer from './context/AppReducer';

function App() {
  const initialState=useContext(GlobalContext);
  const [state,dispatch]=useReducer(AppReducer,initialState);
  
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    });
  }
  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    });
  }
  
  return (
      <GlobalContext.Provider value={{transactions : state.transactions,deleteTransaction,addTransaction}}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalContext.Provider>
  );
}

export default App;
