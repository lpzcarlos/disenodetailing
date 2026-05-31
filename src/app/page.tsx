"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { Shield, Sparkles, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            SABADELL · BARCELONA
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tu coche merece<br />el mejor cuidado.
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Detailing profesional que protege, restaura y transforma la estética de tu vehículo. Tratamientos manuales con productos de primera calidad.
          </motion.p>
          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/contacto" className={styles.btnPrimary}>
              Solicita tu presupuesto
            </Link>
            <Link href="/trabajos" className={styles.btnSecondary}>
              Ver nuestros trabajos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className={styles.sectionValue}>
        <div className="container">
          <motion.h2
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            ¿Por qué Diseño Detailing?
          </motion.h2>

          <motion.div
            className={styles.grid3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className={styles.valueCard} variants={fadeIn}>
              <Shield className={styles.valueIcon} size={36} />
              <h3 className={styles.valueTitle}>Técnica profesional</h3>
              <p className={styles.valueText}>
                Cada vehículo recibe un lavado manual minucioso. Sin cepillos automáticos. Sin atajos. Solo cuidado real.
              </p>
            </motion.div>
            <motion.div className={styles.valueCard} variants={fadeIn}>
              <Sparkles className={styles.valueIcon} size={36} />
              <h3 className={styles.valueTitle}>Productos de alta gama</h3>
              <p className={styles.valueText}>
                Trabajamos con marcas profesionales de detailing que garantizan el mejor resultado y la máxima protección de tu pintura.
              </p>
            </motion.div>
            <motion.div className={styles.valueCard} variants={fadeIn}>
              <MapPin className={styles.valueIcon} size={36} />
              <h3 className={styles.valueTitle}>En el corazón de Sabadell</h3>
              <p className={styles.valueText}>
                Taller propio en Passeig Fleming. Cita previa para atenderte sin esperas. Tu tiempo también importa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className={styles.sectionServices}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>LO QUE HACEMOS</p>
              <h2 className={styles.sectionTitle}>Servicios de detailing<br />que marcan la diferencia</h2>
            </div>
            <Link href="/servicios" className={styles.linkAction}>
              Explorar todos los servicios <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            className={styles.grid3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Detailing completo",
                desc: "Limpieza profunda y detallada para devolverle al vehículo un aspecto limpio, cuidado y renovado."
              },
              {
                title: "Detailing completo Premium",
                desc: "Incluye el detallado completo junto con un tratamiento intensivo de asientos para eliminar suciedad y manchas en profundidad."
              },
              {
                title: "Limpieza de Motor a Vapor",
                desc: "Limpieza segura del compartimento del motor para mejorar su aspecto y facilitar su mantenimiento."
              },
              {
                title: "Pulido de faros",
                desc: "Recupera la claridad y mejora la visibilidad eliminando el desgaste del paso del tiempo."
              },
              {
                title: "Pulido Renove",
                desc: "Recupera el brillo del vehículo eliminando la opacidad general de la pintura."
              },
              {
                title: "PULIDO BRONZE",
                desc: "Corrección estética básica para recuperar el brillo y eliminar defectos leves en la pintura."
              },
              {
                title: "PULIDO PLATINUM",
                desc: "Corrección avanzada de la pintura para eliminar defectos visibles y mejorar notablemente el acabado."
              },
              {
                title: "PULIDO DIAMANTE",
                desc: "Corrección de alta precisión para una restauración estética avanzada del vehículo."
              },
              {
                title: "COATING CRYSTAL",
                desc: "Protección cerámica profesional para mejorar el brillo y proteger la pintura frente al desgaste diario."
              },
              {
                title: "SYSTEM X PRO",
                desc: "Recubrimiento cerámico de alta durabilidad con mayor resistencia y acabado profesional premium."
              },
              {
                title: "COATING DIAMOND",
                desc: "Protección cerámica de alto nivel con máxima durabilidad y acabado de gama alta."
              },
              {
                title: "RENEW",
                desc: "Sellado cerámico rápido para mejorar brillo y protección en corto plazo."
              },
              {
                title: "GLASS",
                desc: "Tratamiento cerámico para cristales que mejora la visibilidad y facilita la conducción."
              },
              {
                title: "REVIVE",
                desc: "Restauración y protección de plásticos exteriores para recuperar su color y apariencia."
              }
            ].map((service, idx) => (
              <motion.div key={idx} className={styles.serviceCard} variants={fadeIn}>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceText}>{service.desc}</p>
                </div>
                <Link href="/servicios" className={styles.serviceLink}>
                  Ver detalle <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ANTES Y DESPUES */}
      <section className={styles.sectionSplit}>
        <div className={styles.splitContent}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className={styles.eyebrow}>LOS RESULTADOS HABLAN</p>
            <h2 className={styles.sectionTitle}>El antes y después<br />que lo cambia todo.</h2>
            <p className={styles.splitText}>
              No hace falta palabras cuando los resultados son tan evidentes. Deja que nuestro trabajo hable por nosotros.
            </p>
            <Link href="/trabajos" className={styles.btnPrimary}>
              Ver todos nuestros trabajos
            </Link>
          </motion.div>
        </div>
        <div className={styles.splitImage}>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* PROCESO */}
      <section className={styles.sectionProcess}>
        <div className="container">
          <p className={styles.eyebrowCentered}>ASÍ TRABAJAMOS</p>
          <h2 className={styles.sectionTitleCentered}>Simple, profesional, sin sorpresas.</h2>

          <motion.div
            className={styles.processGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { num: "01", title: "Solicita cita", desc: "Contáctanos por teléfono, WhatsApp o formulario. Te respondemos en menos de 24 horas." },
              { num: "02", title: "Diagnóstico del vehículo", desc: "Inspeccionamos el estado de tu coche y te recomendamos el tratamiento más adecuado para tus necesidades y presupuesto." },
              { num: "03", title: "Tratamiento profesional", desc: "Nuestros especialistas trabajan en tu vehículo con los mejores productos y técnicas del sector." },
              { num: "04", title: "Entrega impecable", desc: "Recoges tu coche en condiciones inmejorables. Garantizamos tu satisfacción." }
            ].map((step, idx) => (
              <motion.div key={idx} className={styles.processStep} variants={fadeIn}>
                <span className={styles.processNum}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processText}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>+500</span>
            <span className={styles.trustLabel}>Vehículos tratados</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>+10</span>
            <span className={styles.trustLabel}>Años de experiencia</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>100%</span>
            <span className={styles.trustLabel}>Satisfacción garantizada</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>5★</span>
            <span className={styles.trustLabel}>Valoración media</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.sectionCta}>
        <div className={styles.ctaOverlay}></div>
        <div className={`container ${styles.ctaContainer}`}>
          <motion.h2
            className={styles.ctaTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            ¿Listo para ver la diferencia?
          </motion.h2>
          <motion.p
            className={styles.ctaSubtitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Pide tu presupuesto sin compromiso. Primera consulta gratuita.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link href="/contacto" className={styles.btnPrimaryAlt}>
              Contactar ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
