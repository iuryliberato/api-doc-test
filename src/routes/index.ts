import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';



const router = Router();

// Zod schema for user creation
const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  age: z.number().positive('Age must be a positive number').optional(), // Apply `positive` before `optional`
});

const createBookSchema = z.object({
  book: z.string().min(1, 'Book name is required'),
  writer: z.string().min(1, 'Writer name is required'),
  year: z.number().int().positive('Year must be a positive integer').optional(),
});

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API Docs POC!' });
});
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Add a new user details.
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 123
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     age:
 *                       type: number
 *                       example: 30
 *       401:
 *         description: "Unauthorized: API key is missing"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized: API key is missing"
 */

router.post('/users', validate(createUserSchema), apiKeyMiddleware, (req, res) => {
  const { name, email, age } = req.body;

  res.status(201).json({
      message: 'User created successfully!',
      data: {
          id: 123,
          name,
          email,
          age: age || null,
      },
  });
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book entry with details such as book name, writer, and year of publication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               book:
 *                 type: string
 *                 example: "To Kill a Mockingbird"
 *               writer:
 *                 type: string
 *                 example: "Harper Lee"
 *               year:
 *                 type: integer
 *                 example: 1960
 *             required:
 *               - book
 *               - writer
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: book created successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 123
 *                     book:
 *                       type: string
 *                       example: "To Kill a Mockingbird"
 *                     writer:
 *                       type: string
 *                       example: "Harper Lee"
 *                     year:
 *                       type: integer
 *                       example: 1960
 * 
 *       400:
 *         description: Invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid request data
 */


router.post('/books', validate(createBookSchema), (req, res) => {
  const { book, writer, year } = req.body;

  res.status(201).json({
      message: 'book created successfully!',
      data: {
          id: 123,
          book,
          writer,
          year: year || null,
      },
  });
});

export default router;
