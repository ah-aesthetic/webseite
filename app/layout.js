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
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
