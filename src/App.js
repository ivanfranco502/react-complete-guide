import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const defaultExpenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
      id: "e1",
    },
    {
      title: "Health Insurance",
      amount: 546.15,
      date: new Date(2022, 4, 14),
      id: "e2",
    },
    {
      title: "Gas",
      amount: 45.85,
      date: new Date(2022, 5, 2),
      id: "e3",
    },
    {
      title: "Light",
      amount: 158.52,
      date: new Date(2022, 5, 3),
      id: "e4",
    },
  ];

  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(previousExpenses => [...previousExpenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
