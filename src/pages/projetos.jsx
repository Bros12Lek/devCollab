import React, { useEffect, useState } from "react";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";
import AsideFilterProjects from "../components/layout/asideFilterProjects";
import Job from "../components/layout/job";
import SelectedJob from "../components/common/selectedJob";
import instance from "../axios";

export default function Projetos() {

  const [projetos,setProjetos] = useState(null);

  useEffect(() =>{
    instance.get("/projetos")
    .then((res) =>{
      setProjetos(res.data.projs);
    })

    console.log(projetos);

  },[])

  return (
    <>
      <Header />
      <section className="subHeader">
        <p>
          <span>Encontre Trabalhos</span>
          Precisa do serviço de um profissional?
          <Link to={"/createProject"}>Crie um Projeto</Link>
          ou
          <Link to={"/profissionais"}>Procure um Profissional</Link>
        </p>
      </section>
      <main className="main_projects">
        <AsideFilterProjects/>
        <section className="jobs_container">
          <header>
             <p>mais de 5000 serviços encontrados</p>
             <SelectedJob/>
          </header>
          <Job
            title={"Titulo do projeto"}
            description={"adaskdjadkjdaskdjasdsadasdasdasdasd"}
            price={20.99}
          />
          <Job
            title={"Titulo do projeto"}
            description={"adaskdjadkjdaskdjasdsadasdasdasdasd"}
            price={20.99}
          />
        </section>
      </main>
    </>
  );
}
