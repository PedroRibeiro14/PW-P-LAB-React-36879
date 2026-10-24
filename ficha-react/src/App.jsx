import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Estudantes from './pages/Estudantes';
import PerfilEstudante from './pages/PerfilEstudante';
import Registo from './pages/Registo';
import Notas from './pages/Notas';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/estudantes" element={<Estudantes />} />
        <Route path="/estudantes/:id" element={<PerfilEstudante />} />
        <Route path="/registo" element={<Registo />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="*" element={<p style={{ padding: '24px' }}>404 — Página não encontrada.</p>} />
      </Routes>
    </BrowserRouter>
  );
}
