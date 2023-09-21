import { getServerSession } from "next-auth";
import DesktopDropDown from "./DesktopDropDown";
import PhoneDropDown from "./PhoneDropDown";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function Navbar() {
	const comment = await prisma.comment.findMany({ where: { is_seen: false } });
	const coop = await prisma.cooperation_request.findMany({
		where: { is_seen: false },
	});
	const session = await getServerSession(authOptions);
	return (
		<>
			<DesktopDropDown
				session={session}
				data={{ commentCount: comment.length, coopCount: coop.length }}
			/>
			<PhoneDropDown
				session={session}
				data={{ commentCount: comment.length, coopCount: coop.length }}
			/>
		</>
	);
}
