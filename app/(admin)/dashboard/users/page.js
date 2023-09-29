import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/prisma/client";
import Link from "next/link";
export default async function users() {
	const data = await getData();
	return (
		<section className="container py-16 lg:py-8 overflow-y-scroll">
			<Link href={"/dashboard/users/create"}>
				<Button className="my-2">اضافه کردن کاربر جدید</Button>
			</Link>
			<DataTable columns={columns} data={data} />
		</section>
	);
}

async function getData() {
	const usersData = await db.user.findMany({
		orderBy: { id: "asc" },
	});

	return usersData;
}
