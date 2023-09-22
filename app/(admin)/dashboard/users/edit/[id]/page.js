import { db } from "@/prisma/client";
import UserCard from "./userCard";
export default async function edit({ params }) {
  const user = await db.user.findFirstOrThrow({
    where: { id: parseInt(params.id) },
  });
  return (
    <div className="sm:w-full lg:w-5/12 container py-10 ">
    <UserCard props={{...user, id : params.id}}/>
    </div>
  );
}
