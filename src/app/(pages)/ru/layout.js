import Menu from "@/app/lib/components/menu/menu";
import "./home-ru.css";

export const metadata = {
    title: "title",
    description: "description",
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