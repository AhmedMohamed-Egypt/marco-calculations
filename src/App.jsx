
import { MacroContextProvider } from './Context/MacroContext';
import TotalViewCalc from './components/TotalViewCalc';
function App() {
  return (
    <MacroContextProvider>
 <div className='container mx-auto'>
     <TotalViewCalc/>
      
    </div>
    </MacroContextProvider>
   
  );
}

export default App;
