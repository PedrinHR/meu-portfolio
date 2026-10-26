
import { Link } from 'react-router-dom'

function ProjetoCard({
  titulo,
  descricao,
  tecnologias,
  imagem,
  rota
}) {
  return (
    <article className="projeto-card">
      <img
        src={imagem}
        alt={`Imagem do projeto ${titulo}`}
        className="projeto-imagem"
      />

      <div className="projeto-conteudo">
        <h3>{titulo}</h3>

        <p>{descricao}</p>

        <div className="tecnologias">
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </div>

        <Link to={rota} className="projeto-link">
          Ver detalhes do projeto →
        </Link>
      </div>
    </article>
  )
}

export default ProjetoCard
