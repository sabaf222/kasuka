
import './App.css';
import { useRoutes } from 'react-router-dom'
import Header from './header/Header';
import Footer from './components/footer/Footer';
import routes from './components/routes';



function App() {
  let router = useRoutes(routes)
  return (
    <div >
   
      {router}

     




    </div>
  );
}

export default App;
