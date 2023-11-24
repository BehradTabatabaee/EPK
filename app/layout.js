import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Ghasem = localFont({
	src: "../public/assets/fonts/AGhasem.ttf",
	variable: "--font-ghasem",
});
const Vazir = localFont({
	src: "../public/assets/fonts/Vazir-Light-FD.ttf",
	variable: "--font-vazir",
});
const Delius = localFont({
	src: "../public/assets/fonts/Delius-Regular.ttf",
	variable: "--font-delius",
});
const Sans = localFont({
	src: "../public/assets/fonts/Sans a4fran3.ttf",
	variable: "--font-sans",
});
export const metadata = {
	title: "EPK",
	description: "a site",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${Ghasem.variable} ${Vazir.variable} ${Sans.variable} ${Delius.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
