import React from "react";
import {
  CheckCircle2,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  QrCode,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const profile = {
  firstName: "Ari Cázares",
  lastName: "Zamora",
  specialty: "Nutrióloga Renal",
  subtitle: "Especialista en nutrición clínica y renal",
  phone: "462 360 9461",
  phoneHref: "+524623609461",
  instagram: "@ari.cazares.nutriologa",
  instagramUrl: "https://www.instagram.com/ari.cazares.nutriologa",
  location: "Consultorio de Nutrición León, Gto.",
};

const services = [
  "Obesidad",
  "Diabetes Mellitus",
  "Hipertensión Arterial",
  "Enfermedad Renal en distintas etapas",
];

function KidneyMark({ className = "" }) {
  return (
    <div className={`kidney-mark ${className}`} aria-hidden="true">
      <span className="kidney kidney-left" />
      <span className="kidney kidney-right" />
      <span className="stem stem-left" />
      <span className="stem stem-right" />
    </div>
  );
}

function App() {
  const digitalCardUrl =
    import.meta.env.VITE_CARD_URL ||
    (typeof window !== "undefined"
      ? window.location.href.split("#")[0]
      : "https://ari-cazares-zamora.com");

  return (
    <main className="page-shell">
      <article className="digital-card" aria-label="Tarjeta digital de Ari Cázares Zamora">
        <section className="identity" aria-label="Identidad visual">
          <h1>{profile.firstName}</h1>
          <div className="zamora-word">
            <span>Zam</span>
            <span className="logo-letter">
              <KidneyMark />  
            </span>
            <span>ra</span>
          </div>
          <div className="specialty-row">
            <span />
            <p>{profile.specialty}</p>
            <span />
          </div>
          <p className="subtitle">{profile.subtitle}</p>
        </section>

        <section className="portrait-section" aria-label="Fotografía profesional">
          <div className="portrait-backdrop" />
          <div className="portrait-frame">
            <Leaf className="leaf top-leaf" size={44} />
            <img
              className="portrait-photo"
              src="/assets/ari-foto-blanca.png"
              alt={profile.firstName}
            />
          </div>
          <Leaf className="leaf side-leaf" size={34} />
          <div className="logo-badge" aria-label="Logo renal">
            <KidneyMark />
          </div>
        </section>

        <section className="services" aria-label="Servicios">
          <h2>Mis servicios:</h2>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <CheckCircle2 size={20} strokeWidth={2.2} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="appointment" aria-label="Agenda tu cita">
          <a className="cta" href={`tel:${profile.phoneHref}`}>
            <span>Agenda tu cita</span>
          </a>
          <div className="qr-card">
            <div className="qr-copy">
              <QrCode size={18} />
              <span>Escanea para abrir la tarjeta</span>
            </div>
            <QRCodeSVG
              value={digitalCardUrl}
              size={112}
              level="H"
              bgColor="#fdfdfb"
              fgColor="#071653"
              includeMargin
            />
          </div>
        </section>

        <section className="contact" aria-label="Datos de contacto">
          <a href={`tel:${profile.phoneHref}`}>
            <Phone size={21} />
            <span>{profile.phone}</span>
          </a>
          <a href={profile.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={21} />
            <span>{profile.instagram}</span>
          </a>
          <p>
            <MapPin size={22} />
            <span>{profile.location}</span>
          </p>
        </section>

        <footer className="quote">
          <div className="footer-logo" aria-hidden="true">
            <KidneyMark />
          </div>
          <p>
            <strong>"Tu salud no es una meta, es un estilo de vida."</strong>
            <em>Pequeños cambios, grandes resultados.</em>
          </p>
          <Leaf size={27} />
        </footer>
      </article>
    </main>
  );
}

export default App;
