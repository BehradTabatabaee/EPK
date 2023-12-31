import { getServerSession } from "next-auth";
import DesktopDropDown from "./DesktopDropDown";
import PhoneDropDown from "./PhoneDropDown";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
export default async function Navbar() {
	const comment = await db.comment.findMany({ where: { is_seen: false } });
	const session = await getServerSession(authOptions);
	return (
		<>
			<DesktopDropDown
				session={session}
				data={{ commentCount: comment.length }}
			/>
			<PhoneDropDown
				session={session}
				data={{ commentCount: comment.length }}
			/>
		</>
	);
}
