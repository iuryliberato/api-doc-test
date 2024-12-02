import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'API Documentation',
          version: '1.0.0',
      },
      components: {
          schemas: {
              CreateUserRequest: {
                  type: 'object',
                  properties: {
                      username: { type: 'string' },
                      email: { type: 'string', format: 'email' },
                      password: { type: 'string', format: 'password' },
                  },
                  required: ['username', 'email', 'password'],
              },
          },
      },
  },
  apis: ['./src/routes/*.ts'], // Path to your annotated route files
};


export const swaggerSpec = swaggerJSDoc(swaggerOptions);
