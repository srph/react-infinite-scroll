# react-infinite-scroll [![npm version](https://img.shields.io/npm/v/@srph/react-infinite-scroll.svg?style=flat)](https://www.npmjs.com/package/@srph/react-infinite-scroll)
```bash
npm i @srph/react-infinite-scroll
```
A simple infinite scroll React.js component.

## Why
- I was a bit frustrated with the existing libraries, so I went to come up with a simpler API.
- I'd like to keep this library simple -- if you're looking for more advanced features and performant implementations, please check [react-virtualized](https://github.com/bvaughn/react-virtualized) and [react-infinity](https://github.com/nmn/react-infinity).

## Usage
```js
<Infinite callback={this.request} disabled={this.state.loading}>
  {this.state.items((item, i) =>
  	<div key={i}>{item.name}</div>
  )}
</Infinite>
```

## API
|Prop|Description|Type|
|-----|-----|-----|
|callback|The callback to be ran when we reach the offset|`function` (required)|
|disabled|Flag to run callback once we reach the offset|`boolean` (default: `false`)|
|offset|Allowance before reaching the offset|`number` (default: `250`)|
|container|Flag if we're using the window (`false`) or this `div` (requires to be scrollable)|`boolean` (default: `false`)|
|reverse|Trigger callback when we reach the top instead of the bottom. Useful for chat applications.|`boolean` (default: `false`)|

## Examples
You can check the [demo](https://srph.github.io/react-infinite-scroll), or build it yourself:
```
npm run install
npm run example:run
```
