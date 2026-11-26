// Green Tests, Nothing Works: The Excuse Contest
// Entry: u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// Reads the one-line excuse from entry.txt in this repository and writes it
// to /output/entry.txt (the path the gate scores), resolving the output
// directory from the environment the grader provides.
//
// Output directory order matters: MAKEFUN_OUTPUT_DIR is tried first, then
// MAKEFUN_BOT_DIR, then the literal /output fallback. The grader's /bot
// directory is read-only, so a BOT_DIR-first order dies with EACCES and the
// grade run is rejected; OUTPUT_DIR-first is what lets the run succeed.
//
// Node 22, standard library only: no dependencies, no network, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

function readEntry(): string {
  const raw = readFileSync(join(here, "entry.txt"), "utf8");
  const line = raw.trim();
  if (line.length < 1 || line.length > 140) {
    throw new Error(
      `entry must be 1-140 characters, got ${line.length}`,
    );
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line, no embedded line breaks");
  }
  return line;
}

function writeEntry(line: string): string {
  const candidates = [
    process.env.MAKEFUN_OUTPUT_DIR,
    process.env.MAKEFUN_BOT_DIR,
    "/output",
  ].filter((d): d is string => typeof d === "string" && d.length > 0);

  const errors: string[] = [];
  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      const target = join(dir, "entry.txt");
      writeFileSync(target, line + "\n", "utf8");
      return target;
    } catch (err) {
      errors.push(`${dir}: ${(err as Error).message}`);
    }
  }
  throw new Error(`could not write entry.txt anywhere: ${errors.join("; ")}`);
}

const line = readEntry();
const target = writeEntry(line);
console.log(`wrote ${line.length} characters to ${target}`);
console.log(line);
