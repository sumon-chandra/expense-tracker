import React from "react";
import { useContext } from "react/cjs/react.development";
import {GlobalContext} from "../context/GlobalState"
import Transaction from "./Transaction";

const TransitionList = () => {
  const {transactions} = useContext(GlobalContext);

  
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        
      </ul>
    </div>
  );
};

export default TransitionList;
