import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      try {
        const { user_name, name, password } = req.body;
        const result = await db.user.create({
          data: {
            name: name,
            user_name: user_name,
            password: password,
          },
        });
        res.status(200).send(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  } else {
    res.status(403).send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
