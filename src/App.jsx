import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Drinks from './components/Drinks/Drinks';
import Footer from './components/Footer/Footer';
import Contato from './components/FormContato/Contato';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NossoTime from './components/NossoTime/NossoTime';
import SobreNos from './components/SobreNós/SobreNos';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/drinks">
            <Drinks />
          </Route>

          <Route path="/sobre-nos">
            <SobreNos />
          </Route>

          <Route path="/nosso-time">
            <NossoTime />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

        </Switch> 
        <Footer />
      </BrowserRouter>
    </div>
    // alt + seta pra cima = ctrlc + ctrlv
  );
}