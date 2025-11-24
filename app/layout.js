import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Andrew Lo</title>
      </head>
      <body className=" bg-[#262626] text-white">{children}</body>
    </html>
  );
}
