import { Route, Routes } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
