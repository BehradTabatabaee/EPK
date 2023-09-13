"use client";
import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";
export default function NavBar() {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
}
