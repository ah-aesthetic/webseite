'use client';

import React from 'react';
import Link from 'next/link';

export default function Impressum() {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#5a4a3a',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf6f0 0%, #fae8e0 100%)',
    },
    header: {
      background: 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)',
      padding: '40px 20px',
      textAlign: 'center',
      color: 'white',
    },
    backLink: {
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none',
      fontSize: '14px',
      letterSpacing: '1px',
      display: 'inline-block',
      marginBottom: '20px',
    },
    title: {
      fontSize: '32px',
      fontWeight: '300',
      margin: 0,
      letterSpacing: '3px',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '60px 20px',
    },
    section: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      marginBottom: '30px',
      boxShadow: '0 10px 40px rgba(180, 130, 110, 0.1)',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#b8927a',
      marginBottom: '20px',
      letterSpacing: '1px',
    },
    paragraph: {
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#6a5a4a',
      margin: '0 0 15px 0',
    },
    highlight: {
      background: '#fdf6f0',
      padding: '20px',
      borderRadius: '12px',
      marginTop: '15px',
    },
    link: {
      color: '#b8927a',
      textDecoration: 'none',
    },
    footer: {
      textAlign: 'center',
      padding: '40px 20px',
      fontSize: '13px',
      color: '#8b7355',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link href="/" style={styles.backLink}>← Zurück zur Startseite</Link>
        <h1 style={styles.title}>IMPRESSUM</h1>
      </header>

      <main style={styles.content}>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Angaben gemäß § 5 TMG</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong style={{fontSize: '18px'}}>Anna Hryshchenko</strong><br /><br />
              Heimburgstraße 3<br />
              81243 München<br />
              Deutschland
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Kontakt</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong>Telefon:</strong> +49 171 2092608<br />
              <strong>E-Mail:</strong> annagri199527@gmail.com
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Berufsbezeichnung & Berufsrechtliche Angaben</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong>Berufsbezeichnung:</strong> Ärztin<br />
              <strong>Approbation verliehen in:</strong> Deutschland<br /><br />
              <strong>Zuständige Kammer:</strong><br />
              Bayerische Landesärztekammer<br />
              Mühlbaurstraße 16<br />
              81677 München<br />
              <a href="https://www.blaek.de" style={styles.link} target="_blank" rel="noopener noreferrer">www.blaek.de</a><br /><br />
              <strong>Berufsrechtliche Regelungen:</strong><br />
              • Berufsordnung für die Ärzte Bayerns<br />
              • Heilberufe-Kammergesetz (HKaG)<br />
              <em style={{fontSize: '13px'}}>(einsehbar unter <a href="https://www.blaek.de" style={styles.link} target="_blank" rel="noopener noreferrer">www.blaek.de</a>)</em>
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</div>
          <p style={styles.paragraph}>
            Anna Hryshchenko<br />
            Heimburgstraße 3<br />
            81243 München
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>EU-Streitschlichtung</div>
          <p style={styles.paragraph}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" style={styles.link} target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>
          </p>
          <p style={styles.paragraph}>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Verbraucherstreitbeilegung</div>
          <p style={styles.paragraph}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Haftung für Inhalte</div>
          <p style={styles.paragraph}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir 
            derartige Inhalte umgehend entfernen.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Haftung für Links</div>
          <p style={styles.paragraph}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Urheberrecht</div>
          <p style={styles.paragraph}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 Anna Hryshchenko · Alle Rechte vorbehalten</p>
        <p style={{marginTop: '10px'}}>
          <Link href="/" style={styles.link}>Startseite</Link>
          {' · '}
          <Link href="/datenschutz" style={styles.link}>Datenschutz</Link>
        </p>
      </footer>
    </div>
  );
}
