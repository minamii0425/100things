import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.

// Learn more:
// https://pris.ly/d/help/next-js-best-practices
declare global {
  var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

// import { PrismaClient } from "@prisma/client";
// declare global {
//   // allow global `var` declarations
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }

//     prisma = global.prisma;
//   }
// }
// //@ts-ignore
// export default prisma;
