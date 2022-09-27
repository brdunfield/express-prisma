import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import { Router } from 'express';
const router = Router();

router.get("/", async function(req, res) {
  const users = await prisma.user.findMany();
  res.send({users: users});
});
router.get('/:userID', function(req, res) {
  res.send("specific user");
})

export {router as UserController };
