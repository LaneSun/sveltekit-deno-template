import adapter from "svelte-adapter-deno-native";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
	},
};
