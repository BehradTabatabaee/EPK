import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function GET(req, res) {
  //deleting all the data
  await prisma.user.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.media.deleteMany();
  await prisma.cooperation_request.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.article.deleteMany();
  //crating users in DB
  await prisma.user.createMany({
    data: [
      {
        user_name: "smaEti",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti1",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah1",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad1",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti2",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah2",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad2",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti3",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah3",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad3",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti4",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah4",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad4",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti5",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah5",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad5",
        name: "behrad Tabatabaee",
        password: "123456789",
      },
      {
        user_name: "smaEti6",
        name: "Amin Ehterami",
        password: "123456789",
      },
      {
        user_name: "AliMah6",
        name: "Ali Mahalati",
        password: "123456789",
      },
      {
        user_name: "Behrad6",
        name: "behrad Tabatabaee",
        password: "123456789",
      },

    ],
  });
  await prisma.comment.createMany({
    data: [
      {
        name: "احمد ذوقی",
        email: "ahmad@gmail.com",
        comment: "وای اینجا پارتیه ؟ وای ارشیا جونممممممممممممممم",
        is_seen : false,
      },
      {
        name: "پیشرو",
        email: "reza@gmail.com",
        comment: "مشکل داری ؟ مشکل داری ؟ بیناموس ما داریم زحمت میکشیم !!",
        is_seen : false,
      },
    ],
  });
  await prisma.cooperation_request.createMany({
    data: [
      {
        is_seen : false,
      },
      {
        is_seen : false,
      },
    ],
  });
  return res.status(200).json("Your DB has been seeded Seccussfully!");
}
