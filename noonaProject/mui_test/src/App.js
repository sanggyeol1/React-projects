import './App.css';
import { CustomButton } from './CustomButton.style';
import styles from './App.module.css';
import { Button } from '@mui/material';
import CampingCard from './component/CampingCard/CampingCard.jsx';
import AppLayout from './layout/AppLayout.jsx';
import { Link, useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import CampPage from './pages/CampPage/CampPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {

  const navigate = useNavigate()


  return (




    <div className="App">
      <AppLayout />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/camps" element={<CampPage />} />
        <Route path='/camps/:id' element={<CampPage />} />
      </Routes>


    </div>
  );
}

export default App;
