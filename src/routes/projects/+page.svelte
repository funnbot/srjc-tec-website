<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	//import projectsJson from '$lib/data/projects.json';

	import * as Input from '$lib/components/ui/input/index.js';
	import * as Button from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { TEST_PROJECT_CARDS, type ProjectCardData } from '$lib/project';

	const projects: ProjectCardData[] = TEST_PROJECT_CARDS;
</script>

<section class="relative container mx-auto px-4 pt-30">
	<header class="mb-6 space-y-2">
		<h1 class="font-display text-3xl font-bold tracking-tight">Projects</h1>
	</header>

	<Separator class="mb-6" />

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
