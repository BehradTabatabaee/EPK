
import CommentTabs from "./tabs";
import { db } from "@/prisma/client";

export default async function users() {
  const [unseenData,seenData] = await getData();
  return (
    <div className="container py-16 lg:py-8 overflow-y-scroll">
        <CommentTabs unseenData={unseenData} seenData={seenData}/>
    </div>
  );
}

async function getData() {
  const unseenData = await db.comment.findMany({where : {
    is_seen : false
  },
    orderBy: { id: "asc" },
  });
  const seenData = await db.comment.findMany({where : {
    is_seen : true
  },
    orderBy: { id: "asc" },
  });

  return [unseenData,seenData];
}
