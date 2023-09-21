import { columns } from "./columns"
import { DataTable } from "./data-table"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function users() {
  const data = await getData()
  return (
    <div  className="sm:w-full lg:w-7/12 container py-10 ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

async function getData(){
  // Fetch data from your API here.
  const usersData = await prisma.user.findMany();

  return usersData;
}