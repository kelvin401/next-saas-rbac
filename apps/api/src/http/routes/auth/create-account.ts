import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function createAccount(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string().min(6),
        }),
      },
    },
    async (request, reply) => {
      const { name, email, password } = request.body

      const userWIthSameEmail = await prisma.user.findUnique({
        where: { email },
      })

      if (userWIthSameEmail) {
        return reply
          .status(400)
          .send({ message: 'user with same e-mail already exists.' })
      }

      const passwordHash = await hash(password, 6)

      await prisma.user.create({
        data: { name, email, passwordHash },
      })

      return reply.status(201).send()
    }
  )
}
