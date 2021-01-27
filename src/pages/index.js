import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <script dangerouslySetInnerHTML = {{ __html: `scripts.js`}} />
    <SEO title="Home" lang="pt-BR"/>
         <header id="toggle">
           
         </header>
               <br/><br/><br/>
               <form  id="pagelogin" class="box" action="/start" method="POST">
                  <h1>Login</h1>
                  <input type="text"  autocomplete="username" placeholder="Nome de Usuário"/>
                  <input type="password"  autocomplete="current-password" placeholder="Senha"/>
                  <input type="submit" name="submit" value="Enviar"/>
                  Você também pode ir <a href="/inline">aqui</a>
               </form>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
