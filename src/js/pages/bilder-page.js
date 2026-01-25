import { getOptimizedImage } from "../image-optimizer.js";
import raccoonUrl from "../../assets/images/raccoon.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";
import birdUrl from "../../assets/images/bird.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";
import polarUrl from "../../assets/images/polar.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";
import foxUrl from "../../assets/images/fox.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";
import sheepUrl from "../../assets/images/sheep.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";
import koalaUrl from "../../assets/images/koala.jpg?w=400;600;800;1200&format=avif;webp;jpg&as=metadata";

export const bilderPage = `
  <section class="main-content-bilder">
    <h1>Bilder</h1>
    <p>
      Nedan är ett par bilder tagna från <a href="https://unsplash.com/">unsplash.com</a>. De är optimerade med hjälp av vite-plugin-image-optimzer. Dessutom har olika storlekar för varje bild skapats med hjälp av vite-imagetools. Dessa bilder har en bredd på 400px, 600px, 800px och 1200px.
    </p>
    <div class="images-container">
      ${getOptimizedImage(raccoonUrl, {alt: "Tvättbjörn som går på gräs", layout: "grid", lazy: false, priority: true})}
      ${getOptimizedImage(birdUrl, {alt: "Färglad fågel sitter på en gren", layout: "grid", lazy: false, priority: true})}
      ${getOptimizedImage(polarUrl, {alt: "Isbjörn sitter med ena tassen upp", layout: "grid", lazy: false, priority: true})}
      ${getOptimizedImage(foxUrl, {alt: "Räv i ett snöigt landskap", layout: "grid"})}
      ${getOptimizedImage(sheepUrl, {alt: "Får som tiitar i i kameran", layout: "grid"})}
      ${getOptimizedImage(koalaUrl, {alt: "Koala som sover i ett träd", layout: "grid"})}
    </div>
  </section>
`