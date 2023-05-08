import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Plans from './components/Plans/Plans'

import Infrastructure from './components/Infrastructure/Infrastructure'
import Section3 from './components/Section/Section3/Modalities';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Plans />
      <Infrastructure />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;