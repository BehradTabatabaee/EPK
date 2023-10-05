import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/prisma/client";
import Link from "next/link";
export default async function media() {
	const data = await getData();
	return (
		<div className="container py-16 lg:py-8 overflow-y-scroll">
			<Link href={"/dashboard/media/create"}>
				<Button className="my-2 font-sans">
					اضافه کردن تصویر و ویدیو جدید
				</Button>
			</Link>
			<DataTable columns={columns} data={data} />
		</div>
	);
}

async function getData() {
	const MediaData = await db.media.findMany({
		orderBy: { id: "asc" },
	});

	return MediaData;
}
