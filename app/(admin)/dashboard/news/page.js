import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Blog() {
	return (
		<>
			<section className="container py-16 lg:py-8 overflow-y-scroll">
				<Link href={"/dashboard/news/create"}>
					<Button className="my-2 font-sans">اضافه کردن مقاله جدید</Button>
				</Link>
				{/* data table for news */}
			</section>
		</>
	);
}
