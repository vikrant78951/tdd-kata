import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { add } from "./utils/kata";

export const app = express();
dotenv.config();

const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/calculate", (req: Request, res: Response): void => {
  const { calculate } = req.body;

  const decodedCalculation = calculate.replace(/\\n/g, "\n");
  console.log("Decoded Calculation:", decodedCalculation);
  if (!decodedCalculation) {
    res.status(400).json({ success: false, error: "Input is required." });
    return;
  }

  try {
    const sum = add(decodedCalculation);
    res.status(200).json({ success: true, result: sum });
    return;
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message || "Invalid input format.",
    });
    return;
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
