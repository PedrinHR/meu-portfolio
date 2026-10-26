
import { useState } from "react";
import { Link } from "react-router-dom";
import "./GestaoClientes.css";

const imagens = [
  {
    src: "/Projetos/gestao_clientes/dashboard.png",
    titulo: "Dashboard",
    descricao: "Painel com indicadores de clientes cadastrados.",
  },
  {
    src: "/Projetos/gestao_clientes/cadastro-pf.png",
    titulo: "Cadastro de Pessoa Física",
    descricao: "Cadastro de clientes com validação de CPF e e-mail.",
  },
  {
    src: "/Projetos/gestao_clientes/cadastro-pj.png",
    titulo: "Cadastro de Pessoa Jurídica",
    descricao: "Cadastro de empresas com validação de CNPJ e e-mail.",
  },
  {
    src: "/Projetos/gestao_clientes/consulta-pf.png",
    titulo: "Consulta de Pessoas Físicas",
    descricao: "Pesquisa e visualização dos clientes cadastrados.",
  },
  {
    src: "/Projetos/gestao_clientes/consulta_pj.png",
    titulo: "Consulta de Pessoas Jurídicas",
    descricao: "Visualização e pesquisa das empresas cadastradas.",
  },
  {
    src: "/Projetos/gestao_clientes/edicao_cliente.png",
    titulo: "Edição de Clientes",
    descricao: "Atualização dos dados de clientes existentes.",
  },
];

function GestaoClientes() {
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const imagem = imagens[imagemAtiva];

  return (
    <main className="gestao-pagina">
      <Link to="/#projetos" className="gestao-voltar">
        ← Voltar ao portfólio
      </Link>

      <h1>Sistema de Gestão de Clientes</h1>

      <p className="gestao-introducao">
        Aplicação desktop desenvolvida em Python com interface
        gráfica em CustomTkinter e banco de dados SQLite.
        O sistema permite cadastrar, consultar, editar e excluir
        pessoas físicas e jurídicas.
      </p>

      <div className="gestao-tecnologias">
        <span>Python</span>
        <span>CustomTkinter</span>
        <span>SQLite</span>
        <span>SQL</span>
        <span>CRUD</span>
      </div>

      <h2>Galeria do sistema</h2>

      <section className="gestao-galeria">
        <div className="gestao-imagem-principal">
          <img src={imagem.src} alt={imagem.titulo} />
        </div>

        <h3>{imagem.titulo}</h3>
        <p>{imagem.descricao}</p>

        <div className="gestao-miniaturas">
          {imagens.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={
                imagemAtiva === index ? "ativa" : ""
              }
              onClick={() => setImagemAtiva(index)}
              aria-label={`Visualizar ${item.titulo}`}
              aria-pressed={imagemAtiva === index}
            >
              <img src={item.src} alt="" />
            </button>
          ))}
        </div>
      </section>

      <h2>Principais funcionalidades</h2>

      <ul className="gestao-funcionalidades">
        <li>Cadastro de pessoas físicas e jurídicas</li>
        <li>Validação de CPF, CNPJ e e-mail</li>
        <li>Pesquisa e consulta de clientes</li>
        <li>Edição e exclusão de registros</li>
        <li>Dashboard com indicadores dinâmicos</li>
        <li>Persistência de dados utilizando SQLite</li>
      </ul>

      <a
        className="gestao-github"
        href="https://github.com/PedrinHR/sistema-gestao-clientes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver código no GitHub ↗
      </a>
    </main>
  );
}

export default GestaoClientes;
