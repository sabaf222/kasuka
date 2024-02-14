
import './App.css';
import Header from './header/Header';
import Company from './components/aboutCompany/company';
import Client from './components/clients/Client';
import Feature from './components/features/Feature';
import Services from './components/services/Services';
import Cta from './components/cta/Cta';
import Portfolio from './components/portfolio/portfolio';
import Counts from './components/counts/Counts';
import Team from './components/teams/Teams';
import Members from './components/members/Members';
import ConnectUs from './components/conectUs/ConnectUS';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div >
     <Header></Header>
     <Company></Company>
     <Client></Client>
     <Feature></Feature>
     <Services></Services>
     <Cta></Cta>
    <Portfolio></Portfolio>
    <Counts></Counts>
    <Team></Team>
    <Members></Members>
    <ConnectUs></ConnectUs>
  <Footer></Footer>

    </div>
  );
}

export default App;
