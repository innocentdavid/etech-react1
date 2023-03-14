import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';
import Blog from './blog';
import Hello from './Hello';
import Home from "./Home";
import Todo from './Todo';

function App() {
  return (<div className='p-5'>
  
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route exact path='/' element={<Home />} /> */}
      </Routes>
    </Router>

  </div>);
}

export default App;
