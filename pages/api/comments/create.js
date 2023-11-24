import { db } from "@/prisma/client";
import vine from "@vinejs/vine";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, name, comment } = req.body;
      // validate with VineJS 
      const schema = vine.object({
        name: vine.string(),
        email: vine.string().email(),
        comment: vine.string(),
      });
      //creating data object for validating
      const data = {
        email : email,
        name : name,
        comment : comment,
      }
      //creating array for validating required fields (FUCK YOU VineJS)
      const array = [email, name, comment];
      let errorsCount = 0;
      array.map((item) => {
        if (item == "" || item == undefined || item == null) {
          errorsCount += 1;
        }
      });
      //validating with VineJS
      const output = await vine.validate({
        schema,
        data,
      });
      //sending Errors when there is empty Fields 
      if (errorsCount > 0) {
        res.status(422).send({ message: "fields are required!" });
        errorsCount = 0;
      } else {
        //finally creating valid comment
        const result = await db.comment.create({
          data: {
            name: name,
            email: email,
            comment: comment,
            is_seen: false,
          },
        });
        res.status(200).send(result);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
