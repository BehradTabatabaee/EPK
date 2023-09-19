import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/adminDashboard/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "EPK | Admin Panel",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" dir="rtl">
			<body className={inter.className}>
				<Navbar />
				<div className=" flex justify-center">{children}</div>
			</body>
		</html>
	);
}
