"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

  const basicServices = [
    {
      title: "Detailing completo",
      desc: "Limpieza profunda y detallada para devolverle al vehículo un aspecto limpio, cuidado y renovado.",
      includes: [
        "Limpieza detallada interior y exterior",
        "Descontaminación ligera de la carrocería (eliminación de suciedad incrustada)",
        "Aspirado interior profundo",
        "Limpieza y acondicionamiento de plásticos",
        "Limpieza de cristales",
        "Desinfección con ozono"
      ],
      idealFor: "Puesta a punto total del vehículo",
      cta: "Solicitar este servicio"
    },
    {
      title: "Detailing completo Premium",
      desc: "Incluye el detallado completo junto con un tratamiento intensivo de asientos para eliminar suciedad y manchas en profundidad.",
      includes: [
        "Todo el detallado completo",
        "Limpieza profunda de asientos (inyección y extracción)",
        "Eliminación de manchas y suciedad acumulada",
        "Desinfección completa del interior"
      ],
      idealFor: "interiores muy sucios o con manchas",
      cta: "Solicitar este servicio"
    },
    {
      title: "Limpieza de Motor a Vapor",
      desc: "Limpieza segura del compartimento del motor para mejorar su aspecto y facilitar su mantenimiento.",
      includes: [
        "Limpieza detallada del motor con vapor",
        "Eliminación de grasa, polvo y suciedad acumulada",
        "Limpieza y acondicionamiento de plásticos y gomas",
        "Aplicación de renovador de plásticos (acabado uniforme y protegido)",
        "Acabado limpio y cuidado"
      ],
      idealFor: "mantener el motor en buen estado y mejorar su apariencia.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Pulido de faros",
      desc: "Recupera la claridad y mejora la visibilidad eliminando el desgaste del paso del tiempo.",
      includes: [
        "Eliminación de opacidad y amarilleo",
        "Lijado y pulido de la superficie",
        "Recuperación de transparencia",
        "Aplicación de protección cerámica de larga duración",
        "Mejora estética y de iluminación"
      ],
      idealFor: "faros desgastados o con falta de visibilidad.",
      cta: "Solicitar este servicio"
    },
    {
      title: "Pulido Renove",
      desc: "Recupera el brillo del vehículo eliminando la opacidad general de la pintura.",
      includes: [
        "Limpieza exterior detallada",
        "Descontaminación ligera",
        "Pulido de renovación del brillo",
        "Mejora del aspecto general"
      ],
      idealFor: "coches con la pintura apagada o sin brillo.",
      cta: "Solicitar este servicio"
    }
  ];

  const categoryServices = [
    {
      category: "Pulido exterior",
      services: [
        {
          title: "PULIDO BRONZE",
          desc: "Corrección estética básica para recuperar el brillo y eliminar defectos leves en la pintura.",
          includes: [
            "Limpieza exterior detallada previa al proceso",
            "Descontaminación de la pintura (eliminación de partículas incrustadas)",
            "Protección de zonas sensibles durante el trabajo",
            "Pulido en 2 etapas de corrección",
            "Mejora del brillo y aspecto general del vehículo"
          ],
          idealFor: "coches con pérdida de brillo y defectos leves en la pintura.",
          cta: "Solicitar este servicio"
        },
        {
          title: "PULIDO PLATINUM",
          desc: "Corrección avanzada de la pintura para eliminar defectos visibles y mejorar notablemente el acabado.",
          includes: [
            "Limpieza exterior detallada previa al proceso",
            "Descontaminación de la pintura (eliminación de partículas incrustadas)",
            "Protección de zonas sensibles durante el trabajo",
            "Pulido en 3 etapas de corrección",
            "Eliminación de arañazos medios y mejora del brillo profundo"
          ],
          idealFor: "vehículos con marcas visibles y desgaste medio en la pintura.",
          cta: "Solicitar este servicio"
        },
        {
          title: "PULIDO DIAMANTE",
          desc: "Corrección de alta precisión para una restauración estética avanzada del vehículo.",
          includes: [
            "Limpieza exterior detallada previa al proceso",
            "Descontaminación de la pintura (eliminación de partículas incrustadas)",
            "Protección de zonas sensibles durante el trabajo",
            "Pulido en 5 etapas de alta corrección",
            "Eliminación máxima de defectos y acabado tipo show car"
          ],
          idealFor: "vehículos muy cuidados o procesos de restauración estética premium.",
          cta: "Solicitar este servicio"
        }
      ]
    },
    {
      category: "Coating",
      services: [
        {
          title: "COATING CRYSTAL",
          desc: "Protección cerámica profesional para mejorar el brillo y proteger la pintura frente al desgaste diario.",
          includes: [
            "Protección de la pintura hasta 2–3 años",
            "Efecto hidrofóbico (repelente al agua y suciedad)",
            "Mayor facilidad de limpieza",
            "Mejora del brillo y profundidad del color",
            "Protección frente a agentes externos y micro desgaste"
          ],
          idealFor: "quienes buscan protección y mejora estética duradera.",
          cta: "Solicitar valoración"
        },
        {
          title: "SYSTEM X PRO",
          desc: "Recubrimiento cerámico de alta durabilidad con mayor resistencia y acabado profesional premium.",
          includes: [
            "Protección de la pintura hasta 6 años",
            "Alta resistencia a agentes químicos y ambientales",
            "Efecto autolimpiante y repelente al agua",
            "Aumento del brillo y profundidad del color",
            "Apto para pinturas brillo, mate y satinadas"
          ],
          idealFor: "protección a largo plazo con acabado premium.",
          cta: "Solicitar valoración"
        },
        {
          title: "COATING DIAMOND",
          desc: "Protección cerámica de alto nivel con máxima durabilidad y acabado de gama alta.",
          includes: [
            "Protección de la pintura hasta 8 años",
            "Máxima resistencia frente a desgaste y contaminación",
            "Efecto autolimpiante avanzado",
            "Brillo profundo y acabado tipo showroom",
            "Alta durabilidad en condiciones extremas"
          ],
          idealFor: "vehículos de alta gama o máxima protección estética.",
          cta: "Solicitar valoración"
        }
      ]
    },
    {
      category: "Protección",
      services: [
        {
          title: "RENEW",
          desc: "Sellado cerámico rápido para mejorar brillo y protección en corto plazo.",
          includes: [
            "Protección de la pintura hasta 9 meses",
            "Aumento del brillo y efecto hidrofóbico",
            "Repele agua, suciedad y contaminantes",
            "Facilita la limpieza del vehículo",
            "Aplicable en múltiples superficies"
          ],
          idealFor: "mantenimiento o protección rápida.",
          cta: "Solicitar este servicio"
        },
        {
          title: "GLASS",
          desc: "Tratamiento cerámico para cristales que mejora la visibilidad y facilita la conducción.",
          includes: [
            "Protección de cristales hasta 2 años",
            "Efecto repelente al agua",
            "Mejora de visibilidad en lluvia",
            "Reducción de suciedad e insectos",
            "Mayor seguridad en conducción"
          ],
          idealFor: "parabrisas, lunas y espejos.",
          cta: "Solicitar este servicio"
        },
        {
          title: "REVIVE",
          desc: "Restauración y protección de plásticos exteriores para recuperar su color y apariencia.",
          includes: [
            "Recuperación del color original de plásticos",
            "Protección frente a rayos UV",
            "Efecto hidrofóbico y protector",
            "Previene el desgaste y la decoloración",
            "Acabado negro profundo renovado"
          ],
          idealFor: "plásticos apagados o desgastados.",
          cta: "Solicitar este servicio"
        }
      ]
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
            {basicServices.map((svc, idx) => (
              <motion.div key={idx} className={styles.card} variants={fadeIn}>
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

          {categoryServices.map((cat, idx) => (
            <div key={`cat-${idx}`} className={styles.categorySection}>
              <motion.h2 
                className={styles.categoryTitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                {cat.category}
              </motion.h2>
              <motion.div 
                className={styles.grid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {cat.services.map((svc, i) => (
                  <motion.div key={i} className={styles.card} variants={fadeIn}>
                    <h2 className={styles.cardTitle}>{svc.title}</h2>
                    <p className={styles.cardDesc}>{svc.desc}</p>
                    
                    <h3 className={styles.listTitle}>Incluye:</h3>
                    <ul className={styles.includesList}>
                      {svc.includes.map((item, j) => (
                        <li key={j}><CheckCircle2 size={16} className={styles.checkIcon} /> <span>{item}</span></li>
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
          ))}
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
