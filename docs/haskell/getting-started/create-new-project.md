---
sidebar_position: 2
---

# Create New Haskell Project

You have just installed GHC and Cabal on your computer. The next thing to do is to **create a new project**!

```shell
mkdir myproject && cd myproject
cabal init -n --is-executable
cabal v2-run
```
You should see `Hello, Haskell!` printed on your terminal.
