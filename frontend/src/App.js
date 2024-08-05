import { useState } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Incomes } from './Components/Incomes/Incomes';
import { Expenses } from './Components/Expenses/Expenses';
import { useGlobalContext } from './Context/GlobalContext';

function App() {
  const [active,setActive] = useState(1);
 
  const displayData = ()=>{
    switch(active){
      case 1 :
        return <Dashboard/>
      case 2 :
        return <Dashboard/>
      case 3 :
        return <Incomes/>
      case 4 :
        return <Expenses/>  
      default : 
       return <Dashboard/>
    }
  }

  const globalContext = useGlobalContext();
  return (
    <div className="App h-screen w-screen relative">
      <div className='main-layout p-8 h-full flex gap-8'>
        <Navigation active={active} setActive={setActive}/>
        <main className='flex flex-1 backdrop:bg-slate-200 rounded-3xl border-2 overflow-auto overflow-x-hidden bg-slate-100'>
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
 