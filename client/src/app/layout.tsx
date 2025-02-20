import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import Animation from '@components/Background/Animation';
import Background from '@components/Background/Background';
import Footer from '@components/Footer/Footer';
import OpenHouseNavbar from '@components/Navbar/Navbar';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Open House PUCMM',
	description:
		'Open House PUCMM, es un evento que se realiza anualmente en la Pontificia Universidad Católica Madre y Maestra, en el cual se presentan las carreras que se imparten en la universidad.',
};

interface RootLayoutProps {
	readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es" className="light">
			<body className={` antialiased ${onest.className}`}>
				<Background />
				<Animation />
				<OpenHouseNavbar />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	);
}
