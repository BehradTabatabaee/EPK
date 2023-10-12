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
          field: vine.string(),
          summary: vine.string(),
        });
        const { title, image, field, summary } = req.body;
        console.log(req.body)
        const data = {
          title: title,
          image: image,
          field: field,
          summary: summary,
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
          data.image == undefined ||
          data.field == "" ||
          data.field == null ||
          data.field == undefined ||
          data.summary == "" ||
          data.summary == null ||
          data.summary == undefined
        ) {
          res.status(422).send({ message: "fields are requierd!" });
        } else {
          const result = await db.news.create({
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
