import './sass-files/App.scss';
import Header from './Team';
import Navbar from './Navbar';
import Offer from './Offer';
import Find from './Find';
import Vacancy from './Vacancy';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Offer />
      <Find />
      <Vacancy />
      <Footer />
    </div>
  );
}

export default App;
