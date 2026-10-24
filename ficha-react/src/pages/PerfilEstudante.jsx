import { useParams, Link } from 'react-router-dom';
import estudantes from '../data/estudantes';

export default function PerfilEstudante() {
  const { id } = useParams();
  const estudante = estudantes.find(e => e.id === Number(id));

  if (!estudante) return <p style={{ padding: '24px' }}>Estudante não encontrado.</p>;

  return (
    <main style={{ padding: '24px' }}>
      <h1>{estudante.nome}</h1>
      <p><strong>Curso:</strong> {estudante.curso}</p>
      <p><strong>Ano:</strong> {estudante.ano}</p>
      <p><strong>Email:</strong> {estudante.email}</p>
      <Link to="/estudantes" style={{ display: 'inline-block', marginTop: '16px', color: '#1E3A5F' }}>
        ← Voltar à lista
      </Link>
    </main>
  );
}
