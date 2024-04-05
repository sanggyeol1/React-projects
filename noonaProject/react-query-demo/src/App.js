import './App.css';
import { Routes,Route, Link } from "react-router-dom"
import ReactQueryPage from './component/ReactQueryPage';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className='main-container'>
    <nav>
      <Link to="/">homepage</Link>
      <Link to="/react-query">react-query</Link>
    </nav>
    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/react-query" element={<ReactQueryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
