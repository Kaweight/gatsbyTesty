import * as React from "react"
import * as styles from "../styles/home.module.css"
import Layout from "../components/Layout"
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.elementWrapper}>
            <div className={styles.textWrapper}>
              <h2>Hello</h2>
              <h3>Test</h3>
            </div>
            <Link className={styles.btn} to="/places">Best places to kitesurfing</Link>
          </div>
          <img src="/kite1.jpg" alt="kitesurfing"/>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>
          Kitesurfing is a wind powered surface watersport using a kite and a board to move across the water.

Kitesurfing harnesses the power of the wind through a large parachute type kite to propel a rider across the water on a small surfboard or a kiteboard (similar to a wakeboard).

Although the name includes surfing, kitesurfing does not need waves, the wind is the only force needed to power you along. Flat water locations such as Camber are favoured by riders looking to perform freestyle as the water is smooth so easier to take off and land on. With the large range of conditions to ride in, whether ‘surfing’ in the waves, going for big jumps, taking out a GPS for a speed records, learning a new freestyle trick or on a long distance adventure kitesurfing never becomes boring or repetitive.
          </p>
        </div>
      </section>
    </Layout>
  )
}