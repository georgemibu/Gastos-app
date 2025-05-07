import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="title">Mis Gastos</h1>
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/agregar">Agregar</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/planificacion">Planificación</Link>
    </nav>
  </header>
);

export default Header;
