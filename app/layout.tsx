import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin', 'hebrew'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'עסקים ובעלי מקצוע מומלצים - בזק B144',
  description: 'חפשו עסקים או בעלי מקצוע מומלצים באזור שלכם באינדקס המתקדם בזק 144 עסקים. כל הכתובות, מספרי טלפון, אנשים, מפות ואיתור מיקוד במרחק לחיצה. היכנסו עכשיו',
  keywords: ['חיפוש', 'עסקים', 'אנשים', 'אינדקס', 'שירותים', 'מקומי'],
  openGraph: {
    title: 'חיפוש עסקים ואנשים',
    description: 'מערכת חכמה למציאת עסקים ואנשים לפי קטגוריות ומיקומים.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${openSans.variable} font-sans bg-white text-black antialiased`}>
        
          {children}
      </body>
    </html>
  );
}