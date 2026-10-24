import { Link } from 'react-router-dom';

export default function CartaoUtilizador({ id, nome, curso, ano, clicavel }) {
  const conteudo = (
    <div className="cartao">
      <h2>{nome}</h2>
      <p>{curso}</p>
      <p>Ano: {ano}</p>
    </div>
  );

  return clicavel ? <Link to={`/estudantes/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{conteudo}</Link> : conteudo;
}
