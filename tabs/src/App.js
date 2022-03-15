import './App.css';
import Tabs from './components/tabs';

function App() {

  

  return (
    <div className="App">
      <Tabs tabs = {[
        {header: 'tab1', content: 'tab1 content'},
        {header: 'tab2', content: 'tab2 content'},
        {header: 'tab3', content: 'tab3 content'},
      ]} />
    </div>
  );
}

export default App;
