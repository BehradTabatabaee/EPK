"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const columns = [
	{
		accessorKey: "id",
		header: "شناسه",
	},
	{
		accessorKey: "title",
		header: "عنوان",
	},
	{
		id: "show",
		cell: ({ row }) => {
			const news = row.original;
			return (
				<Dialog>
					<DialogTrigger asChild>
						<Button>نمایش</Button>
					</DialogTrigger>
					<DialogContent className="flex justify-center items-center">
						<img src={`../${news.image}`} alt="news_img" />
					</DialogContent>
				</Dialog>
			);
		},
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const news = row.original;

			return (
				<Button variant="destructive" onClick={() => deleteNews(news.id)}>
					حذف
				</Button>
			);
		},
	},
];

async function deleteNews(id) {
	const response = await fetch(`/api/news/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	window.location.reload();
}
