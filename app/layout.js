import PageTemplate from '../components/pagetemplate/PageTemplte'
import './globals.css'


export const metadata = {
  title: 'Umihogar',
  description: 'Umihogar store',
  icons: {
    icon: [
      '/favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png?v=4'
    ]
  }
}
 
export default function RootLayout({ children }) {
  return (
    <html className='h-full w-full' lang="en">
     
      <body className='h-full w-full'>
        <PageTemplate>
          {children}
        </PageTemplate>
      </body>
    </html>
  )
}