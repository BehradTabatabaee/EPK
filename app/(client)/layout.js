// import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "EPK",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" dir="rtl">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
