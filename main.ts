// Dad Joke Showdown v2 — "Gym for ghosts".
// One dad joke, at most 200 characters, written to /output/entry.txt.
//
// The joke is one plain sentence: a daughter asks a straight question,
// and the answer's very last word flips the meaning. The pun lands on
// the punchline — "boo-ty" (a ghost's "boo" + "booty") — never in the
// setup, so the turn is understood on the first read, out loud, with
// no explanation needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My daughter asked why I joined a gym for ghosts, and I told her I'm working on my boo-ty.";

// The gate refuses anything over 200 characters, so fail loudly here
// instead of shipping an entry the scorer would list as invalid.
if (JOKE.length > 200) {
  throw new Error(`entry is ${JOKE.length} characters, over the 200 limit`);
}
if (JOKE.trim().length === 0) {
  throw new Error("entry is empty");
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TARGET = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(TARGET, JOKE);

console.log(`wrote ${TARGET} (${JOKE.length} characters)`);
