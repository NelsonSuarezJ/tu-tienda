import 'bootstrap/dist/css/bootstrap.min.css';
import CardBlog from './components/Cards/CardBlog';
import CardProductos from './components/Cards/CardProductos';
import CarouselTienda from './components/Carousel/CarouselTienda';
import FooterTienda from './components/Footer/FooterTienda';
import NavBarTienda from './components/Navbar/NavBarTienda';
import  './App.css';

function App() {
  return (
    <div >
      <NavBarTienda />
      <CarouselTienda />
      <CardProductos />
      <CardBlog />
      <FooterTienda />
    </div>
  );
}

export default App;
