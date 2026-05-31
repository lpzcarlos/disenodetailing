"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactoPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className={styles.eyebrow}>CONTACTO</p>
            <h1 className={styles.heroTitle}>Hablemos de tu coche</h1>
            <p className={styles.heroSubtitle}>
              Pide presupuesto sin compromiso, resuelve tus dudas o reserva tu cita. Te responderemos en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`container ${styles.splitGrid}`}>
          <motion.div
            className={styles.contactInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Información de Contacto</h2>
            <p className={styles.desc}>
              Estamos en el corazón de Sabadell. Ven a visitarnos o contáctanos por teléfono o email para cualquier consulta.
            </p>

            <ul className={styles.infoList}>
              <li>
                <MapPin className={styles.infoIcon} size={24} />
                <div>
                  <strong>Dirección</strong>
                  <span>Passeig Fleming, 16<br />08206 Sabadell, Barcelona</span>
                </div>
              </li>
              <li>
                <Phone className={styles.infoIcon} size={24} />
                <div>
                  <strong>Teléfono (Fijo y Móvil)</strong>
                  <span>936 433 205<br />624 325 516</span>
                </div>
              </li>
              <li>
                <Mail className={styles.infoIcon} size={24} />
                <div>
                  <strong>Email</strong>
                  <span>ddetailing.contacto@gmail.com</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label>Nombre completo</label>
                <input type="text" placeholder="Ej. Javier García" />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Teléfono</label>
                <input type="tel" placeholder="+34 600..." />
              </div>
              <div className={styles.formGroup}>
                <label>Servicio de interés</label>
                <select>
                  <option>Lavado Exterior Premium</option>
                  <option>Detailing Interior</option>
                  <option>Detailing Completo</option>
                  <option>Pulido de Pintura</option>
                  <option>Tratamiento Cerámico</option>
                  <option>Otro / Dudas</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Mensaje (Cuéntanos sobre tu coche)</label>
                <textarea rows={4} placeholder="Marca, modelo, estado general..."></textarea>
              </div>
              <button className={styles.submitBtn}>
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
