import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import vine from "@vinejs/vine";
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
        const data = {
          name: name,
          user_name: user_name,
          password: password,
        };
        const schema = vine.object({
          user_name: vine.string(),
          name: vine.string(),
          password: vine.string().minLength(8).maxLength(20),
        });
        const output = await vine.validate({
          schema,
          data,
        });
        let errorsCount = 0;
        [user_name, name].map((item) => {
          if (item == "" || item == undefined || item == null) {
            errorsCount += 1;
          }
        });
        if (errorsCount > 0) {
          return res.status(422).send({ message: "fields are required!" });
        } else {
          const result = await await db.user.update({
            where: {
              id: parseInt(id),
            },
            data: {
              user_name: user_name,
              name: name,
              password: password,
            },
          });
          return res.status(200).send(result);
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
