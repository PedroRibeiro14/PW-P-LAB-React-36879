import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: isActive ? '#61DAFB' : 'white',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
});

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '16px', padding: '12px', background: '#1E3A5F' }}>
      <NavLink to="/" end style={linkStyle}>Início</NavLink>
      <NavLink to="/sobre" style={linkStyle}>Sobre</NavLink>
      <NavLink to="/estudantes" style={linkStyle}>Estudantes</NavLink>
      <NavLink to="/notas" style={linkStyle}>Notas</NavLink>
      <NavLink to="/registo" style={linkStyle}>Registo</NavLink>
    </nav>
  );
}
