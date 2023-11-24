"use client";
import { useRouter } from "next/navigation";
import MobileSheet from "@/components/adminDashboard/navbar/MobileSheet";
import { signOut } from "next-auth/react";
export default function PhoneDropDown({ session, data }) {
	const router = useRouter();
	return (
		<>
			<div className="flex lg:hidden">
				<div className="relative">
					<MobileSheet session={session} />
				</div>
				<div className="absolute left-0 mt-4 ml-3">
					<button
						className="w-20 h-10 rounded-md hover:hover:bg-red-400 transition-all border-2 bg-opacity-60 border-red-400 bg-white font-vazir"
						onClick={() => {
							signOut({ redirect: false }).then(() => {
								router.push("/"); // Redirect to the home page after signing out
							});
						}}
					>
						خروج
					</button>
				</div>
			</div>
		</>
	);
}
