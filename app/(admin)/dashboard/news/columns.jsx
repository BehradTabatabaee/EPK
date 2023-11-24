"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
		<Link href={`/dashboard/news/edit/${news.id}`}>
        <Button>
         ویرایش
        </Button>
		</Link>
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
