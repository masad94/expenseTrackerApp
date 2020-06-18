import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import TransactionItem from './TransactionItem';

function TransactionList(){
    const {transactions}=useContext(GlobalContext);
    
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>(<TransactionItem key={transaction.id} transaction={transaction} />))} 
            </ul>
        </div>
    );
}

export default TransactionList;