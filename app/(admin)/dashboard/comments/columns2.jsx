"use client"

import { Button } from "@/components/ui/button"

export const columns2 = [
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
    id: "delete",
    cell: ({ row }) => {
      const comment = row.original
 
      return (
        <Button variant="destructive" onClick={() => deleteComment(comment.id)}>حذف</Button>
      )
    },
  },
]

async function deleteComment(id){
    const response = await fetch(`/api/comments/${id}`,{
      method : "DELETE"
    })
    const data = await response.json();
    console.log(data)
    window.location.reload();
  }