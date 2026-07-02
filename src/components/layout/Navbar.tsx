"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <Image src="/Elixor_logo_light.png" alt="Elixor Tech Logo" width={56} height={56} priority className="navbar-logo-img" />
            <div className="navbar-logo-info">
              <div className="navbar-logo-text">
                ELIXOR <span>TECH</span>
              </div>
              <div className="navbar-logo-tagline">
                engineered for excellence
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link${pathname === item.href ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar-cta-group">
            <Link href="/contact" className="nav-cta">
              GET STARTED <ArrowRight size={14} />
            </Link>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} color="var(--white-soft)" /> : <Menu size={24} color="var(--white-soft)" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "76px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(0, 4, 15, 0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,104,255,0.15)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: pathname === item.href ? "var(--blue-light)" : "var(--white-dim)",
                    background: pathname === item.href ? "rgba(0,104,255,0.1)" : "transparent",
                    border: pathname === item.href ? "1px solid rgba(0,104,255,0.25)" : "1px solid transparent",
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* CTA inside mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08 }}
              style={{ marginTop: "16px", padding: "0 16px" }}
            >
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: "8px" }}
                onClick={() => setMenuOpen(false)}
              >
                GET STARTED <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
