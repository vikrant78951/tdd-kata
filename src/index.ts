import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Define a GET route for the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Server is working");
});

// Start the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
