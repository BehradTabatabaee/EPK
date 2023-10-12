import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { id } = req.query;
  if (session) {
    if (req.method === "DELETE") {
      try {
        const deletedNews = await db.news.delete({
          where: {
            id: parseInt(id),
          },
        });
        res.status(200).json(deletedNews);
      } catch {
        res
          .status(422)
          .json({ message: "unknown error happend (with database) !!" });
      }
    }
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
