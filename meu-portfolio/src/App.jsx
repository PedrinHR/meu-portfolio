import { Routes, Route, Link } from 'react-router-dom'
import Oplog from './pages/Oplog'
import './App.css'
import ProjetoCard from './components/ProjetoCard'
import GestaoClientes from "./pages/GestaoClientes";

function Home() {
  return (
    <div className="portfolio">
      <header className="cabecalho">
        <h2>Meu Portfólio</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio" className="apresentacao">
        <p className="destaque">Olá, seja bem-vindo!</p>

        <h1>
          Sou <span>Pedro Cardoso</span>
        </h1>

        <h2>Estudante de Ciência da Computação</h2>

        <p>
          Apaixonado por tecnologia, desenvolvimento de
          software e criação de soluções inovadoras.
        </p>

        <a href="#projetos" className="botao">
          Conheça meus projetos
        </a>
      </main>
      
<section id="sobre" className="sobre">
  <h2>Sobre mim</h2>

  <div className="sobre-conteudo">
    <p>
      Sou estudante de Ciência da Computação,
      com interesse em desenvolvimento de software,
      infraestrutura de TI e novas tecnologias.
    </p>

    <p>
      Tenho experiência profissional em suporte técnico,
      manutenção de computadores, gerenciamento de
      equipamentos de TI e suporte a sistemas ERP.
    </p>

    <p>
      Busco aprimorar constantemente meus conhecimentos
      e desenvolver soluções tecnológicas que contribuam
      para resolver problemas reais.
    </p>

    
  </div>
</section>
    
<section id="projetos" className="projetos">
  <h2>Meus Projetos</h2>

  <div className="projetos-container">
   
<ProjetoCard
  titulo="OPLOG — Sistema de Gestão Logística"
  descricao="Aplicação desktop desenvolvida em equipe utilizando Java Swing e MySQL. Contribuí com o desenvolvimento das interfaces gráficas e a integração com o banco de dados."
  tecnologias={["Java", "Swing", "MySQL", "JPA"]}
  imagem="/Projetos/Oplog/01-painel-administrativo.png"
  rota="/projetos/oplog"
/>


<ProjetoCard
  titulo="Sistema de Gestão de Clientes"
  descricao="Aplicação desktop desenvolvida em Python, com interface gráfica em CustomTkinter, banco de dados SQLite e operações CRUD para pessoas físicas e jurídicas"
  tecnologias={["Python", "SQLite", "SQL"]}
  imagem="/Projetos/gestao_clientes/dashboard.png"
  rota="/projetos/gestao-clientes"
  link="/projetos/gestao-clientes"
/>

  </div>

  
</section>


<section id="contato" className="contato">
  <h2>Entre em Contato</h2>

  <p>
    Gostou dos meus projetos? Estou aberto a oportunidades
    profissionais e conexões na área de tecnologia.
  </p>

  <div className="contato-links">
    <a
      href="https://github.com/PedrinHR"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/pedro-henrique-renosto-cardoso-165796260/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>

    
<a
  href="mailto:pedro.renosto@hotmail.com"
>
  E-mail ✉
</a>

  </div>
</section>


    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos/oplog" element={<Oplog />} />
      <Route
  path="/projetos/gestao-clientes"
  element={<GestaoClientes />}
/>
    </Routes>
  )
}





export default App

