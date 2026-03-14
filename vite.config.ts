import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/svg/'],
			svgoOptions: {
				multipass: true,
				plugins: ['preset-default']
			}
		}),
		tailwindcss()
	]
});
