import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

const blogHtml = indexHtml
  .replace(
    /<link rel="canonical" href="https:\/\/pethomevet\.pt\/" \/>/,
    '<link rel="canonical" href="https://pethomevet.pt/veterinario-ao-domicilio" />'
  )
  .replace(
    /<link rel="alternate" hreflang="pt" href="https:\/\/pethomevet\.pt\/" \/>/,
    '<link rel="alternate" hreflang="pt" href="https://pethomevet.pt/veterinario-ao-domicilio" />'
  )
  .replace(
    /<link rel="alternate" hreflang="en" href="https:\/\/pethomevet\.pt\/\?lang=en" \/>/,
    '<link rel="alternate" hreflang="en" href="https://pethomevet.pt/veterinario-ao-domicilio?lang=en" />'
  )
  .replace(
    /<link rel="alternate" hreflang="x-default" href="https:\/\/pethomevet\.pt\/" \/>/,
    '<link rel="alternate" hreflang="x-default" href="https://pethomevet.pt/veterinario-ao-domicilio" />'
  )
  .replace(
    /<meta property="og:url" content="https:\/\/pethomevet\.pt\/" \/>/,
    '<meta property="og:url" content="https://pethomevet.pt/veterinario-ao-domicilio" />'
  );

const outDir = join(distDir, 'veterinario-ao-domicilio');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.html'), blogHtml);

console.log('Generated dist/veterinario-ao-domicilio/index.html with correct canonical and hreflang');
