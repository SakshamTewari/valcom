import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/LoginPage/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </Router>
      <div>Valcom!</div>
    </>
  );
}

export default App;
