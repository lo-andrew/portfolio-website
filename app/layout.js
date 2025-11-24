import "./globals.css";
import DarkVeil from './components/DarkVeil';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Andrew Lo</title>

      <body>
        <DarkVeil />
        {children}
      </body>
    </html>
  );
}
