import './App.css';
import CounterView from './features/counter/CounterView';
import UserView from './features/users/UserView';



function App() {
  return (
    <div className="App">
     <CounterView/>
     <UserView/>
    </div>
  );
}

export default App;
