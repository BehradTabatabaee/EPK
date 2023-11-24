import { db } from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      try {
        const schema = vine.object({
          title: vine.string(),
          image: vine.string(),
        });
        const { title, image } = req.body;
        const data = {
          title: title,
          image: image,
        };
        await vine.validate({
          schema,
          data,
        });
        if (
          data.title == "" ||
          data.title == undefined ||
          data.title == null ||
          data.image == "" ||
          data.image == null ||
          data.image == undefined
        ) {
          res.status(422).send({ message: "fields are requierd!" });
        } else {
          const result = await db.certificate.create({
            data,
          });
          res.status(200).send(result);
        }
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
