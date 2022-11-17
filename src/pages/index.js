import * as React from "react"
import Header from "../header/header"
import {main} from "./index.module.css"
import "../style/main.css"

const IndexPage = () => {
  return (
    <main className={main}>
      <Header></Header>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
