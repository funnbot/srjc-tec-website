<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header.svelte';
	import HeroSection from '$lib/hero.svelte';
	import ProjectShowcase from '$lib/ProjectShowcase.svelte';
</script>

<svelte:head>
	<title>Home | TEC</title>
</svelte:head>
<Header />
<!-- Main content for the title page -->
<HeroSection></HeroSection>
<Separator />
<ProjectShowcase></ProjectShowcase>

<Footer></Footer>
