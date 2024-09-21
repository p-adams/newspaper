import "./style.css";

import setupAdBanner from "./banner.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="page">
    <header>header</header>
    <nav class="left">
    <ul></ul>
    
    </nav>
    <main>main</main>
    <aside class="right">
      <div id="ad-banner"/>
    </aside>
    <footer>footer</footer>
  </div>
`;

setupAdBanner(document.querySelector<HTMLDivElement>("#ad-banner")!);
