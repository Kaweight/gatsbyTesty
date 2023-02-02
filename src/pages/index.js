import * as React from "react"
import * as styles from "../styles/home.module.css"
import Layout from "../components/Layout"
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Hello</h1>
          <h2>Test</h2>
          <Link className={styles.btn} to="/places">Best places to kitesurfing</Link>
        </div>
        <img src="/kite1.jpg" alt="kitesurfing" />
      </section>
    </Layout>
  )
}