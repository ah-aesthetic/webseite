'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('pakete');

  const images = {
    hero: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8008_lfquxs.jpg',
    portrait: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896920/IMG_8181_aooegy.jpg',
    treatment1: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8121_lt1ocu.jpg',
    treatment2: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8196_k6rxqr.jpg',
    treatment3: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8157_hhdz2p.jpg',
    treatment4: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896950/IMG_8234_xkrodh.jpg',
  };

  const treatments = {
    pakete: {
      title: 'Behandlungspakete',
      items: [
        { name: 'Zornesfalte + Stirn', price: 'Ab 300 €', desc: '' },
        { name: 'Zornesfalte + Stirn + Krähenfüße', price: 'Ab 350 €', desc: 'Oberes Gesicht – 3 Zonen' },
        { name: 'Full Face', price: 'Ab 550 €', desc: 'Obere und untere Gesichtszonen, individuell angepasst' },
        { name: 'Full Face + Hals', price: 'Ab 750 €', desc: 'Inkl. Platysma/Nefertiti Lift' },
      ]
    },
    einzel: {
      title: 'Einzelbehandlungen',
      items: [
        { name: 'Zornesfalte', price: 'Ab 200 €', desc: '' },
        { name: 'Stirn', price: 'Ab 200 €', desc: 'In Kombination mit Zornesfalte' },
        { name: 'Krähenfüße', price: 'Ab 200 €', desc: '' },
        { name: 'Kinnfalten', price: 'Ab 150 €', desc: '' },
        { name: 'Nasenfalten', price: 'Ab 150 €', desc: '' },
        { name: 'Lip Flip', price: 'Ab 150 €', desc: '' },
        { name: 'Brow Lift', price: 'Ab 150 €', desc: '' },
        { name: 'Hyperhidrose', price: 'Ab 150 €', desc: '' },
      ]
    },
    skinbooster: {
      title: 'Skinbooster',
      subtitle: 'Intensive Hydration und Verbesserung der Hautqualität',
      items: [
        { name: 'Gesicht', price: 'Ab 250 €', desc: 'Intensive Hydration' },
        { name: 'Augenbereich', price: 'Ab 200 €', desc: 'Feuchtigkeit und feine Linien' },
        { name: 'Hals + Dekolleté', price: 'Ab 270 €', desc: 'Verbesserung der Hautstruktur' },
        { name: 'Gesicht + Hals', price: 'Ab 400 €', desc: 'Kombinierte Hautverjüngung' },
      ]
    },
    polynukleotide: {
      title: 'Polynukleotide',
      subtitle: 'Langfristige Hautregeneration & Biostimulation',
      items: [
        { name: 'Gesicht', price: 'Ab 380 €', desc: 'Hautstruktur und Hautqualität' },
        { name: 'Augenbereich', price: 'Ab 280 €', desc: 'Reduktion feiner Linien' },
        { name: 'Hals + Dekolleté', price: 'Ab 350 €', desc: 'Hautfestigkeit und Struktur' },
        { name: 'Gesicht + Hals', price: 'Ab 600 €', desc: 'Kombinierte Hautregeneration' },
      ]
    }
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#5a4a3a',
    },
    heroSection: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      overflow: 'hidden',
    },
    heroBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.4)',
      zIndex: 0,
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(253,246,240,0.85) 0%, rgba(250,232,224,0.8) 50%, rgba(245,220,208,0.85) 100%)',
      zIndex: 1,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
    },
    heroSubtitle: {
      fontSize: '14px',
      letterSpacing: '4px',
      color: '#b8927a',
      marginBottom: '20px',
      fontWeight: '300',
    },
    heroTitle: {
      fontSize: 'clamp(36px, 8vw, 64px)',
      fontWeight: '300',
      margin: '0 0 10px 0',
      letterSpacing: '3px',
      color: '#6a5a4a',
    },
    divider: {
      width: '60px',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #c9a087, transparent)',
      margin: '20px auto',
    },
    heroText: {
      fontSize: '18px',
      fontWeight: '300',
      color: '#8b7355',
      maxWidth: '500px',
      lineHeight: '1.8',
      marginBottom: '40px',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)',
      color: 'white',
      padding: '16px 40px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontSize: '14px',
      letterSpacing: '2px',
      fontWeight: '400',
      boxShadow: '0 10px 30px rgba(185, 146, 122, 0.3)',
      display: 'inline-block',
      border: 'none',
      cursor: 'pointer',
    },
    section: {
      padding: '80px 20px',
    },
    sectionLabel: {
      fontSize: '12px',
      letterSpacing: '3px',
      color: '#c9a087',
      marginBottom: '15px',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '300',
      margin: '0 0 20px 0',
      color: '#6a5a4a',
      letterSpacing: '2px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={{...styles.heroBg, backgroundImage: `url(${images.hero})`}} />
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroSubtitle}>ÄSTHETISCHE MEDIZIN IN MÜNCHEN</div>
          <h1 style={styles.heroTitle}>ANNA HRYSHCHENKO</h1>
          <div style={styles.divider} />
          <p style={styles.heroText}>
            Natürliche Schönheit durch medizinische Expertise.<br />
            Individuell. Professionell. Diskret.
          </p>
          <a href="#behandlungen" style={styles.ctaButton}>
            BEHANDLUNGEN ENTDECKEN
          </a>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '40px',
          fontSize: '12px',
          color: '#b8927a',
          letterSpacing: '2px',
          zIndex: 2,
        }}>
          @dr.hryshchenko.de
        </div>
      </section>

      {/* Über mich Section */}
      <section style={{...styles.section, background: 'white'}}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <div style={{
              width: '280px',
              height: '350px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(180, 130, 110, 0.2)',
              margin: '0 auto',
              border: '4px solid #fdf6f0',
            }}>
              <img 
                src={images.portrait} 
                alt="Anna Hryshchenko"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <div style={styles.sectionLabel}>ÜBER MICH</div>
            <h2 style={styles.sectionTitle}>Ihre Ärztin für Ästhetik</h2>
            <div style={{ width: '40px', height: '1px', background: '#c9a087', marginBottom: '25px' }} />
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#7a6a5a', marginBottom: '20px' }}>
              Als approbierte Ärztin verbinde ich medizinisches Fachwissen mit einem ausgeprägten 
              Sinn für natürliche Ästhetik. Mein Ziel ist es, Ihre individuelle Schönheit zu 
              unterstreichen – nicht zu verändern.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#7a6a5a' }}>
              Jede Behandlung beginnt mit einer ausführlichen Beratung, um Ihre Wünsche zu verstehen 
              und einen maßgeschneiderten Behandlungsplan zu erstellen. Dabei setze ich ausschließlich 
              auf CE-zertifizierte, in der EU zugelassene Produkte.
            </p>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fdf6f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '13px', color: '#b8927a', letterSpacing: '0.5px', lineHeight: '1.8' }}>
                ✓ Approbierte Ärztin<br />
                ✓ Bayerische Landesärztekammer<br />
                ✓ Individuelle Beratung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section style={{ display: 'flex', overflow: 'hidden', height: '250px' }}>
        {[images.treatment1, images.treatment2, images.treatment3, images.treatment4].map((img, idx) => (
          <div key={idx} style={{ flex: 1, minWidth: '200px', position: 'relative', overflow: 'hidden' }}>
            <img 
              src={img} 
              alt={`Behandlung ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(transparent, rgba(90,74,58,0.7))',
            }} />
          </div>
        ))}
      </section>

      {/* Behandlungen Section */}
      <section id="behandlungen" style={{...styles.section, background: 'linear-gradient(135deg, #fdf6f0 0%, #fae8e0 100%)'}}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={styles.sectionLabel}>LEISTUNGEN & PREISE</div>
            <h2 style={{...styles.sectionTitle, margin: 0}}>Behandlungen</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {[
              { key: 'pakete', label: 'Botox Pakete' },
              { key: 'einzel', label: 'Botox Einzel' },
              { key: 'skinbooster', label: 'Skinbooster' },
              { key: 'polynukleotide', label: 'Polynukleotide' },
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  background: activeCategory === cat.key 
                    ? 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)' 
                    : 'white',
                  color: activeCategory === cat.key ? 'white' : '#8b7355',
                  boxShadow: activeCategory === cat.key 
                    ? '0 8px 25px rgba(185, 146, 122, 0.3)' 
                    : '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 15px 50px rgba(180, 130, 110, 0.1)',
          }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: '400', 
              color: '#6a5a4a',
              marginTop: 0,
              marginBottom: '10px',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              {treatments[activeCategory].title}
            </h3>
            {treatments[activeCategory].subtitle && (
              <p style={{ textAlign: 'center', color: '#b8927a', fontSize: '14px', marginBottom: '30px' }}>
                {treatments[activeCategory].subtitle}
              </p>
            )}
            
            <div style={{ marginTop: '20px' }}>
              {treatments[activeCategory].items.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '20px 0',
                  borderBottom: idx < treatments[activeCategory].items.length - 1 ? '1px solid #f0e8e0' : 'none',
                }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '500', color: '#6a5a4a', letterSpacing: '1px', marginBottom: item.desc ? '6px' : 0 }}>
                      {item.name}
                    </div>
                    {item.desc && <div style={{ fontSize: '13px', color: '#a89080' }}>{item.desc}</div>}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '500', color: '#b8927a', whiteSpace: 'nowrap', marginLeft: '20px' }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#fdf6f0',
              borderRadius: '12px',
              fontSize: '13px',
              color: '#8b7355',
              lineHeight: '1.7'
            }}>
              ✓ Kostenlose Nachkorrektur nach 14 Tagen (falls erforderlich)<br />
              ✓ Alle Produkte sind CE-zertifiziert und in der EU zugelassen
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section style={{...styles.section, background: 'white', textAlign: 'center'}}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={styles.sectionLabel}>KONTAKT</div>
          <h2 style={{...styles.sectionTitle, marginBottom: '30px'}}>Jetzt Termin vereinbaren</h2>
          <p style={{ fontSize: '16px', color: '#8b7355', marginBottom: '40px', lineHeight: '1.8' }}>
            Ich freue mich auf Ihre Anfrage. Vereinbaren Sie jetzt Ihr persönliches Beratungsgespräch.
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
            <a href="tel:+491712092608" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: '#fdf6f0',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#6a5a4a',
              fontSize: '16px',
            }}>
              <span style={{ fontSize: '20px' }}>📞</span>
              +49 171 2092608
            </a>
            <a href="mailto:annagri199527@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: '#fdf6f0',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#6a5a4a',
              fontSize: '16px',
            }}>
              <span style={{ fontSize: '20px' }}>✉️</span>
              annagri199527@gmail.com
            </a>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: '#fdf6f0',
              borderRadius: '16px',
              color: '#6a5a4a',
              fontSize: '16px',
            }}>
              <span style={{ fontSize: '20px' }}>📍</span>
              München
            </div>
          </div>

          <a 
            href="https://instagram.com/dr.hryshchenko.de" 
            target="_blank"
            rel="noopener noreferrer"
            style={{...styles.ctaButton, display: 'inline-flex', alignItems: 'center', gap: '10px'}}
          >
            Folgen Sie mir auf Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #6a5a4a 0%, #5a4a3a 100%)',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '13px',
      }}>
        <div style={{ marginBottom: '15px', letterSpacing: '2px', color: 'white', fontSize: '16px' }}>
          ANNA HRYSHCHENKO
        </div>
        <div style={{ marginBottom: '20px' }}>
          Ästhetische Medizin · München
        </div>
        <div style={{ fontSize: '12px', opacity: 0.6 }}>
          © 2026 Anna Hryshchenko · Alle Rechte vorbehalten
        </div>
        <div style={{ marginTop: '15px', fontSize: '12px' }}>
          <a href="/impressum" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginRight: '20px' }}>Impressum</a>
          <a href="/datenschutz" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
