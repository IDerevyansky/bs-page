import { Ramaraja } from "next/font/google";
import "./globals.css";

const ramaraja = Ramaraja({ 
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "Natalia Derevianskaia",
  description: "Natalia Derevianskaia - Kinesiologist tel:+1 818 298 74 26",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={ramaraja.className}>
        {children}
      </body>
    </html>
  );
}