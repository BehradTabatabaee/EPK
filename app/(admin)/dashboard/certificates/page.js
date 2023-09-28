import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/prisma/client";
import Link from "next/link";
export default async function certificates() {
  const data = await getData();
  return (
    <div className="sm:w-full lg:w-7/12 container py-3 ">
      <Link href={'/dashboard/certificates/create'}>
        <Button className="my-2">اضافه کردن گواهینامه جدید</Button>
      </Link>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

async function getData() {
  const certificateData = await db.certificate.findMany({
    orderBy: { id: "asc" },
  });

  return certificateData;
}
