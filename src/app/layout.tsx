import localFont from 'next/font/local'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css"
import Header from '@/Components/Header';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight : "100 900",
  variable: "--font-alpino"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
     
      <body className='overflow-x-hidden bg-yellow-300w
          min-w-fit
      '> 
         <Header/>
      <main>  
      {children}  
      </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
