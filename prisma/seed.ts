import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Andressa Jorge",
        email: "andressajorge@gmail.com"
      },
      {
        name: "Diego Fernandes",
        email: "diego@gmail.com"
      },
      {
        name: "Vitor Gonçalves",
        email: "vitor@gmail.com"
      },
    ]
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})