import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { Mode, plugin as mdPlugin } from "vite-plugin-markdown";
import MarkdownIt from "markdown-it";
import MarkdownItLatex from "markdown-it-latex";


let markdownIt = MarkdownIt()
    .use(MarkdownItLatex.default);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), mdPlugin({ mode: [Mode.HTML], markdownIt })],
})
