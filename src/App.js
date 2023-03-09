import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';
import Hello from './Hello';
import Home from "./Home";

function App() {
  return (<div className='p-5'>
  
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        {/* <Route exact path='/' element={<Home />} /> */}
      </Routes>
    </Router>

  </div>);
}

export default App;
