import './styles/App.css';
import Header from './components/header';
import Headline from './components/headline';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Projects />
    </div>
  );
}

export default App;
