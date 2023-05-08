import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Plans from './components/Plans/Plans'

import Infrastructure from './components/Infrastructure/Infrastructure'
import Modalities from './components/Modalities/Modalities'

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Plans />
      <Infrastructure />
      <Modalities />
      <Footer />
    </div>
  );
}