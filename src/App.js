import 'bootstrap/dist/css/bootstrap.min.css';
import CardBlog from './components/CardBlog';
import CardProductos from './components/CardProductos';
import CarouselTienda from './components/CarouselTienda';
import FooterTienda from './components/FooterTienda';
import NavBarTienda from './components/NavBarTienda';

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
