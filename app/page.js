'use client';

import React, { useState } from 'react';

const translations = {
  de: {
    langName: 'DE',
    flag: '🇩🇪',
    heroSubtitle: 'ÄSTHETISCHE MEDIZIN IN MÜNCHEN',
    heroName: 'ANNA HRYSHCHENKO',
    heroText: 'Natürliche Schönheit durch medizinische Expertise.',
    heroTagline: 'Individuell. Professionell. Diskret.',
    ctaButton: 'BEHANDLUNGEN ENTDECKEN',
    aboutLabel: 'ÜBER MICH',
    aboutTitle: 'Ärztin für Ästhetik und Frauengesundheit',
    aboutText1: 'Als approbierte Gynäkologin verbinde ich medizinisches Fachwissen mit einem ausgeprägten Sinn für natürliche Ästhetik. Mein Ziel ist es, Ihre individuelle Schönheit zu unterstreichen – nicht zu verändern.',
    aboutText2: 'Jede Behandlung beginnt mit einer ausführlichen Beratung, um Ihre Wünsche zu verstehen und einen maßgeschneiderten Behandlungsplan zu erstellen. Dabei setze ich ausschließlich auf CE-zertifizierte, in der EU zugelassene Produkte.',
    aboutBadge1: 'Approbierte Gynäkologin',
    aboutBadge2: 'Viersprachig: Deutsch, Ukrainisch, Englisch, Russisch',
    aboutBadge3: 'Individuelle Beratung',
    aboutBadge4: 'Einsatz für Naturschutz',
    aboutBadge5: 'Natürliches Ergebnis',
    treatmentsLabel: 'LEISTUNGEN & PREISE',
    treatmentsTitle: 'Behandlungen',
    categoryPakete: 'Botox Pakete',
    categoryEinzel: 'Botox 1 Zone',
    categorySkinbooster: 'Skinbooster',
    categoryPolynukleotide: 'Polynukleotide',
    treatmentNote1: 'Kostenlose Nachkorrektur nach 14 Tagen (falls erforderlich)',
    treatmentNote2: 'Alle Produkte sind CE-zertifiziert und in der EU zugelassen',
    contactLabel: 'KONTAKT',
    contactTitle: 'Jetzt Termin vereinbaren',
    contactText: 'Ich freue mich auf Ihre Anfrage.',
    contactInstagram: 'Schreiben Sie mir auf Instagram',
    contactForm: 'Oder hier anfragen',
    location: 'München',
    footerTitle: 'ANNA HRYSHCHENKO',
    footerSubtitle: 'Ästhetische Medizin · München',
    footerCopyright: '© 2026 Anna Hryshchenko · Alle Rechte vorbehalten',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    paketeTitle: 'Behandlungspakete',
    einzelTitle: 'Einzelbehandlungen',
    skinboosterTitle: 'Skinbooster',
    skinboosterSubtitle: 'Intensive Hydration und Verbesserung der Hautqualität',
    polynukleotideTitle: 'Polynukleotide',
    polynukleotideSubtitle: 'Langfristige Hautregeneration & Biostimulation',
  },
  uk: {
    langName: 'UK',
    flag: '🇺🇦',
    heroSubtitle: 'ЕСТЕТИЧНА МЕДИЦИНА В МЮНХЕНІ',
    heroName: 'АННА ГРИЩЕНКО',
    heroText: 'Природна краса завдяки медичній експертизі.',
    heroTagline: 'Індивідуально. Професійно. Конфіденційно.',
    ctaButton: 'ДІЗНАТИСЯ ПРО ПРОЦЕДУРИ',
    aboutLabel: 'ПРО МЕНЕ',
    aboutTitle: 'Лікар естетичної медицини та жіночого здоров\'я',
    aboutText1: 'Як ліцензований гінеколог, я поєдную медичні знання з тонким відчуттям природної естетики. Моя мета — підкреслити вашу індивідуальну красу, а не змінити її.',
    aboutText2: 'Кожна процедура починається з детальної консультації, щоб зрозуміти ваші побажання та скласти індивідуальний план лікування. Я використовую виключно сертифіковані CE продукти, схвалені в ЄС.',
    aboutBadge1: 'Ліцензований гінеколог',
    aboutBadge2: 'Чотири мови: німецька, українська, англійська, російська',
    aboutBadge3: 'Індивідуальна консультація',
    aboutBadge4: 'Підтримка охорони природи',
    aboutBadge5: 'Природний результат',
    treatmentsLabel: 'ПОСЛУГИ ТА ЦІНИ',
    treatmentsTitle: 'Процедури',
    categoryPakete: 'Пакети ботоксу',
    categoryEinzel: 'Ботокс 1 зона',
    categorySkinbooster: 'Скінбустери',
    categoryPolynukleotide: 'Полінуклеотиди',
    treatmentNote1: 'Безкоштовна корекція через 14 днів (за потреби)',
    treatmentNote2: 'Усі продукти сертифіковані CE та схвалені в ЄС',
    contactLabel: 'КОНТАКТ',
    contactTitle: 'Записатися на прийом',
    contactText: 'Буду рада вашому зверненню.',
    contactInstagram: 'Напишіть мені в Instagram',
    contactForm: 'Або залиште заявку тут',
    location: 'Мюнхен',
    footerTitle: 'АННА ГРИЩЕНКО',
    footerSubtitle: 'Естетична медицина · Мюнхен',
    footerCopyright: '© 2026 Анна Грищенко · Усі права захищені',
    impressum: 'Імпресум',
    datenschutz: 'Політика конфіденційності',
    paketeTitle: 'Пакети процедур',
    einzelTitle: 'Окремі процедури',
    skinboosterTitle: 'Скінбустери',
    skinboosterSubtitle: 'Інтенсивне зволоження та покращення якості шкіри',
    polynukleotideTitle: 'Полінуклеотиди',
    polynukleotideSubtitle: 'Довготривала регенерація шкіри та біостимуляція',
  },
  en: {
    langName: 'EN',
    flag: '🇬🇧',
    heroSubtitle: 'AESTHETIC MEDICINE IN MUNICH',
    heroName: 'ANNA HRYSHCHENKO',
    heroText: 'Natural beauty through medical expertise.',
    heroTagline: 'Individual. Professional. Discreet.',
    ctaButton: 'DISCOVER TREATMENTS',
    aboutLabel: 'ABOUT ME',
    aboutTitle: 'Physician for Aesthetics and Women\'s Health',
    aboutText1: 'As a licensed gynecologist, I combine medical expertise with a keen sense for natural aesthetics. My goal is to enhance your individual beauty – not to change it.',
    aboutText2: 'Every treatment begins with a thorough consultation to understand your wishes and create a customized treatment plan. I exclusively use CE-certified products approved in the EU.',
    aboutBadge1: 'Licensed Gynecologist',
    aboutBadge2: 'Multilingual: German, Ukrainian, English, Russian',
    aboutBadge3: 'Individual Consultation',
    aboutBadge4: 'Commitment to Nature Conservation',
    aboutBadge5: 'Natural Results',
    treatmentsLabel: 'SERVICES & PRICES',
    treatmentsTitle: 'Treatments',
    categoryPakete: 'Botox Packages',
    categoryEinzel: 'Botox 1 Zone',
    categorySkinbooster: 'Skinbooster',
    categoryPolynukleotide: 'Polynucleotides',
    treatmentNote1: 'Free touch-up after 14 days (if needed)',
    treatmentNote2: 'All products are CE-certified and approved in the EU',
    contactLabel: 'CONTACT',
    contactTitle: 'Book Your Appointment',
    contactText: 'I look forward to hearing from you.',
    contactInstagram: 'Message me on Instagram',
    contactForm: 'Or inquire here',
    location: 'Munich',
    footerTitle: 'ANNA HRYSHCHENKO',
    footerSubtitle: 'Aesthetic Medicine · Munich',
    footerCopyright: '© 2026 Anna Hryshchenko · All rights reserved',
    impressum: 'Legal Notice',
    datenschutz: 'Privacy Policy',
    paketeTitle: 'Treatment Packages',
    einzelTitle: 'Single Treatments',
    skinboosterTitle: 'Skinbooster',
    skinboosterSubtitle: 'Intensive hydration and skin quality improvement',
    polynukleotideTitle: 'Polynucleotides',
    polynukleotideSubtitle: 'Long-term skin regeneration & biostimulation',
  },
  ru: {
    langName: 'RU',
    flag: '🇷🇺',
    heroSubtitle: 'ЭСТЕТИЧЕСКАЯ МЕДИЦИНА В МЮНХЕНЕ',
    heroName: 'АННА ГРИЩЕНКО',
    heroText: 'Естественная красота благодаря медицинской экспертизе.',
    heroTagline: 'Индивидуально. Профессионально. Конфиденциально.',
    ctaButton: 'УЗНАТЬ О ПРОЦЕДУРАХ',
    aboutLabel: 'ОБО МНЕ',
    aboutTitle: 'Врач эстетической медицины и женского здоровья',
    aboutText1: 'Как лицензированный гинеколог, я сочетаю медицинские знания с тонким чувством естественной эстетики. Моя цель — подчеркнуть вашу индивидуальную красоту, а не изменить её.',
    aboutText2: 'Каждая процедура начинается с подробной консультации, чтобы понять ваши пожелания и составить индивидуальный план лечения. Я использую исключительно сертифицированные CE продукты, одобренные в ЕС.',
    aboutBadge1: 'Лицензированный гинеколог',
    aboutBadge2: 'Четыре языка: немецкий, украинский, английский, русский',
    aboutBadge3: 'Индивидуальная консультация',
    aboutBadge4: 'Поддержка охраны природы',
    aboutBadge5: 'Естественный результат',
    treatmentsLabel: 'УСЛУГИ И ЦЕНЫ',
    treatmentsTitle: 'Процедуры',
    categoryPakete: 'Пакеты ботокса',
    categoryEinzel: 'Ботокс 1 зона',
    categorySkinbooster: 'Скинбустеры',
    categoryPolynukleotide: 'Полинуклеотиды',
    treatmentNote1: 'Бесплатная коррекция через 14 дней (при необходимости)',
    treatmentNote2: 'Все продукты сертифицированы CE и одобрены в ЕС',
    contactLabel: 'КОНТАКТ',
    contactTitle: 'Записаться на приём',
    contactText: 'Буду рада вашему обращению.',
    contactInstagram: 'Напишите мне в Instagram',
    contactForm: 'Или оставьте заявку здесь',
    location: 'Мюнхен',
    footerTitle: 'АННА ГРИЩЕНКО',
    footerSubtitle: 'Эстетическая медицина · Мюнхен',
    footerCopyright: '© 2026 Анна Грищенко · Все права защищены',
    impressum: 'Импрессум',
    datenschutz: 'Политика конфиденциальности',
    paketeTitle: 'Пакеты процедур',
    einzelTitle: 'Отдельные процедуры',
    skinboosterTitle: 'Скинбустеры',
    skinboosterSubtitle: 'Интенсивное увлажнение и улучшение качества кожи',
    polynukleotideTitle: 'Полинуклеотиды',
    polynukleotideSubtitle: 'Долгосрочная регенерация кожи и биостимуляция',
  },
};

const treatmentsData = {
  pakete: [
    { name: { de: 'Zornesfalte + Stirn', en: 'Frown Lines + Forehead', ru: 'Межбровье + Лоб', uk: 'Міжбрів\'я + Лоб' }, price: 'Ab 300 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Zornesfalte + Stirn + Krähenfüße', en: 'Frown Lines + Forehead + Crow\'s Feet', ru: 'Межбровье + Лоб + Гусиные лапки', uk: 'Міжбрів\'я + Лоб + Гусячі лапки' }, price: 'Ab 350 €', desc: { de: 'Oberes Gesicht – 3 Zonen', en: 'Upper face – 3 zones', ru: 'Верхняя часть лица – 3 зоны', uk: 'Верхня частина обличчя – 3 зони' } },
    { name: { de: 'Full Face', en: 'Full Face', ru: 'Всё лицо', uk: 'Усе обличчя' }, price: 'Ab 550 €', desc: { de: 'Obere und untere Gesichtszonen, individuell angepasst', en: 'Upper and lower face zones, individually adjusted', ru: 'Верхняя и нижняя зоны лица, индивидуально', uk: 'Верхня і нижня зони обличчя, індивідуально' } },
    { name: { de: 'Full Face + Hals', en: 'Full Face + Neck', ru: 'Всё лицо + Шея', uk: 'Усе обличчя + Шия' }, price: 'Ab 750 €', desc: { de: 'Inkl. Platysma/Nefertiti Lift', en: 'Incl. Platysma/Nefertiti Lift', ru: 'Вкл. Платизма/Нефертити Лифт', uk: 'Вкл. Платизма/Нефертіті Ліфт' } },
  ],
  einzel: [
    { name: { de: 'Zornesfalte', en: 'Frown Lines', ru: 'Межбровье', uk: 'Міжбрів\'я' }, price: 'Ab 200 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Stirn', en: 'Forehead', ru: 'Лоб', uk: 'Лоб' }, price: 'Ab 200 €', desc: { de: 'In Kombination mit Zornesfalte', en: 'Combined with frown lines', ru: 'В сочетании с межбровьем', uk: 'У поєднанні з міжбрів\'ям' } },
    { name: { de: 'Krähenfüße', en: 'Crow\'s Feet', ru: 'Гусиные лапки', uk: 'Гусячі лапки' }, price: 'Ab 200 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Kinnfalten', en: 'Chin Lines', ru: 'Морщины подбородка', uk: 'Зморшки підборіддя' }, price: 'Ab 150 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Nasenfalten', en: 'Bunny Lines', ru: 'Морщины носа', uk: 'Зморшки носа' }, price: 'Ab 150 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Lip Flip', en: 'Lip Flip', ru: 'Лип Флип', uk: 'Ліп Фліп' }, price: 'Ab 150 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Brow Lift', en: 'Brow Lift', ru: 'Лифтинг бровей', uk: 'Ліфтинг брів' }, price: 'Ab 150 €', desc: { de: '', en: '', ru: '', uk: '' } },
    { name: { de: 'Hyperhidrose', en: 'Hyperhidrosis', ru: 'Гипергидроз', uk: 'Гіпергідроз' }, price: 'Ab 150 €', desc: { de: '', en: '', ru: '', uk: '' } },
  ],
  skinbooster: [
    { name: { de: 'Gesicht', en: 'Face', ru: 'Лицо', uk: 'Обличчя' }, price: 'Ab 250 €', desc: { de: 'Intensive Hydration', en: 'Intensive hydration', ru: 'Интенсивное увлажнение', uk: 'Інтенсивне зволоження' } },
    { name: { de: 'Augenbereich', en: 'Eye Area', ru: 'Область глаз', uk: 'Область очей' }, price: 'Ab 200 €', desc: { de: 'Feuchtigkeit und feine Linien', en: 'Moisture and fine lines', ru: 'Увлажнение и мелкие морщины', uk: 'Зволоження і дрібні зморшки' } },
    { name: { de: 'Hals + Dekolleté', en: 'Neck + Décolleté', ru: 'Шея + Декольте', uk: 'Шия + Декольте' }, price: 'Ab 270 €', desc: { de: 'Verbesserung der Hautstruktur', en: 'Skin texture improvement', ru: 'Улучшение текстуры кожи', uk: 'Покращення текстури шкіри' } },
    { name: { de: 'Gesicht + Hals', en: 'Face + Neck', ru: 'Лицо + Шея', uk: 'Обличчя + Шия' }, price: 'Ab 400 €', desc: { de: 'Kombinierte Hautverjüngung', en: 'Combined skin rejuvenation', ru: 'Комбинированное омоложение', uk: 'Комбіноване омолодження' } },
  ],
  polynukleotide: [
    { name: { de: 'Gesicht', en: 'Face', ru: 'Лицо', uk: 'Обличчя' }, price: 'Ab 380 €', desc: { de: 'Hautstruktur und Hautqualität', en: 'Skin structure and quality', ru: 'Структура и качество кожи', uk: 'Структура і якість шкіри' } },
    { name: { de: 'Augenbereich', en: 'Eye Area', ru: 'Область глаз', uk: 'Область очей' }, price: 'Ab 280 €', desc: { de: 'Reduktion feiner Linien', en: 'Fine line reduction', ru: 'Уменьшение мелких морщин', uk: 'Зменшення дрібних зморшок' } },
    { name: { de: 'Hals + Dekolleté', en: 'Neck + Décolleté', ru: 'Шея + Декольте', uk: 'Шия + Декольте' }, price: 'Ab 350 €', desc: { de: 'Hautfestigkeit und Struktur', en: 'Skin firmness and structure', ru: 'Упругость и структура кожи', uk: 'Пружність і структура шкіри' } },
    { name: { de: 'Gesicht + Hals', en: 'Face + Neck', ru: 'Лицо + Шея', uk: 'Обличчя + Шия' }, price: 'Ab 600 €', desc: { de: 'Kombinierte Hautregeneration', en: 'Combined skin regeneration', ru: 'Комбинированная регенерация', uk: 'Комбінована регенерація' } },
  ],
};

const langOrder = ['de', 'uk', 'en', 'ru'];

export default function Home() {
  const [lang, setLang] = useState('de');
  const [activeCategory, setActiveCategory] = useState('pakete');
  const t = translations[lang];

  const fontHeading = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const fontBody = "var(--font-montserrat), 'Montserrat', sans-serif";

  const images = {
    hero: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8008_lfquxs.jpg',
    portrait: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896920/IMG_8181_aooegy.jpg',
    treatment1: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8121_lt1ocu.jpg',
    treatment2: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8196_k6rxqr.jpg',
    treatment3: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896918/IMG_8157_hhdz2p.jpg',
    treatment4: 'https://res.cloudinary.com/drkele6gg/image/upload/v1774896950/IMG_8234_xkrodh.jpg',
  };

  const getTreatmentTitle = (category) => {
    const titles = { pakete: t.paketeTitle, einzel: t.einzelTitle, skinbooster: t.skinboosterTitle, polynukleotide: t.polynukleotideTitle };
    return titles[category];
  };

  const getTreatmentSubtitle = (category) => {
    if (category === 'skinbooster') return t.skinboosterSubtitle;
    if (category === 'polynukleotide') return t.polynukleotideSubtitle;
    return null;
  };

  return (
    <div style={{ fontFamily: fontBody, color: '#5a4a3a' }}>
      
      {/* Language Switcher */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '6px',
        background: 'rgba(255,255,255,0.95)',
        padding: '8px 12px',
        borderRadius: '25px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}>
        {langOrder.map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: '6px 10px',
              border: 'none',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: fontBody,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: lang === l ? 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)' : 'transparent',
              color: lang === l ? 'white' : '#8b7355',
            }}
          >
            <span style={{ fontSize: '14px' }}>{translations[l].flag}</span>
            {translations[l].langName}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(253,246,240,0.85) 0%, rgba(250,232,224,0.8) 50%, rgba(245,220,208,0.85) 100%)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fontBody, fontSize: '13px', letterSpacing: '4px', color: '#b8927a', marginBottom: '20px', fontWeight: '400' }}>
            {t.heroSubtitle}
          </div>
          <h1 style={{ fontFamily: fontHeading, fontSize: 'clamp(40px, 9vw, 72px)', fontWeight: '400', margin: '0 0 10px 0', letterSpacing: '2px', color: '#5a4a3a' }}>
            {t.heroName}
          </h1>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #c9a087, transparent)', margin: '25px 0' }} />
          <p style={{ fontFamily: fontHeading, fontSize: '22px', fontWeight: '400', fontStyle: 'italic', color: '#5a4a3a', maxWidth: '500px', lineHeight: '1.6', marginBottom: '10px', textAlign: 'center' }}>
            {t.heroText}
          </p>
          <p style={{ fontFamily: fontBody, fontSize: '14px', fontWeight: '400', color: '#8b7355', letterSpacing: '3px', marginBottom: '40px' }}>
            {t.heroTagline}
          </p>
          <a href="#behandlungen" style={{
            fontFamily: fontBody,
            background: 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)',
            color: 'white',
            padding: '16px 40px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '12px',
            letterSpacing: '2px',
            fontWeight: '500',
            boxShadow: '0 10px 30px rgba(185, 146, 122, 0.3)',
            display: 'inline-block',
          }}>
            {t.ctaButton}
          </a>
        </div>
        <div style={{ position: 'absolute', bottom: '40px', fontFamily: fontBody, fontSize: '12px', color: '#b8927a', letterSpacing: '2px', zIndex: 2 }}>
          @dr.hryshchenko.de
        </div>
      </section>

      {/* Über mich Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
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
              <img src={images.portrait} alt={t.heroName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ fontFamily: fontBody, fontSize: '11px', letterSpacing: '3px', color: '#c9a087', marginBottom: '15px', fontWeight: '500' }}>{t.aboutLabel}</div>
            <h2 style={{ fontFamily: fontHeading, fontSize: '36px', fontWeight: '400', margin: '0 0 20px 0', color: '#5a4a3a' }}>{t.aboutTitle}</h2>
            <div style={{ width: '40px', height: '1px', background: '#c9a087', marginBottom: '25px' }} />
            <p style={{ fontFamily: fontBody, fontSize: '15px', lineHeight: '1.9', color: '#6a5a4a', marginBottom: '20px', fontWeight: '400' }}>{t.aboutText1}</p>
            <p style={{ fontFamily: fontBody, fontSize: '15px', lineHeight: '1.9', color: '#6a5a4a', fontWeight: '400' }}>{t.aboutText2}</p>
            <div style={{ marginTop: '30px', padding: '20px', background: '#fdf6f0', borderRadius: '12px' }}>
              <div style={{ fontFamily: fontBody, fontSize: '13px', color: '#b8927a', letterSpacing: '0.5px', lineHeight: '2', fontWeight: '500' }}>
                ✓ {t.aboutBadge1}<br />
                ✓ {t.aboutBadge2}<br />
                ✓ {t.aboutBadge3}<br />
                ✓ {t.aboutBadge4}<br />
                ✓ {t.aboutBadge5}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section style={{ display: 'flex', overflow: 'hidden', height: '250px' }}>
        {[images.treatment1, images.treatment2, images.treatment3, images.treatment4].map((img, idx) => (
          <div key={idx} style={{ flex: 1, minWidth: '200px', position: 'relative', overflow: 'hidden' }}>
            <img src={img} alt={`Treatment ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(transparent, rgba(90,74,58,0.7))' }} />
          </div>
        ))}
      </section>

      {/* Behandlungen Section */}
      <section id="behandlungen" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #fdf6f0 0%, #fae8e0 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ fontFamily: fontBody, fontSize: '11px', letterSpacing: '3px', color: '#c9a087', marginBottom: '15px', fontWeight: '500' }}>{t.treatmentsLabel}</div>
            <h2 style={{ fontFamily: fontHeading, fontSize: '36px', fontWeight: '400', margin: 0, color: '#5a4a3a' }}>{t.treatmentsTitle}</h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {[
              { key: 'pakete', label: t.categoryPakete },
              { key: 'einzel', label: t.categoryEinzel },
              { key: 'skinbooster', label: t.categorySkinbooster },
              { key: 'polynukleotide', label: t.categoryPolynukleotide },
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  fontFamily: fontBody,
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  background: activeCategory === cat.key ? 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)' : 'white',
                  color: activeCategory === cat.key ? 'white' : '#8b7355',
                  boxShadow: activeCategory === cat.key ? '0 8px 25px rgba(185, 146, 122, 0.3)' : '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 15px 50px rgba(180, 130, 110, 0.1)' }}>
            <h3 style={{ fontFamily: fontHeading, fontSize: '26px', fontWeight: '400', color: '#5a4a3a', marginTop: 0, marginBottom: '10px', textAlign: 'center' }}>
              {getTreatmentTitle(activeCategory)}
            </h3>
            {getTreatmentSubtitle(activeCategory) && (
              <p style={{ fontFamily: fontBody, textAlign: 'center', color: '#b8927a', fontSize: '13px', marginBottom: '30px', fontWeight: '400' }}>
                {getTreatmentSubtitle(activeCategory)}
              </p>
            )}
            
            <div style={{ marginTop: '20px' }}>
              {treatmentsData[activeCategory].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '20px 0',
                  borderBottom: idx < treatmentsData[activeCategory].length - 1 ? '1px solid #f0e8e0' : 'none',
                }}>
                  <div>
                    <div style={{ fontFamily: fontBody, fontSize: '15px', fontWeight: '500', color: '#5a4a3a', marginBottom: item.desc[lang] ? '6px' : 0 }}>
                      {item.name[lang]}
                    </div>
                    {item.desc[lang] && <div style={{ fontFamily: fontBody, fontSize: '13px', color: '#a89080', fontWeight: '400' }}>{item.desc[lang]}</div>}
                  </div>
                  <div style={{ fontFamily: fontBody, fontSize: '15px', fontWeight: '600', color: '#b8927a', whiteSpace: 'nowrap', marginLeft: '20px' }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '30px', padding: '20px', background: '#fdf6f0', borderRadius: '12px', fontFamily: fontBody, fontSize: '13px', color: '#8b7355', lineHeight: '1.7', fontWeight: '400' }}>
              ✓ {t.treatmentNote1}<br />
              ✓ {t.treatmentNote2}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section style={{ padding: '80px 20px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: fontBody, fontSize: '11px', letterSpacing: '3px', color: '#c9a087', marginBottom: '15px', fontWeight: '500' }}>{t.contactLabel}</div>
          <h2 style={{ fontFamily: fontHeading, fontSize: '36px', fontWeight: '400', margin: '0 0 30px 0', color: '#5a4a3a' }}>{t.contactTitle}</h2>
          <p style={{ fontFamily: fontBody, fontSize: '15px', color: '#8b7355', marginBottom: '40px', lineHeight: '1.8', fontWeight: '400' }}>{t.contactText}</p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
            <a href="https://instagram.com/dr.hryshchenko.de" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: fontBody,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: 'linear-gradient(135deg, #c9a087 0%, #b8927a 100%)',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow: '0 10px 30px rgba(185, 146, 122, 0.3)',
            }}>
              <span style={{ fontSize: '20px' }}>📸</span>
              {t.contactInstagram}
            </a>
            <a href="https://ah-aesthetic-form.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: fontBody,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px',
              background: '#fdf6f0',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#5a4a3a',
              fontSize: '15px',
              fontWeight: '500',
              border: '2px solid #e8ddd5',
            }}>
              <span style={{ fontSize: '20px' }}>📋</span>
              {t.contactForm}
            </a>
          </div>

          <div style={{
            fontFamily: fontBody,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '16px',
            color: '#8b7355',
            fontSize: '14px',
            fontWeight: '500',
          }}>
            <span style={{ fontSize: '18px' }}>📍</span>
            {t.location}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #6a5a4a 0%, #5a4a3a 100%)',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
      }}>
        <div style={{ fontFamily: fontHeading, marginBottom: '15px', letterSpacing: '2px', color: 'white', fontSize: '20px' }}>{t.footerTitle}</div>
        <div style={{ fontFamily: fontBody, marginBottom: '20px', fontSize: '13px', fontWeight: '400' }}>{t.footerSubtitle}</div>
        <div style={{ fontFamily: fontBody, fontSize: '12px', opacity: 0.6, fontWeight: '400' }}>{t.footerCopyright}</div>
        <div style={{ fontFamily: fontBody, marginTop: '15px', fontSize: '12px', fontWeight: '400' }}>
          <a href={`/impressum?lang=${lang}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginRight: '20px' }}>{t.impressum}</a>
          <a href={`/datenschutz?lang=${lang}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.datenschutz}</a>
        </div>
      </footer>
    </div>
  );
}
