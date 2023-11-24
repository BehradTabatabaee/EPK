import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./columns";
export default async function Blog() {
	const data = await getData();
	return (
		<>
			<section className="container py-16 lg:py-8 overflow-y-scroll">
				<Link href={"/dashboard/news/create"}>
					<Button className="my-2 font-sans">اضافه کردن خبر جدید</Button>
				</Link>
				<DataTable columns={columns} data={data}/>
			</section>
		</>
	);
}
async function getData() {
	const NewsData = await db.news.findMany({
		orderBy: { id: "asc" },
	});

	return NewsData;
}
