import './App.css';
import AddTransition from './components/AddTransition';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransitionList from './components/TransitionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalProvider className="container">
        <Balance />
        <IncomeExpenses />
        <TransitionList />
        <AddTransition />
      </GlobalProvider>
    </div>
  );
}

export default App;
