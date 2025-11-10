import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Andrew Lo</title>

      <body>{children}</body>
    </html>
  );
}
