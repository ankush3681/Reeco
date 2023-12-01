import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailNav from './components/DetailNav';
import OrderData from './components/OrderData';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <DetailNav/>
     <OrderData/>
    </div>
  );
}

export default App;
