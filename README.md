# Node Server Template

Node Server Template is a Node.js package that provides a simplified and configurable server setup for your
applications. It includes common server configurations and utilities, making it easier to bootstrap your projects.

## Features

- **Express.js Integration:** Easily create Express.js server instances.
- **Mongoose Database Connection:** Configure MongoDB database connection with Mongoose.
- **Advanced Configuration:** Choose between basic server setup or advanced configuration with custom HTTP server
  options.
- **API Endpoint Testing:** Sample API endpoint for testing purposes.
- **Model Creation:** Utility function to create Mongoose models easily.

## Installation

```bash
npm install @kavicastelo/node_template
```

## Usage

```javascript
const { configureServer, advancedConfigureServer, testGet, createModel } = require('my-server-template');

// Basic Server Configuration
configureServer('mongodb://localhost:27017/mydatabase', 3000);

// Advanced Server Configuration
advancedConfigureServer('mongodb://localhost:27017/mydatabase', 3000);

// Sample API Endpoint
testGet();

// Create Mongoose Model
const schemaDefinition = {
    // Define your schema fields here
};

const modelName = 'MyModel';
const MyModel = createModel(schemaDefinition, modelName);
```

## API Reference
### **configureServer(databaseUrl: string, serverPort: number)**
Basic server configuration with Express.js. Connects to the MongoDB database specified by `databaseUrl` and starts the server on the provided `serverPort`.

### **advancedConfigureServer(databaseUrl: string, serverPort: number)**
Advanced server configuration with custom HTTP server options. Connects to the MongoDB database specified by `databaseUrl` and starts the server on the provided `serverPort`.

### **testGet()**
Creates a sample GET API endpoint at the root ('/') for testing purposes.

### **createModel(schemaDefinition: object, modelName: string)**
Creates a Mongoose model with the given schema definition and model name.

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated!

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.