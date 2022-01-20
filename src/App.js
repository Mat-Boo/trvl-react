import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/services' exact element={<Services />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/signup' exact element={<SignUp />} />
            <Route path='*' exact element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
