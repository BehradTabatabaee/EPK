import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/prisma/client";
import Link from "next/link";
export default async function users() {
  const data = await getData();
  return (
    <div className="sm:w-full lg:w-7/12 container py-3 ">
      <Link href={'/dashboard/users/create'}>
        <Button className="my-2">اضافه کردن کاربر جدید</Button>
      </Link>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

async function getData() {
  const usersData = await db.user.findMany({
    orderBy: { id: "asc" },
  });

  return usersData;
}
