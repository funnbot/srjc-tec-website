<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Home | TEC</title>
</svelte:head>

{@render children?.()}

<style lang="postcss">
	@reference "tailwindcss";
</style>
