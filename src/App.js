import './App.css';
import Booklist from './component/Booklist';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Booklist></Booklist>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
