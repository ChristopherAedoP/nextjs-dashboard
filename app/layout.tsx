import { firacode } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firacode.className} antialiased`}>{children}</body>
    </html>
  );
}
