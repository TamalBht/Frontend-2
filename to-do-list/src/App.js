import Landing from './Components/landing.jsx';
import Main from './Components/main.jsx';
import './App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
   <>
    
   <Routes>
      <Route path="/" element={<Main/>}/>
   </Routes>
   </>
  );
}

export default App;
