import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddServices from './components/AddServices/AddServices';
import Blog from './components/Blog/Blog';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/donation' element={<Donation />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/addservice' element={<AddServices />}></Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;