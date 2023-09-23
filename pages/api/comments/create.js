import { db } from "@/prisma/client";
export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { email, name, comment } = req.body;
        const result = await db.user.create({
          data: {
            name: name,
            email: email,
            comment: comment,
            is_seen : false
          },
        });
        res.status(200).send(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
