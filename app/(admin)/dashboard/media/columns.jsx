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
			const media = row.original;
			return (
				<Dialog>
					<DialogTrigger asChild>
						<Button>نمایش</Button>
					</DialogTrigger>
					<DialogContent className="flex justify-center items-center">
						<img src={`../${media.image}`} alt="media_img" />
					</DialogContent>
				</Dialog>
			);
		},
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const media = row.original;

			return (
				<Button variant="destructive" onClick={() => deleteMedia(media.id)}>
					حذف
				</Button>
			);
		},
	},
];

async function deleteMedia(id) {
	const response = await fetch(`/api/media/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	window.location.reload();
}
