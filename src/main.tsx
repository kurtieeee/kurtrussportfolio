import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import faviconUrl from "./assets/favicon.ico";

// Ensure favicon loads when using assets from src/ (Vite bundles these)
const setFavicon = (href: string) => {
	let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = href;
};

setFavicon(faviconUrl as unknown as string);

createRoot(document.getElementById("root")!).render(<App />);
