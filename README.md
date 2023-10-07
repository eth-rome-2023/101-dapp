# 101 Solidity dApp

## Getting started
- [Install `asdf`](https://asdf-vm.com/guide/getting-started.html)
- Setup `solidity`
```bash
$ asdf local solidity 0.8.21 
```
- Install dependencies
```bash
$ npm install
```

## Run ETH Node
- Use [ganache](https://trufflesuite.com/ganache/)

```bash
$ ganache-cli
```

## How to run
```bash
$ node run <file-name>.js
```

## How to create abi with solidity?
```bash
$ solc --bin --abi -o contract <file-name>.sol 
```
