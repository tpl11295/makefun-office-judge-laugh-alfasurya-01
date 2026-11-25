import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One office-life joke, single line, under 200 characters.
// Mechanism: corporate euphemism deflated by three concrete details,
// with the punch landing on the last two words.
const line =
  "HR renamed my promotion 'a lateral growth opportunity' — same desk, same pay, longer title.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${line.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== line) {
  throw new Error("Verification failed: written file does not match the entry.");
}

console.log(`Wrote ${line.length} characters to /output/entry.txt`);
