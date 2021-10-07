# Guide

> TODO

:::demo Validating css color names
vue/scroll-progress-bar
:::

```js
/**
 * isColor
 * @param color
 * @returns boolean
 */
export const isColor = (color: string) => {
  const el = document.createElement("div");
  el.style.color = color;
  return !!el.style.color.replace(/\s+/,'').toLowerCase();
}
```

```rust
fn main() {
    println!("Hello, world!");
}
```

```css
.logo {
  width: 100px;
}
```

```tsx
import React, { useState } from 'react';

interface DemoProps {
  type: string;
}

const Demo: React.FC<DemoProps> = () => {
  const [count, setCount] = useState(0);

  return <div>Demo</div>
};

export default Demo;
```
