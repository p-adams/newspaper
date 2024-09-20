import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>header</header>
    <div>
    <aside>left</aside>
    <main>main</main>
    <aside>right</aside>
    </div>
    <footer>footer</footer>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
