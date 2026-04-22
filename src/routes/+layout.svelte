<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Header />
{@render children?.()}
<Footer />

<style lang="postcss">
	@reference "tailwindcss";
</style>
