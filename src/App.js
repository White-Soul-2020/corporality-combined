import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DigitalMarketing from './components/digitalMarketing/digitalMarketing';
import CxoStrategy from './components/cxoStrategy/cxoStrategy';
import PagesRouter from './components/pageRouter';
import StrategyConsultancy from './components/strategyConsultancy/strategyConsultancy';
import Home from './components/Home/Home';
import Interactive_Blue_Print from './components/Interactive_blue_print/interactive_blue_print';
import Corporate_Strategy from './components/corporate Strategy/corporate Strategy';
import Go_to_marketing from './components/go_to_marketing/got_to_marketing';
import Inclusion_and_diversity from './components/inclusion_and_diversity/inclusion_and_diversity';
import Patnership from './components/patnership_program/patnership';
function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Route component={Home} exact path="/" />
        <Route component={HomePage} exact path="/HomePage" />
=======
        <Route component={PagesRouter} exact path="/" />
        <Route component={DigitalMarketing} exact path="/DigitalMarketing" />
>>>>>>> c3a62508e5eb3c76b5a2e4d8cfee35a02dcb6100
        <Route component={CxoStrategy} exact path="/CxoStrategy" />
        <Route component={StrategyConsultancy} exact path="/StrategyConsultancy" />
        <Route component={Interactive_Blue_Print} exact path="/Interactive_Blue_Print" />
        <Route component={Corporate_Strategy} exact path="/Corporate_Strategy" />
        <Route component={Go_to_marketing} exact path="/Go_to_marketing" />
        <Route component={Inclusion_and_diversity} exact path="/Inclusion_and_diversity" />
        <Route component={Patnership} exact path="/patnership" />
      </Router>
    </div>
  );
}

export default App;
