<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from './Button.svelte';
	import { TEST_PROJECTS } from './project';
	import ProjectCard from './components/project-card.svelte';
</script>

<section
	class="flex flex-col items-center justify-start gap-10 overflow-hidden px-8 py-8
   sm:px-16 sm:py-16
   lg:px-24 lg:py-24
 ">
	<h1 class="text-5xl font-semibold">Projects</h1>
	<div
		class="
    flex flex-col items-start justify-start gap-6 self-stretch
    md:flex-row
  ">
		<ProjectCard project={TEST_PROJECTS[0]}></ProjectCard>
		<ProjectCard project={TEST_PROJECTS[1]}></ProjectCard>
		<ProjectCard project={TEST_PROJECTS[2]}></ProjectCard>
	</div>
	<hr class="h-0.5 w-full fill-slate-800" />
	<Button href={resolve('/')}>See More</Button>
</section>
