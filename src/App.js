import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Plans from './components/Plans/Plans';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Modalities from './components/Modalities/Modalities';
import Footer from './components/Footer/Footer';

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