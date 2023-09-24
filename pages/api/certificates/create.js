import { db } from "@/prisma/client";
export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { title , image} = req.body;
        const result = await db.certificate.create({
          data: {
            title : title,
            image , image,
          },
        });
        res.status(200).send(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
