import { Routes, Route, Link, useNavigate } from "react-router-dom"
import './App.css';
import Layout from "./layout/AppLayout";
import Homepage from "./page/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
