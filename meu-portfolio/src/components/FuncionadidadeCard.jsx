
function FuncionalidadeCard({ titulo, descricao, icone }) {
  return (
    <article className="funcionalidade-card">
      <span className="funcionalidade-icone">
        {icone}
      </span>

      <h3>{titulo}</h3>

      <p>{descricao}</p>
    </article>
  )
}

export default FuncionalidadeCard
