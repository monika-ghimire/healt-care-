
import './App.css';
import Home from './pages/HomePage/homepage'
import Servicepage from './pages/ServicesPage/servicepage';
import Providerpage from './pages/ProvidersPage/providerpage'
import Reviewpage from './pages/ReviwePage/reviewpage'
import Articlepage from './pages/articalPage/articalpage';
function App() {
  return (
   <>
   <div className='container'>
    {/* <Home/>
   <Servicepage/>
   <Providerpage/>
   <Reviewpage/> */}
   <Articlepage/>
   </div>

   </>
  );
}

export default App;
