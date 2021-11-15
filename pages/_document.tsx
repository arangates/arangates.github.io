import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/static/images/favicon.ico" rel="shortcut icon" />
        <link href="/static/images/site.webmanifest" rel="manifest" />
        <meta name="msapplication-TileColor" content="#52edf1" />
        <meta name="theme-color" content="#52edf1" />

        <link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <link
          color="#4a9885"
          href="/static/images/mask.png"
          rel="mask-icon"
        />
        <meta name="msapplication-TileImage" content="/static/images/ms-icon-144x144.png" />
        <meta
          content="/static/images/browserconfig.xml"
          name="msapplication-config"
        />
        <meta name="yandex-verification" content="dd3e8ab7d29318a9" />
        <meta name="google-site-verification" content="6GA0zZnk-lp9g9jAePyZvjrV_6yx1EfbzqS2HmzEsjw" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
