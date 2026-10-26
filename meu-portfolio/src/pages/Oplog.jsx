
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Oplog.css'

const imagens = [
  '01-painel-administrativo.png',
  '02-cadastro-entregador.png',
  '03-listagem-entregadores.png',
  '04-cadastro-veiculo.png',
  '05-cadastro-hub.png',
  '06-consulta-hubs.png',
  '07-cadastro-transacao.png',
  '08-consulta-entregas.png'
]

const descricoes = [
  {
    titulo: 'Painel Administrativo',
    texto: 'Central de navegação que permite acessar os módulos do sistema.'
  },
  {
    titulo: 'Cadastro de Entregadores',
    texto: 'Interface para cadastrar e gerenciar informações dos entregadores.'
  },
  {
    titulo: 'Listagem de Entregadores',
    texto: 'Visualização dos registros de entregadores armazenados no banco de dados.'
  },
  {
    titulo: 'Cadastro de Veículos',
    texto: 'Gerenciamento dos veículos utilizados nas operações logísticas.'
  },
  {
    titulo: 'Cadastro de HUBs',
    texto: 'Cadastro dos centros logísticos e suas informações.'
  },
  {
    titulo: 'Consulta de HUBs',
    texto: 'Pesquisa de centros logísticos utilizando filtros.'
  },
  {
    titulo: 'Cadastro de Transações',
    texto: 'Registro de transações financeiras relacionadas às operações.'
  },
  {
    titulo: 'Consulta de Entregas',
    texto: 'Consulta de entregas por CEP, período e entregador.'
  }
]


function Oplog() {
  const [imagemAtual, setImagemAtual] = useState(0)

  function proximaImagem() {
    setImagemAtual((atual) => (atual + 1) % imagens.length)
  }

  function imagemAnterior() {
    setImagemAtual(
      (atual) => (atual - 1 + imagens.length) % imagens.length
    )
  }

  return (
    <main className="oplog-pagina">
      <Link to="/" className="oplog-voltar">
        ← Voltar ao portfólio
      </Link>

      <h1>OPLOG</h1>
      <h2>Sistema de Gestão Logística</h2>

      
<section className="oplog-hero">
  <p className="oplog-categoria">
    PROJETO ACADÊMICO • DESENVOLVIDO EM EQUIPE
  </p>

  <p className="oplog-introducao">
    Aplicação desktop desenvolvida para auxiliar
    no gerenciamento de operações logísticas,
    integrando interfaces Java Swing com um
    banco de dados MySQL.
  </p>

  <div className="oplog-tecnologias">
    <span>Java</span>
    <span>Swing</span>
    <span>MySQL</span>
    <span>JPA</span>
  </div>

  <div className="oplog-contribuicao">
    <h3>Minha participação</h3>

    <p>
      Desenvolvimento de interfaces gráficas
      e implementação da conexão entre o
      sistema Java e o banco de dados MySQL.
    </p>
  </div>
</section>


      <section className="oplog-galeria">
        <h2>Galeria do sistema</h2>

        <img
          src={`/Projetos/Oplog/${imagens[imagemAtual]}`}
          alt={`Tela ${imagemAtual + 1} do OPLOG`}
        />
    
<div className="oplog-descricao">
  <h3>{descricoes[imagemAtual].titulo}</h3>

  <p>{descricoes[imagemAtual].texto}</p>
</div>

        <div className="oplog-controles">
          <button onClick={imagemAnterior}>Anterior</button>

          <span>
            {imagemAtual + 1} / {imagens.length}
          </span>

          <button onClick={proximaImagem}>Próxima</button>
        </div>

        
<div className="oplog-miniaturas">
  {imagens.map((imagem, indice) => (
    <button
      key={imagem}
      type="button"
      className={
        imagemAtual === indice ? 'miniatura ativa' : 'miniatura'
      }
      onClick={() => setImagemAtual(indice)}
      aria-label={`Visualizar tela ${indice + 1} do OPLOG`}
      aria-pressed={imagemAtual === indice}
    >
      <img
        src={`/Projetos/Oplog/${imagem}`}
        alt=""
      />
    </button>
  ))}
</div>

      </section>
    </main>
  )
}

export default Oplog
