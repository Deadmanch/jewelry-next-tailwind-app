import '@/styles/globals.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-sans'
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${dmSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
