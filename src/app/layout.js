import "./globals.css";

export const metadata = {
  title: "Natalia Derevianskaia",
  description: "Natalia Derevianskaia - Kinesiologist tel:+1 818 298 74 26",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ru">

      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#484E45" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>


      <body>
        {children}
      </body>
    </html>
  );
}