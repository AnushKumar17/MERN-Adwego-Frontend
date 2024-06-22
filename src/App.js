import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdDetails from './pages/AdDetails';
import CreateAd from './pages/CreateAd';
import EditAd from './pages/EditAd';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/create' element={<CreateAd/>}/>
        <Route exact path='/posts/post/:id' element={<AdDetails/>}/>
        <Route exact path='/edit/:id' element={<EditAd/>}/>
        <Route exact path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
