import "./globals.css";

export const metadata = {
  title: "Omar Ali | Freelancer Portfolio",
  description: "Professional freelancer portfolio and service request website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
