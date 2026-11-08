import type { APIRoute } from 'astro';

const body = `User-agent: *\nAllow: /\nSitemap: https://sitesbyandrew.marblism.me/sitemap-index.xml\n`;

export const GET: APIRoute = () => new Response(body, {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
