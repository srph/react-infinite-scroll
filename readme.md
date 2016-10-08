# react-infinite-scroll
```bash
npm i @srph/react-infinite-scroll
```
A simple infinite scroll React.js component.

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
|:-----:|:-----:|:-----:|
|callback|The callback to be ran when we reach the offset|`function` (default: `function() {}`)|
|disabled|Flag to run callback once we reach the offset|`boolean` (default: `false`)|
|offset|Allowance before reaching the offset|`number` (default: `250`)|
|container|Flag if we're using the window (`false`) or this `div` (requires to be scrollable)|`boolean` (default: `false`)|
|reverse|Trigger callback when we reach the top instead of the bottom (default)|`boolean` (default: `false`)|

### NIH?
I was a bit frustrated with the existing libraries, so I went to come up with a simpler API.