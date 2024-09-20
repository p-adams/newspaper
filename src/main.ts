import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="page">
    <header>header</header>
    <aside class="left">left</aside>
    <main>main</main>
    <aside class="right">right</aside>
    <footer>footer</footer>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
