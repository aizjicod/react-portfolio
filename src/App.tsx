import './styles/App.css';
import Header from './components/header';
import Headline from './components/headline';
import Projects from './components/projects';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Projects />
      <About />
    </div>
  );
}

export default App;
