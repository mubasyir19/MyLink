import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Mahdy Mubasyir Link' />
        <meta property='og:title' content='Link Management' />
        <meta property='og:description' content='Mahdy Mubasyir Portfolio' />
        <meta property='og:image' content='https://ibb.co/wJLJ553' />
        <meta property='og:url' content='https://link-my.vercel.app/' />
        {/* Tab Icon */}
        <link rel='icon' href='/logo.png' type='image/x-icon' />
        {/* Google Font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
