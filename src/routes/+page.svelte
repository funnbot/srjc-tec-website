<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import HeroSection from '$lib/hero.svelte';
	import ProjectShowcase from '$lib/project-showcase.svelte';
</script>

<svelte:head>
	<title>Home | TEC</title>
</svelte:head>

<HeroSection></HeroSection>
<Separator />
<ProjectShowcase></ProjectShowcase>
