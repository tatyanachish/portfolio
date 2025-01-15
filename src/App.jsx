import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import About from './About'
import Project from './Project'
import Contact from './Contacts'
import Logo from './Logo'
import AboutProject from './AboutProject'


function App() {  
  return ( <Router className='menu'>  
          <div className='logo'>
            <Logo/>
          </div>                
          <nav>
            <Link to="/" className='page'>Projects</Link>
            <Link to="/about" className='page'>About</Link>            
            <Link to="/contact" className='page'>Contacts</Link>
          </nav>          
          <Routes>           
            <Route path="/" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about/:title" element={<AboutProject/>}/>
          </Routes>
        </Router>
  )
}

export default App
