'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const translations = {
  de: {
    langName: 'DE',
    backLink: '← Zurück zur Startseite',
    title: 'IMPRESSUM',
    section1Title: 'Angaben gemäß § 5 TMG',
    section2Title: 'Kontakt',
    section3Title: 'Berufsbezeichnung & Berufsrechtliche Angaben',
    designation: 'Berufsbezeichnung',
    designationValue: 'Ärztin',
    approbation: 'Approbation verliehen in',
    approbationValue: 'Deutschland',
    chamber: 'Zuständige Kammer',
    chamberName: 'Bayerische Landesärztekammer',
    regulations: 'Berufsrechtliche Regelungen',
    regulation1: 'Berufsordnung für die Ärzte Bayerns',
    regulation2: 'Heilberufe-Kammergesetz (HKaG)',
    regulationsNote: '(einsehbar unter',
    section4Title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    section5Title: 'EU-Streitschlichtung',
    section5Text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    section5Note: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
    section6Title: 'Verbraucherstreitbeilegung',
    section6Text: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    section7Title: 'Haftung für Inhalte',
    section7Text: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    section8Title: 'Haftung für Links',
    section8Text: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    section9Title: 'Urheberrecht',
    section9Text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
    footerCopyright: '© 2026 Anna Hryshchenko · Alle Rechte vorbehalten',
    home: 'Startseite',
    privacy: 'Datenschutz',
    name: 'Anna Hryshchenko',
  },
  en: {
    langName: 'EN',
    backLink: '← Back to Homepage',
    title: 'LEGAL NOTICE',
    section1Title: 'Information according to § 5 TMG',
    section2Title: 'Contact',
    section3Title: 'Professional Designation & Regulatory Information',
    designation: 'Professional designation',
    designationValue: 'Physician',
    approbation: 'Medical license granted in',
    approbationValue: 'Germany',
    chamber: 'Responsible chamber',
    chamberName: 'Bavarian Medical Association',
    regulations: 'Professional regulations',
    regulation1: 'Professional Code for Bavarian Physicians',
    regulation2: 'Healthcare Professions Chamber Act (HKaG)',
    regulationsNote: '(available at',
    section4Title: 'Responsible for content according to § 55 Abs. 2 RStV',
    section5Title: 'EU Dispute Resolution',
    section5Text: 'The European Commission provides a platform for online dispute resolution (OS):',
    section5Note: 'Our email address can be found in the legal notice above.',
    section6Title: 'Consumer Dispute Resolution',
    section6Text: 'We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.',
    section7Title: 'Liability for Content',
    section7Text: 'As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Abs.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information. Upon becoming aware of legal violations, we will remove such content immediately.',
    section8Title: 'Liability for Links',
    section8Text: 'Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. Upon becoming aware of legal violations, we will remove such links immediately.',
    section9Title: 'Copyright',
    section9Text: 'The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.',
    footerCopyright: '© 2026 Anna Hryshchenko · All rights reserved',
    home: 'Homepage',
    privacy: 'Privacy Policy',
    name: 'Anna Hryshchenko',
  },
  ru: {
    langName: 'RU',
    backLink: '← Вернуться на главную',
    title: 'ИМПРЕССУМ',
    section1Title: 'Информация согласно § 5 TMG',
    section2Title: 'Контакт',
    section3Title: 'Профессиональное звание и правовая информация',
    designation: 'Профессиональное звание',
    designationValue: 'Врач',
    approbation: 'Лицензия выдана в',
    approbationValue: 'Германии',
    chamber: 'Ответственная палата',
    chamberName: 'Баварская врачебная палата',
    regulations: 'Профессиональные нормы',
    regulation1: 'Профессиональный кодекс врачей Баварии',
    regulation2: 'Закон о палатах медицинских профессий (HKaG)',
    regulationsNote: '(доступно на',
    section4Title: 'Ответственный за содержание согласно § 55 Abs. 2 RStV',
    section5Title: 'Урегулирование споров ЕС',
    section5Text: 'Европейская комиссия предоставляет платформу для онлайн-урегулирования споров (OS):',
    section5Note: 'Наш адрес электронной почты указан выше в импрессуме.',
    section6Title: 'Урегулирование потребительских споров',
    section6Text: 'Мы не готовы и не обязаны участвовать в процедурах урегулирования споров перед потребительским арбитражным органом.',
    section7Title: 'Ответственность за содержание',
    section7Text: 'Как поставщик услуг, мы несём ответственность за собственный контент на этих страницах в соответствии с общим законодательством согласно § 7 Abs.1 TMG. Однако, согласно §§ 8-10 TMG, мы не обязаны контролировать переданную или сохранённую информацию третьих лиц. При обнаружении правонарушений мы немедленно удалим такой контент.',
    section8Title: 'Ответственность за ссылки',
    section8Text: 'Наше предложение содержит ссылки на внешние веб-сайты третьих лиц, на содержание которых мы не имеем влияния. Поэтому мы не можем нести ответственность за этот внешний контент. При обнаружении правонарушений мы немедленно удалим такие ссылки.',
    section9Title: 'Авторское право',
    section9Text: 'Контент и работы, созданные операторами сайта на этих страницах, защищены немецким авторским правом. Воспроизведение, редактирование, распространение и любое использование за пределами авторского права требуют письменного согласия соответствующего автора или создателя.',
    footerCopyright: '© 2026 Анна Грищенко · Все права защищены',
    home: 'Главная',
    privacy: 'Политика конфиденциальности',
    name: 'Анна Грищенко',
  },
  uk: {
    langName: 'UK',
    backLink: '← Повернутися на головну',
    title: 'ІМПРЕСУМ',
    section1Title: 'Інформація згідно з § 5 TMG',
    section2Title: 'Контакт',
    section3Title: 'Професійне звання та правова інформація',
    designation: 'Професійне звання',
    designationValue: 'Лікар',
    approbation: 'Ліцензія видана в',
    approbationValue: 'Німеччині',
    chamber: 'Відповідальна палата',
    chamberName: 'Баварська лікарська палата',
    regulations: 'Професійні норми',
    regulation1: 'Професійний кодекс лікарів Баварії',
    regulation2: 'Закон про палати медичних професій (HKaG)',
    regulationsNote: '(доступно на',
    section4Title: 'Відповідальний за зміст згідно з § 55 Abs. 2 RStV',
    section5Title: 'Врегулювання спорів ЄС',
    section5Text: 'Європейська комісія надає платформу для онлайн-врегулювання спорів (OS):',
    section5Note: 'Наша електронна адреса вказана вище в імпресумі.',
    section6Title: 'Врегулювання споживчих спорів',
    section6Text: 'Ми не готові і не зобов\'язані брати участь у процедурах врегулювання спорів перед споживчим арбітражним органом.',
    section7Title: 'Відповідальність за зміст',
    section7Text: 'Як постачальник послуг, ми несемо відповідальність за власний контент на цих сторінках відповідно до загального законодавства згідно з § 7 Abs.1 TMG. Однак, згідно з §§ 8-10 TMG, ми не зобов\'язані контролювати передану або збережену інформацію третіх осіб. При виявленні правопорушень ми негайно видалимо такий контент.',
    section8Title: 'Відповідальність за посилання',
    section8Text: 'Наша пропозиція містить посилання на зовнішні веб-сайти третіх осіб, на зміст яких ми не маємо впливу. Тому ми не можемо нести відповідальність за цей зовнішній контент. При виявленні правопорушень ми негайно видалимо такі посилання.',
    section9Title: 'Авторське право',
    section9Text: 'Контент і роботи, створені операторами сайту на цих сторінках, захищені німецьким авторським правом. Відтворення, редагування, поширення та будь-яке використання за межами авторського права вимагають письмової згоди відповідного автора або творця.',
    footerCopyright: '© 2026 Анна Грищенко · Усі права захищені',
    home: 'Головна',
    privacy: 'Політика конфіденційності',
    name: 'Анна Грищенко',
  },
};

export default function Impressum() {
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
          <div style={styles.sectionTitle}>{t.section1Title}</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong style={{ fontFamily: fontHeading, fontSize: '20px' }}>{t.name}</strong><br /><br />
              Heimburgstraße 3<br />
              81243 München<br />
              Deutschland
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section2Title}</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong>Telefon:</strong> +49 171 2092608<br />
              <strong>E-Mail:</strong> annagri199527@gmail.com
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section3Title}</div>
          <div style={styles.highlight}>
            <p style={{...styles.paragraph, margin: 0}}>
              <strong>{t.designation}:</strong> {t.designationValue}<br />
              <strong>{t.approbation}:</strong> {t.approbationValue}<br /><br />
              <strong>{t.chamber}:</strong><br />
              {t.chamberName}<br />
              Mühlbaurstraße 16<br />
              81677 München<br />
              <a href="https://www.blaek.de" style={styles.link} target="_blank" rel="noopener noreferrer">www.blaek.de</a><br /><br />
              <strong>{t.regulations}:</strong><br />
              • {t.regulation1}<br />
              • {t.regulation2}<br />
              <em style={{ fontSize: '12px' }}>{t.regulationsNote} <a href="https://www.blaek.de" style={styles.link} target="_blank" rel="noopener noreferrer">www.blaek.de</a>)</em>
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section4Title}</div>
          <p style={styles.paragraph}>
            {t.name}<br />
            Heimburgstraße 3<br />
            81243 München
          </p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section5Title}</div>
          <p style={styles.paragraph}>
            {t.section5Text}{' '}
            <a href="https://ec.europa.eu/consumers/odr/" style={styles.link} target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
          </p>
          <p style={styles.paragraph}>{t.section5Note}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section6Title}</div>
          <p style={styles.paragraph}>{t.section6Text}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section7Title}</div>
          <p style={styles.paragraph}>{t.section7Text}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section8Title}</div>
          <p style={styles.paragraph}>{t.section8Text}</p>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.section9Title}</div>
          <p style={styles.paragraph}>{t.section9Text}</p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p style={{ fontFamily: fontBody }}>{t.footerCopyright}</p>
        <p style={{ fontFamily: fontBody, marginTop: '10px' }}>
          <Link href={`/?lang=${lang}`} style={styles.link}>{t.home}</Link>
          {' · '}
          <Link href={`/datenschutz?lang=${lang}`} style={styles.link}>{t.privacy}</Link>
        </p>
      </footer>
    </div>
  );
}
