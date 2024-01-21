
import { Roboto } from 'next/font/google'

import 'style/css/lib/animate/animate.min.css'
import 'style/css/lib/animate/animate.css'
import 'style/css/bootstrap.min.css'
import 'style/css/style.css'
import Header from './components/Header/Header'
// import 'style/scss/style.scss';
import  Link from 'next/link'
// Import the Header and Footer components;
// import Header from './components/Header/Header'

// import Footer from '';
import Footer from './components/Footer/Footer'

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
  });

export const metadata = {
  title: 'فلل تمليك الطائف',
  description: 'عقار محمد الاصير تمليك ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" >
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Teko:wght@400;500;600&display=swap" rel="stylesheet"/>

           <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          /> 
           <script src="https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.min.js"></script>
           <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    
      <body className={'${inter.className} bg-white'}>
        

    
      <Header/> 


        {children}</body>
  {/* Include the Footer component */}
  <Footer />
    </html>
    
  )
}
