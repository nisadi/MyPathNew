import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './About';
import Contact from './Contact';
import Header from './components/header';  
import Footer from './components/footer'; 

function App() {
  return (
    <div className='app flex flex-col min-h-screen'>
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;