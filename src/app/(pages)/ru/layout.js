import Menu from "@/app/lib/components/menu/menu";
import "./home-ru.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: "Natalia Derevianskaia",
    description: "Natalia Derevianskaia - Kinesiologist tel:+1 818 298 74 26",
  };


  export default function RuLayout({ children }) {
  
    return (
      <html lang="ru">
        <body>
            <Analytics/>
            <Menu/>
            {children}
        </body>
      </html>
    );
  }