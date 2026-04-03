"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function TrabajosPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className={styles.eyebrow}>PORTFOLIO</p>
            <h1 className={styles.heroTitle}>Nuestros Trabajos</h1>
            <p className={styles.heroSubtitle}>
              El antes y después que habla por sí solo. Resultados de nuestros tratamientos de detailing y estética en Sabadell.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className="container">
          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.imagePlaceholder}>
                  <span>Trabajo {item}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>Tratamiento Cerámico</h3>
                  <p>Corrección de pintura y protección durante 3 años.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
