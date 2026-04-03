"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className={styles.eyebrow}>SOBRE NOSOTROS</p>
            <h1 className={styles.heroTitle}>Por Qué Elegirnos</h1>
            <p className={styles.heroSubtitle}>
              El compromiso con la excelencia. No somos un lavadero de coches, somos un centro especializado en recuperar y proteger la estética de tu vehículo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.textContent}>
            <h2>Nuestra Filosofía</h2>
            <p>
              En Diseño Detailing creemos que cada coche tiene una historia y merece ser tratado con respeto. Trabajamos con pasión artesanal apoyada en la última tecnología de productos cerámicos y pulido.
            </p>
            <p>
              Dedicamos horas a un solo vehículo porque entendemos que la perfección no admite atajos y los peores enemigos de la pintura son las prisas y los rodillos automáticos.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.placeholderImg}>
              <span>Instalaciones</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
