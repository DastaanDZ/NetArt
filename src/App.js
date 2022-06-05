
import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/navbar/Nav';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';

function App() {
  return (
    <>
    <div className="landing">
      <Nav/>
    <Page1/>
    <Page2/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
