import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

import { TEST_PROJECTS } from '$lib/project';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return TEST_PROJECTS.map((project) => ({
		slug: project.slug,
	}));
};

export const load: PageLoad = ({ params }) => {
	const project = TEST_PROJECTS.find((item) => item.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project,
	};
};
