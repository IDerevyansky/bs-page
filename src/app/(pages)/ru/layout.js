import "./home-ru.css";


export const metadata = {
    title: "title",
    description: "description",
  };
  
  export default function RootLayout({ children }) {
  
    return (
      <html lang="ru">
        <body>
            
            <div className="menu-box">

                <div className="menu">
                    <div>logo</div>
                    <div className="menu-itmems">
                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                    </div>
                </div> 

            </div> 

          {children}
        </body>
      </html>
    );
  }