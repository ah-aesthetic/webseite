import { Cormorant_Garamond, Montserrat } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Anna Hryshchenko | Ästhetische Medizin München',
  description: 'Ästhetische Medizin in München - Botox, Skinbooster, Polynukleotide. Natürliche Schönheit durch medizinische Expertise. Individuell. Professionell. Diskret.',
  keywords: 'Ästhetische Medizin, München, Botox, Skinbooster, Polynukleotide, Anna Hryshchenko, Faltenbehandlung',
  openGraph: {
    title: 'Anna Hryshchenko | Ästhetische Medizin München',
    description: 'Natürliche Schönheit durch medizinische Expertise.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
