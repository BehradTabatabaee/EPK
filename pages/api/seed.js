import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function GET(req , res ) {
    
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
            first_name:
              "Amin",
            last_name: "Ehterami",
            password:"123456789",
        },
        {
            user_name: "AliMah",
            first_name:
              "Ali",
            last_name: "Mahalati",
            password:"123456789",
        },
        {
            user_name: "Behrad",
            first_name:
              "behrad",
            last_name: "tabatabaee",
            password:"123456789",
        }
    ]})
   return res.status(200).json("Your DB has been seeded Seccussfully!");
}