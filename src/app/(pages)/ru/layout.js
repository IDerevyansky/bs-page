import "./home-ru.css";


export const metadata = {
    title: "title",
    description: "description",
  };
  
  export default function RootLayout({ children }) {
  
    return (
      <html lang="en">
        <body className="test">
          {children}
        </body>
      </html>
    );
  }