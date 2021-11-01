import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import CxoStrategy from './components/cxoStrategy/cxoStrategy';
import PagesRouter from './components/pageRouter';
import StrategyConsultancy from './components/strategyConsultancy/strategyConsultancy';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={PagesRouter} exact path="/" />
        <Route component={HomePage} exact path="/HomePage" />
        <Route component={CxoStrategy} exact path="/CxoStrategy" />
        <Route component={StrategyConsultancy} exact path="/StrategyConsultancy" />
      </Router>
    </div>
  );
}

export default App;
