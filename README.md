# Socket.io realtime drawing shapes

how to create a real-time collaborative drawing application using Socket.IO to manage communication between multiple clients and the server. The application allows users to draw on a canvas, with their actions being instantly relayed to all connected clients, making it possible for multiple users to collaborate in real time.

[Watch video part 1](https://share.zight.com/d5ujRoqO)

[Watch video part 2](https://share.zight.com/lluAoqGO)


## How It Works:
Server-Side Consistency: The server acts as the central point of communication, maintaining connections with all the clients. It handles events such as new users joining, drawing actions, and broadcasting updates to all connected clients.

Client-Side Drawing: On the client side, the application tracks the user's cursor movements using an array of coordinates. Every time a user moves their cursor and draws on the canvas, the event listeners capture the cursor’s position, color, and other drawing properties.

## Real-Time Interaction: 
As a user draws, the client sends the drawing data (coordinates, color, etc.) back to the server. The server then broadcasts these updates to all connected clients, ensuring everyone sees the drawing in real-time, regardless of which user is drawing.

Dynamic Drawing and Color Changes: The application also supports different drawing styles and colors, which are seamlessly updated in real time. When a user changes the color or brush style, the actions are instantly reflected on the canvases of all connected clients.

## Socket.IO for Real-Time Communication:
Socket.IO is crucial for enabling the real-time interactions in this application. It is a JavaScript library that allows bidirectional communication between the server and the clients using WebSockets or long-polling as fallbacks.

Socket.IO handles multiple events, such as:

Connection/Disconnection: When a client connects or disconnects.
Custom Events: Such as broadcasting the drawing data.
Code Snippet (Using Socket.IO):

```typescript
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('draw', (message) => {
    console.log(message);
    socket.broadcast.emit('draw', message);
  });
  socket.on('disconnect', (message) => {
    console.log(message);
  });
});

server.listen(port, () => {
  console.log('server started');
});
```

Socket.IO simplifies real-time event-based communication. In this case, the server listens for an event named "drawing" emitted by a client when a user draws on the canvas. The server then uses the socket.broadcast.emit() function to send that event to all other clients connected to the server, ensuring real-time updates across all clients.

Benefits of Socket.IO for Real-Time Collaboration:
Real-Time Communication: Events are handled almost instantly, enabling seamless collaboration.
Scalability: The application can handle multiple clients connected at the same time.
Reliability: Socket.IO falls back to long-polling if WebSockets aren’t available, ensuring consistent performance across different network environments.

Step 2: Install the Dependencies
Now, let's install the necessary dependencies. This project uses a mix of development dependencies (packages needed during development but not in production) and dependencies (required for the actual app to run in production).

You can install all the packages listed in your package.json by running:

```bash
npm install
```

This will install all the dependencies specified under both dependencies and devDependencies sections.

## Dev Dependencies
These are packages you need during development, such as for compiling TypeScript, watching files for changes, or running the application in development mode.

- nodemon

Purpose: Automatically restarts the server when file changes are detected, making development faster.
How it works: It watches your files and restarts the Node.js server every time you save a file.
Usage: Useful during development to avoid manual server restarts.
Command: "dev": "npx nodemon"

ts-node

Purpose: Allows you to run TypeScript files directly in Node.js without needing to compile them to JavaScript first.
How it works: It compiles the TypeScript code in memory and executes it using Node.js.
Usage: This is helpful for running and testing TypeScript without having to wait for compilation.
Command: "build:start": "npm run build && npm run start"

- typescript

Purpose: The official TypeScript compiler.
How it works: Compiles your .ts files into .js files that Node.js can execute.
Usage: Essential for building TypeScript applications and ensuring type safety.
Command: "build": "npx tsc"
Dependencies
These are the essential packages your application needs to run in production.

- express 

Purpose: A minimal and flexible Node.js web application framework that provides robust features for building web and API servers.
How it works: It simplifies the process of handling HTTP requests and responses, routing, middleware, and more.
Usage: This is the core framework used to serve the backend API or web application.

- socket.io

Purpose: Enables real-time, bidirectional communication between web clients and the server.
How it works: Uses WebSockets (and falls back to long polling if WebSockets aren’t available) to provide low-latency communication.
Usage: Essential for real-time features like the collaborative drawing board in this project.

- socket.io-client

Purpose: The client-side library for connecting to the Socket.IO server.
How it works: Provides an API for the browser to connect and communicate with the server in real time.
Usage: This is used in the client-side code to establish the WebSocket connection.

- cors

Purpose: Middleware for Express to enable Cross-Origin Resource Sharing (CORS).
How it works: It allows your server to handle requests from different origins, which is often required when the frontend and backend are on different domains.
Usage: Needed for security and to handle requests from the frontend in a different domain.

- http

Purpose: Used internally by Node.js to create an HTTP server.
How it works: Provides core HTTP functionalities. This is often bundled with frameworks like Express, but might be explicitly required in certain configurations.
Usage: Provides foundational HTTP handling for the server.

- @types/express

Purpose: TypeScript type definitions for Express.
How it works: Provides type definitions for Express so TypeScript can understand the structure of Express and help catch errors during development.
Usage: This is only needed when developing with TypeScript.

- @types/cors

Purpose: TypeScript type definitions for the cors middleware.
How it works: Enables TypeScript to recognize and validate the use of the CORS library.
Usage: Used in development for type safety when configuring CORS in TypeScript.
Step 4: Running the Application
Once the packages are installed, you can run and build your application using the following commands:

Run in Development Mode: This will start the server with nodemon, so it will restart automatically when changes are made.

```bash
npm run dev
```

Build the TypeScript Code: This will compile the TypeScript files into JavaScript and place them in the dist/ directory.

```bash
npm run build
```
Start the Production Build: Once the TypeScript is compiled into JavaScript, you can start the compiled server using:

```bash
npm run start
```

Build and Start in One Step: To build the TypeScript code and then immediately run it:

```bash
npm run build:start
```
