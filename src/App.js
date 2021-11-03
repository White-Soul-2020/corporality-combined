import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DigitalMarketing from './components/digitalMarketing/digitalMarketing';
import CxoStrategy from './components/cxoStrategy/cxoStrategy';
import PagesRouter from './components/pageRouter';
import StrategyConsultancy from './components/strategyConsultancy/strategyConsultancy';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={PagesRouter} exact path="/" />
        <Route component={DigitalMarketing} exact path="/DigitalMarketing" />
        <Route component={CxoStrategy} exact path="/CxoStrategy" />
        <Route component={StrategyConsultancy} exact path="/StrategyConsultancy" />
      </Router>
    </div>
  );
}

export default App;
