import { useState } from 'react';
import CartaoUtilizador from '../components/CartaoUtilizador';
import estudantes from '../data/estudantes';

export default function Estudantes() {
  const [pesquisa, setPesquisa] = useState('');

  const filtrados = estudantes.filter(e =>
    e.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <main style={{ padding: '24px' }}>
      <h1>Estudantes</h1>
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        value={pesquisa}
        onChange={e => setPesquisa(e.target.value)}
        style={{ padding: '8px', marginBottom: '16px', width: '300px' }}
      />
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {filtrados.map(e => (
          <CartaoUtilizador key={e.id} {...e} clicavel />
        ))}
      </div>
    </main>
  );
}
