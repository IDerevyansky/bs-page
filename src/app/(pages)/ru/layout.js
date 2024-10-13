import Menu from "@/app/lib/components/menu/menu";
import "./home-ru.css";

export const metadata = {
    title: "Natalia Derevianskaia",
    description: "Natalia Derevianskaia - Kinesiologist tel:+1 818 298 74 26",
  };


  export default function RuLayout({ children }) {
  
    return (
      <html lang="ru">
        <body>
            <Menu/>
            {children}
        </body>
      </html>
    );
  }