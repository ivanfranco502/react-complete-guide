import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
    toggleForm();
  };

  const addNewExpenseHandler = (event) => {
    toggleForm();
  }

  const cancelFormHandler = (event) => {
    toggleForm();
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancelForm={cancelFormHandler}
        />
      ) : (
        <div className="new-expense__actions">
          <button onClick={addNewExpenseHandler}>Add new Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
