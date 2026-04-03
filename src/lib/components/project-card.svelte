<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { ProjectCardData } from '$lib/project';
	import { isNonEmptyString } from '$lib/utils';
	import { resolve } from '$app/paths';

	interface Props {
		project: ProjectCardData;
	}

	let { project }: Props = $props();
</script>

<Card.Root
	class="group h-full overflow-hidden border transition-colors hover:border-primary/40">
	<img
		src={project.coverImage}
		alt={project.imageAlt ?? project.title}
		loading="lazy"
		class="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />

	<Card.Header class="space-y-2">
		<div class="flex flex-wrap items-start justify-between gap-2">
			<Card.Title class="line-clamp-2 text-lg">{project.title}</Card.Title>
			<Badge variant="secondary">{project.status}</Badge>
		</div>
		<Card.Description class="line-clamp-3"
			>{project.description}</Card.Description>
	</Card.Header>

	<Card.Footer class="mt-auto flex gap-3 pt-2">
		<a
			href={resolve('/projects/[slug]', { slug: project.slug })}
			target="_blank"
			rel="noreferrer"
			class="text-sm font-medium text-primary underline-offset-4 hover:underline">
			View Project
		</a>
	</Card.Footer>
</Card.Root>
