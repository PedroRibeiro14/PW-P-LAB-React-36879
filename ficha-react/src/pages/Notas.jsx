import { useState } from 'react';

function classificar(nota) {
  if (nota >= 18) return { texto: 'Excelente', cor: '#1E8449' };
  if (nota >= 14) return { texto: 'Bom',       cor: '#2E86C1' };
  if (nota >= 10) return { texto: 'Suficiente', cor: '#D4AC0D' };
  return           { texto: 'Insuficiente',     cor: '#C0392B' };
}

function FormularioNota({ onAdicionarNota }) {
  const [estudante, setEstudante] = useState('');
  const [nota, setNota] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!estudante || nota === '') return;
    const n = Number(nota);
    if (n < 0 || n > 20) return alert('A nota deve estar entre 0 e 20.');
    onAdicionarNota({ estudante, nota: n });
    setEstudante('');
    setNota('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input value={estudante} onChange={e => setEstudante(e.target.value)}
        placeholder="Nome do estudante" style={{ padding: '8px', flex: 2 }} />
      <input value={nota} onChange={e => setNota(e.target.value)}
        type="number" min="0" max="20" placeholder="Nota (0-20)" style={{ padding: '8px', flex: 1 }} />
      <button type="submit" style={{ padding: '8px 16px', background: '#1E8449', color: 'white', border: 'none', borderRadius: '4px' }}>
        Adicionar
      </button>
    </form>
  );
}

function TabelaNotas({ notas }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#1E3A5F', color: 'white' }}>
          <th style={{ padding: '10px', textAlign: 'left' }}>Estudante</th>
          <th style={{ padding: '10px', textAlign: 'center' }}>Nota</th>
          <th style={{ padding: '10px', textAlign: 'center' }}>Classificação</th>
        </tr>
      </thead>
      <tbody>
        {notas.map((n, i) => {
          const { texto, cor } = classificar(n.nota);
          return (
            <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{n.estudante}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{n.nota}</td>
              <td style={{ padding: '10px', textAlign: 'center', color: cor, fontWeight: 'bold' }}>{texto}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Notas() {
  const [notas, setNotas] = useState([]);

  function adicionarNota(novaNota) {
    setNotas([...notas, novaNota]);
  }

  const media = notas.length > 0
    ? (notas.reduce((s, n) => s + n.nota, 0) / notas.length).toFixed(2)
    : null;

  return (
    <main style={{ padding: '24px' }}>
      <h1>Gestão de Notas</h1>
      <FormularioNota onAdicionarNota={adicionarNota} />
      <TabelaNotas notas={notas} />
      {media && <p style={{ marginTop: '12px' }}><strong>Média da turma:</strong> {media}</p>}
    </main>
  );
}
