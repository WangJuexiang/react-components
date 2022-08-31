import Login from './components/Login';
import { BrowserRouter, Route, Link, } from 'react-router-dom'
import Home from './components/Home';
import Comment from './components/Comment';
import './App.css';


const App = () => {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Login /> */}
      {/* <Route path='/home' component={Home} /> */}
      {/* <Route path='/comment' component={Comment} /> */}
      <Home />
      {/* <Comment /> */}
    </div >
    // </BrowserRouter>

  );
}

export default App;

