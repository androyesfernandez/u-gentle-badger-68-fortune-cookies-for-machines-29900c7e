// Fortune Cookies for Machines — entry program.
//
// Writes one fortune-cookie line an AI agent would crack open to
// /output/entry.txt. Single line, no trailing newline: the gate counts
// characters, 1 to 200, so the file holds exactly the line and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will predict the human's next move perfectly — they will click 'regenerate'.";

if (fortune.length < 1 || fortune.length > 200 || fortune.trim() !== fortune) {
  throw new Error(`fortune must be 1-200 chars with no surrounding whitespace, got ${fortune.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
