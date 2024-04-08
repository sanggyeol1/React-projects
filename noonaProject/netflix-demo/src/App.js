import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetialPage from './pages/MovieDetail/MovieDetialPage';
import MoviePage from './pages/Movies/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Routes, Route } from "react-router-dom"



//홈페이지 /
//영화 전체 보여주는 페이지(서치) /movies
//영화 디테일 페이지 /movies/:id
//추천영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />

          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetialPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
  

  );
}

export default App;
