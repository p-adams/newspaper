import styles from "./banner.module.css";

export default function setupAdBanner(element: HTMLDivElement) {
  element.innerHTML = `<div class=${styles.banner}>
    hello
    
    </div>`;
}
