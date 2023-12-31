"use client";

import { Button } from "@/components/ui/button";

export const columns = [
	{
		accessorKey: "id",
		header: "شناسه",
	},
	{
		accessorKey: "name",
		header: "نام و نام خانوادگی",
	},
	{
		accessorKey: "email",
		header: "پست الکترونیکی",
	},
	{
		accessorKey: "comment",
		header: "نظروپیشنهاد",
	},
	{
		accessorKey: "created_at",
		header: "تاریخ ثبت",
	},
	{
		header: "عملیات ها",
		id: "is_seen",
		cell: ({ row }) => {
			const comment = row.original;

			return (
				<Button onClick={() => updateComment(comment.id)} className="w-24">
					خوانده شد
				</Button>
			);
		},
	},
	{
		id: "delete",
		cell: ({ row }) => {
			const comment = row.original;

			return (
				<Button variant="destructive" onClick={() => deleteComment(comment.id)}>
					حذف
				</Button>
			);
		},
	},
];

async function deleteComment(id) {
	const response = await fetch(`/api/comments/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	window.location.reload();
}

async function updateComment(id) {
	const response = await fetch(`/api/comments/${id}`, {
		method: "PUT",
	});
	const data = await response.json();
	window.location.reload();
}
