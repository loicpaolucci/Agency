import './work.css';
import { Link , Routes, Route} from 'react-router-dom';
import Platon from './Platon';
import Sedal from './Sedal';
import Solane from './Solane';


  const Work = () => 
  


  <div className="work">
  <h1>Projet</h1>
  <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
  <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
  
  <li><Link to="/work/platon" className='pla'>PLATON</Link></li>
  <li><Link to="/work/solane" className='sol'>SOLANE</Link></li>
  <li><Link to="/work/sedal" className='sed'>SEDAL</Link></li>

    <Routes>
      <Route path="/platon" element={<Platon />} />
    </Routes>

    <Routes>
      <Route path="/solane" element={<Solane />} />
    </Routes>

    <Routes>
      <Route path="/sedal" element={<Sedal />} />
    </Routes>

    </div>
 
 
export default Work;