import { useState } from 'react';

export default function Registo() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ano, setAno] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify({ nome, email, ano }));
    setNome('');
    setEmail('');
    setAno(1);
  }

  return (
    <main style={{ padding: '24px', maxWidth: '500px' }}>
      <h1>Registo de Estudante</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="O teu nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="email@exemplo.pt"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label>Ano Curricular:</label>
          <select
            value={ano}
            onChange={e => setAno(Number(e.target.value))}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
          >
            <option value={1}>1.º Ano</option>
            <option value={2}>2.º Ano</option>
            <option value={3}>3.º Ano</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '10px 24px', background: '#1E3A5F', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Registar
        </button>
      </form>

      {nome && (
        <div style={{ marginTop: '16px', padding: '12px', background: '#F2F3F4', borderRadius: '4px' }}>
          <strong>Pré-visualização:</strong> {nome} | {email || '—'} | Ano {ano}
        </div>
      )}
    </main>
  );
}
