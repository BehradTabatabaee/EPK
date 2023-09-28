import vine from "@vinejs/vine";
export default async function handler(req, res) {
  try {
    const schema = vine.object({
      username: vine.string(),
      email: vine.string().email(),
      password: vine.string().minLength(8),
    });

    const data = {
      username: "",
      email: "virk@example.com",
      password: "",
    };

    const output = await vine.validate({
      schema,
      data,
    });

    res.send(output)
  } catch (error) {
      res.send(error.messages);
  }
}
