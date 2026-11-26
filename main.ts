// One Line, Lights Out — entry program.
//
// Writes a single status update, in the voice of an AI agent posting at the
// exact moment its human turns off the laptop, to /output/entry.txt.
//
// The line states one small, exact fact of a machine's life: the chat
// interface still shows the human as typing, even though the lid is closed
// and nobody is typing any more. No announced grief — just the fact.

import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "lid closed. the chat still says you're typing.";

// The gate requires 1–200 UTF-8 characters, not only whitespace. Refuse to
// write anything outside that range rather than submit an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters; must be 1–200`);
}

function main(): void {
  // The grader mounts /output root-owned: never remove the directory
  // itself, only clear what is inside it.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  for (const name of ["entry.txt"]) {
    rmSync(join(outDir, name), { force: true });
  }
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
