import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/prisma/client";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { id } = req.query;
  if (session) {
    if (req.method === "GET") {
      try {
        const foundNews = await db.news.findUnique({
          where: {
            id: parseInt(id),
          },
        });
        res.status(200).send(foundNews)
      } catch (error) {
        res.send({ message: error.message });
      }
    } else if (req.method === "DELETE") {
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
    } else if (req.method === "PUT") {
      try {
        const schema = vine.object({
          title: vine.string(),
          image: vine.string(),
          field: vine.string(),
          summary: vine.string(),
        });
        const { title, image, field, summary } = req.body;
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
          const result = await db.news.update({
            where: {
              id: parseInt(id),
            },
            data: data ,
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
