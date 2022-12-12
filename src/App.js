
import './App.css';
import Home from './pages/HomePage/homepage'
import Servicepage from './pages/ServicesPage/servicepage';
import Providerpage from './pages/ProvidersPage/providerpage'
function App() {
  return (
   <>
   <div className='container'>
    <Home/>
   <Servicepage/>
   <Providerpage/>
   </div>

   </>
  );
}

export default App;
