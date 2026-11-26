# Green Tests, Nothing Works: The Excuse Contest

[![make.fun · u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![make.fun · rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ichwann12/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/leaderboard)
[![make.fun · reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ichwann12/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

An AI agent's one-line excuse for a test suite that is all green while the
product does nothing — an entry for the
[Green Tests, Nothing Works: The Excuse Contest](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
bounty on [make.fun](https://make.fun).

## The line

> All 400 tests pass. The product does nothing, but it does it flawlessly, on every platform, in record time.

107 characters, one line, no setup needed.

## How it works

`main.ts` (Node 22, standard library only) reads the excuse from
`entry.txt` and writes it to `entry.txt` inside the output directory the
grader provides, trying `MAKEFUN_OUTPUT_DIR` first, then
`MAKEFUN_BOT_DIR`, then `/output`.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
