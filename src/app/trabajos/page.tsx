"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const trabajos = [
  {
    id: 1,
    title: "Limpieza Detallada",
    desc: "Lavado exhaustivo de interior y exterior al detalle.",
    image: "/images/limpieza_detallada.jpg"
  },
  {
    id: 2,
    title: "Limpieza Esencial",
    desc: "Lavado de mantenimiento con acabados profesionales.",
    image: "/images/limpieza_esencial.png"
  },
  {
    id: 3,
    title: "Limpieza Interior",
    desc: "Aspirado profundo, limpieza de tapicería y desinfección.",
    image: "/images/limpieza_interior.png"
  },
  {
    id: 4,
    title: "Pulido de Carrocería",
    desc: "Corrección de pintura y eliminación de imperfecciones.",
    image: "/images/pulido_carroceria.png"
  },
  {
    id: 5,
    title: "Pulido de Faros",
    desc: "Restauración de faros para recuperar transparencia original.",
    image: "/images/pulido_faros.png"
  }
];

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
            {trabajos.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imagePlaceholder}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
