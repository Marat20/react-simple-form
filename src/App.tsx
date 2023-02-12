import { Route, Routes } from 'react-router-dom';
import { SingIn } from './components/SignIn';
import { SingUp } from './components/SingUp';
import { Profile } from './pages/Profile';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<SingIn />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
