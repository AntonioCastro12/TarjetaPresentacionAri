import React, { useEffect, useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Facebook,
  HeartPulse,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  QrCode,
  Save,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

const profile = {
  name: "Ari Cázares Zamora",
  specialty: "Nutrióloga Renal",
  subtitle: "Especialista en nutrición clínica y renal",
  phone: "462 360 9461",
  phoneHref: "tel:4623609461",
  whatsapp:
    "https://wa.me/524623609461?text=Hola%20Ari,%20me%20gustaría%20agendar%20una%20cita",
  instagram: "https://www.instagram.com/ari.cazares.nutriologa",
  instagramLabel: "@ari.cazares.nutriologa",
  facebook: "https://www.facebook.com/share/1J9Htjtug9/",
  facebookLabel: "Ciudad Renal con Nutrióloga Ari",
  maps: "https://www.google.com/maps/search/?api=1&query=Consultorio%20de%20Nutrición%20León%20Gto",
  location: "Consultorio de Nutrición León, Gto.",
};

const services = [
  "Obesidad",
  "Diabetes Mellitus",
  "Hipertensión Arterial",
  "Enfermedad Renal en distintas etapas",
];

const cardUrl =
  import.meta.env.VITE_CARD_URL ||
  (typeof window !== "undefined"
    ? window.location.href.split("#")[0]
    : "https://ari-cazares-zamora.netlify.app");

const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
TITLE:${profile.specialty}
TEL:+524623609461
URL:${cardUrl}
NOTE:${profile.subtitle}
ADR:${profile.location}
END:VCARD`;

const contactButtons = [
  {
    label: "Agendar cita por WhatsApp",
    href: profile.whatsapp,
    icon: CalendarCheck,
    variant: "primary",
    external: true,
  },
  {
    label: "Llamar ahora",
    href: profile.phoneHref,
    icon: Phone,
    variant: "secondary",
  },
  {
    label: "Instagram",
    href: profile.instagram,
    icon: Instagram,
    variant: "secondary",
    external: true,
  },
  {
    label: "Facebook",
    href: profile.facebook,
    icon: Facebook,
    variant: "secondary",
    external: true,
  },
  {
    label: "Ubicación en Google Maps",
    href: profile.maps,
    icon: MapPin,
    variant: "secondary",
    external: true,
  },
  {
    label: "Guardar contacto",
    href: `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`,
    icon: Save,
    variant: "outline",
    download: "ari-cazares-zamora.vcf",
  },
];

function Header() {
  return (
    <header className="header">
      <img src="/assets/Logo_Ari.jpeg" alt="Logo de Ari Cázares Zamora" />
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Presentación">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <Leaf className="hero-leaf hero-leaf-one" size={34} />
      <Leaf className="hero-leaf hero-leaf-two" size={26} />

      <div className="portrait-shell">
        <div className="portrait-ring">
          <img src="/assets/AriZamora-foto.jpeg" alt={profile.name} />
        </div>
        <div className="pulse-badge" aria-hidden="true">
          <HeartPulse size={27} />
        </div>
      </div>

      <p className="eyebrow">{profile.specialty}</p>
      <h1>{profile.name}</h1>
      <p className="subtitle">{profile.subtitle}</p>

      <a
        className="hero-cta"
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar cita por WhatsApp"
      >
        <CalendarCheck size={20} />
        <span>Agendar cita</span>
      </a>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="section-heading">
        <span>Servicios</span>
        <h2 id="services-title">Nutrición clínica y renal</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <CheckCircle2 size={21} />
            <p>{service}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactButtons() {
  return (
    <section className="section contact-section" aria-labelledby="contact-title">
      <div className="section-heading">
        <span>Contacto</span>
        <h2 id="contact-title">Agenda y redes</h2>
      </div>

      <div className="button-list">
        {contactButtons.map(({ label, href, icon: Icon, variant, external, download }) => (
          <a
            className={`action-button ${variant}`}
            href={href}
            key={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            download={download}
            aria-label={label}
          >
            <Icon size={20} />
            <span>{label}</span>
          </a>
        ))}
      </div>

      <div className="contact-details">
        <p>
          <Phone size={17} />
          <span>{profile.phone}</span>
        </p>
        <p>
          <Instagram size={17} />
          <span>{profile.instagramLabel}</span>
        </p>
        <p>
          <Facebook size={17} />
          <span>{profile.facebookLabel}</span>
        </p> 
        <p>
          <MapPin size={17} />
          <span>{profile.location}</span>
        </p>
      </div>
    </section>
  );
}

function QRSection() {
  return (
    <section className="section qr-section" aria-labelledby="qr-title">
      <div className="qr-card">
        <div className="qr-copy">
          <QrCode size={22} />
          <div>
            <h2 id="qr-title">Escanea y guarda mi tarjeta digital</h2>
            <p>Comparte fácilmente mis datos de contacto y agenda tu cita.</p>
          </div>
        </div>
        <div className="qr-box" aria-label="Código QR de la tarjeta digital">
          <QRCodeSVG
            value={cardUrl}
            size={156}
            level="H"
            bgColor="#FFFFFF"
            fgColor="#071B5B"
            includeMargin
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <blockquote>
        “Tu salud no es una meta, es un estilo de vida. Pequeños cambios, grandes resultados.”
      </blockquote>
      <div className="signature">
        <img src="/assets/Logo_footer.jpeg" alt="" aria-hidden="true" />
      </div>
      <p className="credit">Tarjeta digital desarrollada por RCM CodeDev</p>
    </footer>
  );
}

function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="splash-intro" aria-label="Bienvenida de Ari Cázares Zamora">
      <div className="splash-orbit" aria-hidden="true" />
      <div className="splash-card">
        <img src="/assets/Logo_Ari.jpeg" alt="Ari Cázares Zamora, Nutrióloga Renal" />
        <div className="splash-line" aria-hidden="true" />
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <SplashIntro />
      <main className="page">
        <article className="digital-card" aria-label="Tarjeta digital de Ari Cázares Zamora">
          <Header />
          <Hero />
          <Services />
          <ContactButtons />
          <QRSection />
          <Footer />
        </article>
      </main>
    </>
  );
}

export default App;
