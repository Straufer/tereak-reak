import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome.jsx'
import About from './components/About.jsx'
import LessUseState from './components/LessUseState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/usestate' element={<LessUseState />} />
    </Routes>
  </Router>
)
