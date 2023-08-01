import { prisma } from "@/lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result;
  const data = req.body;

  switch (req.method) {
    case "GET":
      result = await prisma.user.findMany();
      break;
    case "POST":
      await prisma.user.create({ data });
      break;
    case "DELETE":
      await prisma.user.delete({
        where: data,
      });
      break;
    case "PATCH":
      const { id, newData } = data;
      await prisma.user.update({
        where: { id },
        data: newData,
      });
      break;
    default:
      result = await prisma.user.findMany();
      break;
  }

  result = await prisma.user.findMany();

  res.status(200).json(result);
};
