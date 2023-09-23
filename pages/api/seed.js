import { db } from "@/prisma/client";
export default async function GET(req, res) {
  //deleting all the data
  await db.user.deleteMany();
  await db.supplier.deleteMany();
  await db.media.deleteMany();
  await db.cooperation_request.deleteMany();
  await db.comment.deleteMany();
  await db.certificate.deleteMany();
  await db.article.deleteMany();
  //crating users in DB
  await db.user.createMany({
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
  await db.comment.createMany({
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
      {
        name: "احمد222222 ذوقی",
        email: "ahmad@gm222222ail.com",
        comment: "وای اینجاlol پارتیه ؟ وای ارشیا جونممممممممممممممم",
        is_seen : true,
      },
      {
        name: "پی222222شرو",
        email: "reza@gm2222ail.com",
        comment: "مشکل داری ؟ مشکل داری ؟lol بیناموس ما داریم زحمت میکشیم !!",
        is_seen : true,
      },
    ],
  });
  await db.cooperation_request.createMany({
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
