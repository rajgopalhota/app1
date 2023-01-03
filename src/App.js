import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
function App() {
  return (
    <>
      <section></section>
      <Navbar i2="About Us" />
      <Routes>
        <Route path='/' element={<TextArea heading="Convert to Uppercase" />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
