import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Anna Hryshchenko | Ästhetische Medizin München',
  description: 'Ästhetische Behandlungen in München – Botulinumtoxin, Skinbooster, Polynukleotide. Natürliche Schönheit durch medizinische Expertise.',
  keywords: 'Ästhetische Medizin, München, Botox, Skinbooster, Polynukleotide, Faltenbehandlung, Anna Hryshchenko',
  openGraph: {
    title: 'Anna Hryshchenko | Ästhetische Medizin München',
    description: 'Natürliche Schönheit durch medizinische Expertise. Individuell. Professionell. Diskret.',
    url: 'https://ah-aesthetics.de',
    siteName: 'ah-aesthetics',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
