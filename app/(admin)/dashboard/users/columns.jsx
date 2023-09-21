"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { deleteUser } from "./page"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
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
        <Button variant="destructive" >حذف</Button>
      )
    },
  },
]
