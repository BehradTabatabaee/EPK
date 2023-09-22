import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { id } = req.query;
  if (session) {
    if (req.method === "DELETE") {
      try {
        const deleteUser = await db.user.delete({
          where: {
            id: parseInt(id),
          },
        });
        res.status(200).json(deleteUser);
      } catch {
        res
          .status(422)
          .json({ message: "unknown error happend (with database) !!" });
      }
    } else if (req.method === "PUT") {
      try {
        const { user_name, name, password } = req.body;
        const result = await db.user.update({
          where: {
            id: parseInt(id),
          },
          data: {
            user_name: user_name,
            name: name,
            password: password,
          },
        });
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
