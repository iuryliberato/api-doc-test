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
                  required: ['email', 'password'],
              },
          },
          securitySchemes: {
              ApiKeyAuth: {
                  type: 'apiKey',
                  in: 'header',
                  name: 'X-API-Key',
                  description: 'API Key required for authentication',
              },
          },
      },
      security: [
          {
              ApiKeyAuth: [],
          },
      ],
  },
  
  apis: ['./src/routes/index.ts'], 
};


export const swaggerSpec = swaggerJSDoc(swaggerOptions);
