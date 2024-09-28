import "./globals.css";



export const metadata = {
  title: "Natalia Derevianskaia",
  description: "Natalia Derevianskaia - Kinesiologist tel:+1 818 298 74 26",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}