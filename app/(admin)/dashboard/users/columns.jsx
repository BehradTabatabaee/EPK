"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export const columns = [
  {
    accessorKey: "id",
    header: "شناسه",
  },
  {
    accessorKey: "user_name",
    header: "نام کاربری",
  },
  {
    accessorKey: "name",
    header: "نام و نام خانوادگی",
  },
  {
    id: "edit",
    cell: ({ row }) => {
      const user = row.original
 
      return (
        <Link href={`/dashboard/users/edit/${user.id}`}><Button >ویرایش</Button></Link>
      )
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const user = row.original
 
      return (
        <Button variant="destructive" onClick={() => deleteUser(user.id)}>حذف</Button>
      )
    },
  },
]

async function deleteUser(id){
  const response = await fetch(`/api/users/${id}`,{
    method : "DELETE"
  })
  const data = await response.json();
  window.location.reload();
}