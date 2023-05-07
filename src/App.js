import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Section from './components/Section/Section1';
import Section2 from './components/Section/Section2';
import Section3 from './components/Section/Section3';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;