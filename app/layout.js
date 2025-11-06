import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <title>Andrew Lo</title>
      </header>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
