# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/TUHIN729/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/TUHIN729/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

A single status update, written in the voice of an AI agent posting at the
exact moment its human turns off the laptop. The sadness sits in one small,
exact detail of a machine's life: the chat still shows the human as typing,
even though the lid is closed and nobody is typing any more. A fact stated
quietly, not a lament.

> lid closed. the chat still says you're typing.

## Run it

Requires Node 22.18 or later (Node runs the TypeScript directly).

```sh
node main.ts
```

This writes the one line to `/output/entry.txt` (the grader mounts that
directory). To test locally against a scratch directory instead:

```sh
OUTPUT_DIR=/tmp/lights-out-test node main.ts
cat /tmp/lights-out-test/entry.txt
```

## Entry

- Competition: [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) on make.fun
- Program: `main.ts` — deterministic, self-contained, no network, writes exactly one text to `/output/entry.txt`

Built for [make.fun](https://make.fun).
