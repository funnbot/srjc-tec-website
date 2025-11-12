<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import HeroSection from '$lib/HeroSection.svelte';
	import ProjectShowcase from '$lib/ProjectShowcase.svelte';
</script>

<svelte:head>
	<title>Home | TEC</title>
</svelte:head>

<Header></Header>

<!-- Main content for the title page -->
<hr>
<HeroSection></HeroSection>
<hr>
<ProjectShowcase></ProjectShowcase>


<Footer></Footer>