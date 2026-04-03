"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Droplet, Armchair, Car, Sparkles, Lightbulb, Shield, CheckCircle2 } from "lucide-react";

export default function ServiciosPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const services = [
    {
      title: "Lavado Exterior Premium",
      badge: "BÁSICO",
      icon: <Droplet size={32} />,
      desc: "Lavado manual exterior con descontaminación química y mecánica. Incluye limpieza de llantas, pasos de rueda, cristales y plásticos exteriores. Secado con microfibra de calidad.",
      includes: ["Prelavado con espuma activa", "Lavado a dos cubos (método sin arañazos)", "Limpieza de llantas y neumáticos", "Secado técnico con microfibra", "Protección de neumáticos"],
      idealFor: "Mantenimiento regular quincenal o mensual.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Detailing Interior Completo",
      badge: "POPULAR",
      icon: <Armchair size={32} />,
      desc: "Limpieza profunda del habitáculo. Aspirado completo, limpieza de tapizados, plásticos, cristales interiores, salpicadero y maletero. El interior como el primer día.",
      includes: ["Aspirado completo del habitáculo", "Limpieza y tratamiento de plásticos", "Limpieza de tapizados y alfombras", "Cristales interiores sin marcas", "Desinfección y eliminación de olores"],
      idealFor: "Vehículos con uso intensivo o antes de una venta.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Detailing Completo",
      badge: "MÁS COMPLETO",
      icon: <Car size={32} />,
      desc: "La experiencia de detailing más completa. Combinamos el lavado exterior premium con el detailing interior para entregarte un vehículo impecable de arriba a abajo.",
      includes: ["Todo lo del Lavado Exterior Premium", "Todo lo del Detailing Interior", "Revisión final de 30 puntos"],
      idealFor: "Preparación para eventos, venta del vehículo o regalo especial.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Pulido y Corrección de Pintura",
      badge: "PROFESIONAL",
      icon: <Sparkles size={32} />,
      desc: "Proceso de corrección mecánica de la pintura para eliminar arañazos finos, marcas de lavado, hologramas y oxidación superficial. Recuperamos el brillo original.",
      includes: ["Análisis del estado de la pintura", "Descontaminación química previa", "Pulido de uno o dos pasos según necesidad", "Acabado con protector de pintura", "Inspección final bajo luz especial"],
      idealFor: "Vehículos con pintura dañada o preparación previa a coating.",
      cta: "Solicitar valoración"
    },
    {
      title: "Pulido de Faros PRO",
      badge: "ESPECIALIDAD",
      icon: <Lightbulb size={32} />,
      desc: "Los faros amarillentos u opacos reducen la visibilidad hasta un 70% y dan un aspecto envejecido a cualquier coche. Los pulimos y sellamos.",
      includes: ["Lijado gradual por pasos", "Pulido con compuesto específico", "Sellado UV para protección duradera", "Resultado garantizado"],
      idealFor: "Cualquier vehículo con más de 3-4 años.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Tratamiento Cerámico",
      badge: "PREMIUM",
      icon: <Shield size={32} />,
      desc: "El máximo nivel de protección para la pintura de tu vehículo. El coating cerámico crea una capa de protección semipermanente.",
      includes: ["Preparación y corrección de pintura previa", "Aplicación de coating cerámico profesional", "Curado y verificación", "Certificado de garantía", "Instrucciones de mantenimiento"],
      idealFor: "Vehículos nuevos o seminuevos, alta gama o con pintura recién corregida.",
      cta: "Solicitar valoración"
    }
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p className={styles.eyebrow} variants={fadeIn}>LO QUE OFRECEMOS</motion.p>
            <motion.h1 className={styles.heroTitle} variants={fadeIn}>Servicios de detailing<br/>profesional</motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeIn}>
              Cada tratamiento está diseñado para cuidar, proteger y realzar tu vehículo. Elige el que mejor se adapta a tus necesidades.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className="container">
          <motion.div 
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((svc, idx) => (
              <motion.div key={idx} className={styles.card} variants={fadeIn}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{svc.icon}</div>
                  <span className={styles.badge}>{svc.badge}</span>
                </div>
                <h2 className={styles.cardTitle}>{svc.title}</h2>
                <p className={styles.cardDesc}>{svc.desc}</p>
                
                <h3 className={styles.listTitle}>Incluye:</h3>
                <ul className={styles.includesList}>
                  {svc.includes.map((item, i) => (
                    <li key={i}><CheckCircle2 size={16} className={styles.checkIcon} /> <span>{item}</span></li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <p className={styles.idealFor}><strong>Ideal para:</strong> {svc.idealFor}</p>
                  <Link href="/contacto" className={styles.btnSecondary}>
                    {svc.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.pricingNote}>
        <div className="container">
          <p className={styles.noteText}>
            <strong>Todos los precios son orientativos</strong> y dependen del tamaño, estado y tipo de vehículo. Contáctanos para recibir un presupuesto personalizado sin compromiso.
          </p>
          <Link href="/contacto" className={styles.btnPrimaryAlt}>
            Pedir presupuesto personalizado
          </Link>
        </div>
      </section>

      <section className={styles.helpSection}>
        <div className="container text-center">
          <h2 className={styles.helpTitle}>Te ayudamos a elegir.</h2>
          <p className={styles.helpText}>
            Si no tienes claro qué tratamiento es el más adecuado para tu coche, cuéntanos su estado y uso habitual. Nuestro equipo te recomendará la opción más eficiente para tu presupuesto.
          </p>
          <Link href="/contacto" className={styles.btnPrimary}>
            Hablar con un especialista
          </Link>
        </div>
      </section>
    </>
  );
}
