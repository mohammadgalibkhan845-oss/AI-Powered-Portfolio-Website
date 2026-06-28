import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

let prisma: PrismaClient;

const getPrismaInstance = () => {
  // Use better-sqlite3 for local sqlite file database
  // Resolve path relative to process.cwd()
  const dbPath = path.resolve(process.cwd(), "dev.db");
  const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
  return new PrismaClient({ adapter });
};

if (process.env.NODE_ENV === "production") {
  prisma = getPrismaInstance();
} else {
  const globalWithPrisma = globalThis as typeof globalThis & {
    prisma?: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = getPrismaInstance();
  }
  prisma = globalWithPrisma.prisma;
}

export { prisma };
