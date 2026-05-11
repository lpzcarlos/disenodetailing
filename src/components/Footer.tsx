import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logocompleto.png" alt="Diseño Detailing" width={440} height={100} style={{ objectFit: 'contain', width: 'auto', height: '100px' }} />
          </Link>
          <p className={styles.claim}>Cuidado & Estética de Vehículos</p>
          <p className={styles.copyright}>© 2025 Diseño Detailing. Todos los derechos reservados.</p>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/trabajos">Nuestros Trabajos</Link></li>
            <li><Link href="/por-que-elegirnos">Por Qué Elegirnos</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>Passeig Fleming, 16 · 08206 Sabadell</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <span>936 433 205 / 624 325 515</span>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <span>ddetailing.contacto@gmail.com</span>
            </li>
          </ul>
          
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              IG
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              FB
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
