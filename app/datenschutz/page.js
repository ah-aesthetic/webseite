'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const translations = {
  de: {
    langName: 'DE',
    backLink: '← Zurück zur Startseite',
    title: 'DATENSCHUTZ',
    responsibleTitle: 'Verantwortliche Stelle',
    section1Title: '1. Allgemeine Hinweise',
    section1Text: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.',
    section2Title: '2. Hosting & Technische Infrastruktur',
    vercelTitle: 'Vercel Inc.',
    vercelText: 'Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Besuch unserer Website werden automatisch technische Zugriffsdaten (IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit) erfasst. Dies ist für den Betrieb der Website technisch erforderlich.',
    cloudinaryTitle: 'Cloudinary',
    cloudinaryText: 'Für die Bereitstellung von Bildern nutzen wir Cloudinary Ltd., 111 W Evelyn Ave, Suite 206, Sunnyvale, CA 94086, USA. Cloudinary speichert und liefert Mediendateien aus.',
    legalBasis: 'Rechtsgrundlage',
    legalBasisF: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
    legalBasisB: 'Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)',
    section3Title: '3. Kontaktaufnahme',
    formspreeTitle: 'Formspree',
    formspreeText: 'Für Kontaktformulare nutzen wir Formspree Inc., 822 Guilford Ave #961, Baltimore MD 21202, USA. Bei Absenden eines Formulars werden Ihre eingegebenen Daten an Formspree übermittelt und an unsere E-Mail-Adresse weitergeleitet.',
    emailjsTitle: 'EmailJS',
    emailjsText: 'Alternativ kann EmailJS für den E-Mail-Versand verwendet werden. EmailJS verarbeitet die im Formular eingegebenen Daten zur Zustellung Ihrer Nachricht.',
    gmailTitle: 'Google Mail (Gmail)',
    gmailText: 'Für die E-Mail-Kommunikation nutzen wir Google Mail (Gmail), einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. E-Mails werden auf den Servern von Google verarbeitet und gespeichert.',
    section4Title: '4. Ihre Rechte',
    section4Intro: 'Sie haben jederzeit das Recht auf:',
    right1: 'Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)',
    right2: 'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
    right3: 'Löschung Ihrer Daten (Art. 17 DSGVO)',
    right4: 'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
    right5: 'Datenübertragbarkeit (Art. 20 DSGVO)',
    right6: 'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
    right7: 'Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)',
    section5Title: '5. Datensicherheit',
    section5Text: 'Unsere Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in der Adresszeile Ihres Browsers.',
    section6Title: '6. Aktualität und Änderung dieser Datenschutzerklärung',
    section6Text: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
    lastUpdated: 'Stand: März 2026',
    footerCopyright: '© 2026 Anna Hryshchenko · Alle Rechte vorbehalten',
    home: 'Startseite',
    legalNotice: 'Impressum',
    name: 'Anna Hryshchenko',
  },
  en: {
    langName: 'EN',
    backLink: '← Back to Homepage',
    title: 'PRIVACY POLICY',
    responsibleTitle: 'Responsible Party',
    section1Title: '1. General Information',
    section1Text: 'The protection of your personal data is of particular concern to us. We therefore process your data exclusively on the basis of legal provisions (GDPR, BDSG, TMG). In this privacy policy, we inform you about the most important aspects of data processing on our website.',
    section2Title: '2. Hosting & Technical Infrastructure',
    vercelTitle: 'Vercel Inc.',
    vercelText: 'Our website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit our website, technical access data (IP address, browser type, operating system, access time) is automatically collected. This is technically necessary for the operation of the website.',
    cloudinaryTitle: 'Cloudinary',
    cloudinaryText: 'For the provision of images, we use Cloudinary Ltd., 111 W Evelyn Ave, Suite 206, Sunnyvale, CA 94086, USA. Cloudinary stores and delivers media files.',
    legalBasis: 'Legal basis',
    legalBasisF: 'Art. 6 para. 1 lit. f GDPR (legitimate interest)',
    legalBasisB: 'Art. 6 para. 1 lit. b GDPR (contract initiation)',
    section3Title: '3. Contact',
    formspreeTitle: 'Formspree',
    formspreeText: 'For contact forms, we use Formspree Inc., 822 Guilford Ave #961, Baltimore MD 21202, USA. When you submit a form, your entered data is transmitted to Formspree and forwarded to our email address.',
    emailjsTitle: 'EmailJS',
    emailjsText: 'Alternatively, EmailJS can be used for email delivery. EmailJS processes the data entered in the form to deliver your message.',
    gmailTitle: 'Google Mail (Gmail)',
    gmailText: 'For email communication, we use Google Mail (Gmail), a service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Emails are processed and stored on Google servers.',
    section4Title: '4. Your Rights',
    section4Intro: 'You have the right at any time to:',
    right1: 'Information about your data stored with us (Art. 15 GDPR)',
    right2: 'Correction of incorrect data (Art. 16 GDPR)',
    right3: 'Deletion of your data (Art. 17 GDPR)',
    right4: 'Restriction of processing (Art. 18 GDPR)',
    right5: 'Data portability (Art. 20 GDPR)',
    right6: 'Object to processing (Art. 21 GDPR)',
    right7: 'Complaint to a supervisory authority (Art. 77 GDPR)',
    section5Title: '5. Data Security',
    section5Text: 'Our website uses SSL or TLS encryption for security reasons. You can recognize an encrypted connection by the lock symbol in your browser\'s address bar.',
    section6Title: '6. Currency and Changes to this Privacy Policy',
    section6Text: 'This privacy policy is currently valid as of March 2026. Due to the further development of our website or due to changed legal requirements, it may become necessary to change this privacy policy.',
    lastUpdated: 'Last updated: March 2026',
    footerCopyright: '© 2026 Anna Hryshchenko · All rights reserved',
    home: 'Homepage',
    legalNotice: 'Legal Notice',
    name: 'Anna Hryshchenko',
  },
  ru: {
    langName: 'RU',
    backLink: '← Вернуться на главную',
    title: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
    responsibleTitle: 'Ответственная сторона',
    section1Title: '1. Общая информация',
    section1Text: 'Защита ваших персональных данных является для нас особой заботой. Поэтому мы обрабатываем ваши данные исключительно на основании законодательных положений (GDPR, BDSG, TMG). В этой политике конфиденциальности мы информируем вас о важнейших аспектах обработки данных на нашем сайте.',
    section2Title: '2. Хостинг и техническая инфраструктура',
    vercelTitle: 'Vercel Inc.',
    vercelText: 'Наш сайт размещён на Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. При посещении нашего сайта автоматически собираются технические данные доступа (IP-адрес, тип браузера, операционная система, время доступа). Это технически необходимо для работы сайта.',
    cloudinaryTitle: 'Cloudinary',
    cloudinaryText: 'Для предоставления изображений мы используем Cloudinary Ltd., 111 W Evelyn Ave, Suite 206, Sunnyvale, CA 94086, USA. Cloudinary хранит и доставляет медиафайлы.',
    legalBasis: 'Правовая основа',
    legalBasisF: 'Ст. 6 абз. 1 лит. f GDPR (законный интерес)',
    legalBasisB: 'Ст. 6 абз. 1 лит. b GDPR (инициирование договора)',
    section3Title: '3. Связь',
    formspreeTitle: 'Formspree',
    formspreeText: 'Для контактных форм мы используем Formspree Inc., 822 Guilford Ave #961, Baltimore MD 21202, USA. При отправке формы введённые вами данные передаются в Formspree и пересылаются на наш адрес электронной почты.',
    emailjsTitle: 'EmailJS',
    emailjsText: 'Альтернативно может использоваться EmailJS для доставки электронной почты. EmailJS обрабатывает данные, введённые в форму, для доставки вашего сообщения.',
    gmailTitle: 'Google Mail (Gmail)',
    gmailText: 'Для электронной переписки мы используем Google Mail (Gmail), сервис Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия. Электронные письма обрабатываются и хранятся на серверах Google.',
    section4Title: '4. Ваши права',
    section4Intro: 'Вы имеете право в любое время на:',
    right1: 'Информацию о ваших данных, хранящихся у нас (ст. 15 GDPR)',
    right2: 'Исправление неверных данных (ст. 16 GDPR)',
    right3: 'Удаление ваших данных (ст. 17 GDPR)',
    right4: 'Ограничение обработки (ст. 18 GDPR)',
    right5: 'Переносимость данных (ст. 20 GDPR)',
    right6: 'Возражение против обработки (ст. 21 GDPR)',
    right7: 'Жалобу в надзорный орган (ст. 77 GDPR)',
    section5Title: '5. Безопасность данных',
    section5Text: 'Наш сайт использует SSL- или TLS-шифрование по соображениям безопасности. Зашифрованное соединение можно распознать по значку замка в адресной строке браузера.',
    section6Title: '6. Актуальность и изменения этой политики конфиденциальности',
    section6Text: 'Эта политика конфиденциальности актуальна по состоянию на март 2026 года. В связи с дальнейшим развитием нашего сайта или изменением законодательных требований может возникнуть необходимость изменить эту политику конфиденциальности.',
    lastUpdated: 'Актуально: март 2026',
    footerCopyright: '© 2026 Анна Грищенко · Все права защищены',
    home: 'Главная',
    legalNotice: 'Импрессум',
    name: 'Анна Грищенко',
  },
  uk: {
    langName: 'UK',
    backLink: '← Повернутися на головну',
    title: 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ',
    responsibleTitle: 'Відповідальна сторона',
    section1Title: '1. Загальна інформація',
    section1Text: 'Захист ваших персональних даних є для нас особливою турботою. Тому ми обробляємо ваші дані виключно на підставі законодавчих положень (GDPR, BDSG, TMG). У цій політиці конфіденційності ми інформуємо вас про найважливіші аспекти обробки даних на нашому сайті.',
    section2Title: '2. Хостинг і технічна інфраструктура',
    vercelTitle: 'Vercel Inc.',
    vercelText: 'Наш сайт розміщено на Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. При відвідуванні нашого сайту автоматично збираються технічні дані доступу (IP-адреса, тип браузера, операційна система, час доступу). Це технічно необхідно для роботи сайту.',
    cloudinaryTitle: 'Cloudinary',
    cloudinaryText: 'Для надання зображень ми використовуємо Cloudinary Ltd., 111 W Evelyn Ave, Suite 206, Sunnyvale, CA 94086, USA. Cloudinary зберігає та доставляє медіафайли.',
    legalBasis: 'Правова основа',
    legalBasisF: 'Ст. 6 абз. 1 літ. f GDPR (законний інтерес)',
    legalBasisB: 'Ст. 6 абз. 1 літ. b GDPR (ініціювання договору)',
    section3Title: '3. Зв\'язок',
    formspreeTitle: 'Formspree',
    formspreeText: 'Для контактних форм ми використовуємо Formspree Inc., 822 Guilford Ave #961, Baltimore MD 21202, USA. При відправці форми введені вами дані передаються до Formspree та пересилаються на нашу електронну адресу.',
    emailjsTitle: 'EmailJS',
    emailjsText: 'Альтернативно може використовуватися EmailJS для доставки електронної пошти. EmailJS обробляє дані, введені у форму, для доставки вашого повідомлення.',
    gmailTitle: 'Google Mail (Gmail)',
    gmailText: 'Для електронного листування ми використовуємо Google Mail (Gmail), сервіс Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ірландія. Електронні листи обробляються та зберігаються на серверах Google.',
    section4Title: '4. Ваші права',
    section4Intro: 'Ви маєте право в будь-який час на:',
    right1: 'Інформацію про ваші дані, що зберігаються у нас (ст. 15 GDPR)',
    right2: 'Виправлення неправильних даних (ст. 16 GDPR)',
    right3: 'Видалення ваших даних (ст. 17 GDPR)',
    right4: 'Обмеження обробки (ст. 18 GDPR)',
    right5: 'Переносимість даних (ст. 20 GDPR)',
    right6: 'Заперечення проти обробки (ст. 21 GDPR)',
    right7: 'Скаргу до наглядового органу (ст. 77 GDPR)',
    section5Title: '5. Безпека даних',
    section5Text: 'Наш сайт використовує SSL- або TLS-шифрування з міркувань безпеки. Зашифроване з\'єднання можна розпізнати за значком замка в адресному рядку браузера.',
    section6Title: '6. Актуальність і зміни цієї політики конфіденційності',
    section6Text: 'Ця політика конфіденційності актуальна станом на березень 2026 року. У зв\'язку з подальшим розвитком нашого сайту або зміною законодавчих вимог може виникнути необхідність змінити цю політику конфіденційності.',
    lastUpdated: 'Актуально: березень 2026',
    footerCopyright: '© 2026 Анна Грищенко · Усі права захищені',
    home: 'Головна',
    legalNotice: 'Імпресум',
    name: 'Анна Грищенко',
  },
};

export default function Datenschutz() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState('de');
  const t = translations[lang];

  const fontHeading = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const fontBody = "var(--font-montserrat), 'Montserrat', sans-serif";

  useEffect(() => {
    const urlLang = searchParams.get('lang');
    if (urlLang && translations[urlLang]) {
      setLang(urlLang);
    }
  }, [searchParams]);

  const styles = {
    container: { fontFamily: fontBody, color: '#5a4a3a', minHeight: '100vh', background: 'linear-gradient(135deg, #fdf6f0 0%, #fae8e0 100%)' },
    header: { background: 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)', padding: '40px 20px', textAlign: 'center', color: 'white' },
    backLink: { fontFamily: fontBody, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px', fontWeight: '400' },
    title: { fontFamily: fontHeading, fontSize: '36px', fontWeight: '400', margin: 0, letterSpacing: '2px' },
    content: { maxWidth: '800px', margin: '0 auto', padding: '60px 20px' },
    section: { background: 'white', borderRadius: '20px', padding: '35px', marginBottom: '25px', boxShadow: '0 10px 40px rgba(180, 130, 110, 0.1)' },
    sectionTitle: { fontFamily: fontHeading, fontSize: '22px', fontWeight: '500', color: '#b8927a', marginBottom: '20px' },
    paragraph: { fontFamily: fontBody, fontSize: '14px', lineHeight: '1.8', color: '#6a5a4a', margin: '0 0 15px 0', fontWeight: '400' },
    highlight: { background: '#fdf6f0', padding: '20px', borderRadius: '12px', marginTop: '15px' },
    serviceBox: { background: '#faf7f5', padding: '16px 20px', borderRadius: '12px', marginBottom: '12px' },
    serviceName: { fontFamily: fontBody, fontSize: '14px', fontWeight: '600', color: '#b8927a', marginBottom: '6px' },
    serviceDesc: { fontFamily: fontBody, fontSize: '13px', color: '#6a5a4a', lineHeight: '1.6', fontWeight: '400' },
    link: { color: '#b8927a', textDecoration: 'none' },
    footer: { textAlign: 'center', padding: '40px 20px', fontSize: '13px', color: '#8b7355' },
    langSwitcher: { position: 'fixed', top: '20px', right: '20px', zIndex: 1000, display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.95)', padding: '8px 12px', borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' },
  };

  return (
    <div style={styles.container}>
      {/* Language Switcher */}
      <div style={styles.langSwitcher}>
        {['de', 'en', 'ru', 'uk'].map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              fontFamily: fontBody,
              padding: '6px 12px',
              border: 'none',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              background: lang === l ? 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)' : 'transparent',
              color: lang === l ? 'white' : '#8b7355',
            }}
          >
            {translations[l].langName}
          </button>
        ))}
      </div>

      <header style={styles.header}>
        <Link href={`/?lang=${lang}`} style={styles.backLink}>{t.backLink}</Link>
        <h1 style={styles.title}>{t.title}</h1>
      </header>

      <main style={styles.content}>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.responsibleTitle}</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              {t.name}<br />
              Heimburgstraße 3<br />
              81243 München<br />
              E-Mail: annagri199527@gmail.com<br />
              Telefon: +49 171 2092608
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section1Title}</div>
          <p style={styles.paragraph}>{t.section1Text}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section2Title}</div>
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>{t.vercelTitle}</div>
            <div style={styles.serviceDesc}>
              {t.vercelText}<br /><br />
              <strong>{t.legalBasis}:</strong> {t.legalBasisF}
            </div>
          </div>
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>{t.cloudinaryTitle}</div>
            <div style={styles.serviceDesc}>
              {t.cloudinaryText}<br /><br />
              <strong>{t.legalBasis}:</strong> {t.legalBasisF}
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section3Title}</div>
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>{t.formspreeTitle}</div>
            <div style={styles.serviceDesc}>
              {t.formspreeText}<br /><br />
              <strong>{t.legalBasis}:</strong> {t.legalBasisB}
            </div>
          </div>
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>{t.emailjsTitle}</div>
            <div style={styles.serviceDesc}>
              {t.emailjsText}<br /><br />
              <strong>{t.legalBasis}:</strong> {t.legalBasisB}
            </div>
          </div>
          <div style={styles.serviceBox}>
            <div style={styles.serviceName}>{t.gmailTitle}</div>
            <div style={styles.serviceDesc}>
              {t.gmailText}<br /><br />
              <strong>{t.legalBasis}:</strong> {t.legalBasisF}
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section4Title}</div>
          <p style={styles.paragraph}>{t.section4Intro}</p>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              • <strong>{t.right1.split('(')[0]}</strong> ({t.right1.split('(')[1]}<br />
              • <strong>{t.right2.split('(')[0]}</strong> ({t.right2.split('(')[1]}<br />
              • <strong>{t.right3.split('(')[0]}</strong> ({t.right3.split('(')[1]}<br />
              • <strong>{t.right4.split('(')[0]}</strong> ({t.right4.split('(')[1]}<br />
              • <strong>{t.right5.split('(')[0]}</strong> ({t.right5.split('(')[1]}<br />
              • <strong>{t.right6.split('(')[0]}</strong> ({t.right6.split('(')[1]}<br />
              • <strong>{t.right7.split('(')[0]}</strong> ({t.right7.split('(')[1]}
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section5Title}</div>
          <p style={styles.paragraph}>{t.section5Text}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section6Title}</div>
          <p style={styles.paragraph}>{t.section6Text}</p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={{ fontFamily: fontBody }}>{t.lastUpdated}</p>
        <p style={{ fontFamily: fontBody }}>{t.footerCopyright}</p>
        <p style={{ fontFamily: fontBody, marginTop: '10px' }}>
          <Link href={`/?lang=${lang}`} style={styles.link}>{t.home}</Link>
          {' · '}
          <Link href={`/impressum?lang=${lang}`} style={styles.link}>{t.legalNotice}</Link>
        </p>
      </footer>
    </div>
  );
}
