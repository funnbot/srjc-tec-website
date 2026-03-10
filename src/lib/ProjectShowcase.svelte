<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from './Button.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section
	class="flex flex-col items-center justify-start gap-10 overflow-hidden bg-slate-200 px-8 py-8
   sm:px-16 sm:py-16
   lg:px-24 lg:py-24
 ">
	<h1 class="text-5xl font-semibold">Projects</h1>
	<div
		class="
    flex flex-col items-start justify-start gap-6 self-stretch pt-10
    md:flex-row
  ">
		<ProjectCard></ProjectCard>
		<ProjectCard></ProjectCard>
		<ProjectCard></ProjectCard>
	</div>
	<hr class="h-0.5 w-full fill-slate-800" />
	<Button href={resolve('/')}>See More</Button>
</section>
