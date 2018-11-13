import React, { useState } from "react";

export default function HooksCounter() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => setCount(count - 1);
  const nukeCount = () => setCount(0);
  const increaseCount = () => setCount(count + 1);

  return (
    <main className='wrapper'>
      <header>Another Counter, but with REACT HOOKS!</header>
      <section className='count'>
        {count}
      </section>
      <section>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={nukeCount}>Nuke It</button>
        <button onClick={increaseCount}>Increase</button>
      </section>
    </main>
  );
}
