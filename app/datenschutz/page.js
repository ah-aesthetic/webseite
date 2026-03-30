'use client';

import React from 'react';
import Link from 'next/link';

export default function Datenschutz() {
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
    serviceBox: {
      background: '#faf7f5',
      padding: '16px 20px',
      borderRadius: '12px',
      marginBottom: '12px',
    },
    serviceName: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#b8927a',
      marginBottom: '6px',
    },
    serviceDesc: {
      fontSize: '13px',
      color: '#6a5a4a',
      lineHeight: '1.6',
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
        <h1 style={styles.title}>DATENSCHUTZ</h1>
      </header>

      <main style={styles.content}>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Verantwortliche Stelle</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              Anna Hryshchenko<br />
              Heimburgstraße 3<br />
              81243 München<br />
              E-Mail: annagri199527@gmail.com<br />
              Telefon: +49 171 2092608
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>1. Allgemeine Hinweise</div>
          <p style={styles.paragraph}>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten 
            daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG). In dieser 
            Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung 
            im Rahmen unserer Website.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>2. Hosting & Technische Infrastruktur</div>
          
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>Vercel Inc.</div>
            <div style={styles.serviceDesc}>
              Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. 
              Beim Besuch unserer Website werden automatisch technische Zugriffsdaten (IP-Adresse, Browsertyp, 
              Betriebssystem, Zugriffszeit) erfasst. Dies ist für den Betrieb der Website technisch erforderlich.<br /><br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </div>
          </div>

          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>Cloudinary</div>
            <div style={styles.serviceDesc}>
              Für die Bereitstellung von Bildern nutzen wir Cloudinary Ltd., 111 W Evelyn Ave, Suite 206, 
              Sunnyvale, CA 94086, USA. Cloudinary speichert und liefert Mediendateien aus.<br /><br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>3. Kontaktaufnahme</div>
          
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>Formspree</div>
            <div style={styles.serviceDesc}>
              Für Kontaktformulare nutzen wir Formspree Inc., 822 Guilford Ave #961, Baltimore MD 21202, USA. 
              Bei Absenden eines Formulars werden Ihre eingegebenen Daten an Formspree übermittelt und an 
              unsere E-Mail-Adresse weitergeleitet.<br /><br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            </div>
          </div>

          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>EmailJS</div>
            <div style={styles.serviceDesc}>
              Alternativ kann EmailJS für den E-Mail-Versand verwendet werden. EmailJS verarbeitet die 
              im Formular eingegebenen Daten zur Zustellung Ihrer Nachricht.<br /><br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            </div>
          </div>

          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>Google Mail (Gmail)</div>
            <div style={styles.serviceDesc}>
              Für die E-Mail-Kommunikation nutzen wir Google Mail (Gmail), einen Dienst der Google Ireland 
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. E-Mails werden auf den Servern von 
              Google verarbeitet und gespeichert.<br /><br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>4. Ihre Rechte</div>
          <p style={styles.paragraph}>Sie haben jederzeit das Recht auf:</p>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              • <strong>Auskunft</strong> über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)<br />
              • <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)<br />
              • <strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)<br />
              • <strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)<br />
              • <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)<br />
              • <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)<br />
              • <strong>Beschwerde</strong> bei einer Aufsichtsbehörde (Art. 77 DSGVO)
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>5. Datensicherheit</div>
          <p style={styles.paragraph}>
            Unsere Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine 
            verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Adresszeile Ihres Browsers.
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>6. Aktualität und Änderung dieser Datenschutzerklärung</div>
          <p style={styles.paragraph}>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die 
            Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann 
            es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Stand: März 2026</p>
        <p>© 2026 Anna Hryshchenko · Alle Rechte vorbehalten</p>
        <p style={{marginTop: '10px'}}>
          <Link href="/" style={styles.link}>Startseite</Link>
          {' · '}
          <Link href="/impressum" style={styles.link}>Impressum</Link>
        </p>
      </footer>
    </div>
  );
}
