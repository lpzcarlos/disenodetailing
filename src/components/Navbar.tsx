"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Nuestros Trabajos", path: "/trabajos" },
    { name: "Por Qué Elegirnos", path: "/por-que-elegirnos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logocompleto.png" alt="Diseño Detailing" width={500} height={120} className={styles.logoDesktop} priority loading="eager" style={{ width: 'auto' }} />
          <Image src="/images/logosimple.png" alt="Diseño Detailing" width={80} height={80} className={styles.logoMobile} priority loading="eager" style={{ width: 'auto' }} />
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`${styles.navLink} ${pathname === link.path ? styles.active : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
