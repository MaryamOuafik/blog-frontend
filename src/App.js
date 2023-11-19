import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BloggerRegistration from './components/BloggerRegistration'
import BloggerLogin from './components/BloggerLogin'


function App() {
  return (
       <Router>
        <Routes>
        <Route path="/login" element={ <BloggerLogin/> } />
        <Route path="/register" element={ <BloggerRegistration/> } />

      </Routes>
    </Router>
  );
}

export default App;
