import Home from './routes/Home'
import Detail from './routes/Detail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <div>
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Detail />} />
          </Routes>
      </Router>
      
    </div>
  )
};

export default App;
