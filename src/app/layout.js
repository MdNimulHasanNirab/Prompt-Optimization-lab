import "./globals.css";

export const metadata = {
  title: "Prompt Optimization Lab",
  description: "AI Prompt Developer Showcase Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}