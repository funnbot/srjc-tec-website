import { placeholderImage } from '$lib/utils';

export interface Contributor {
	guid: string;
	description: string;
}

export interface ProjectData {
	guid: string;
	slug: string;

	title: string;

	shortDescription: string;
	detailedDescription: string;

	coverImage: string;
	coverImageAlt: string;

	status: string; // TODO: enum

	contributors: Contributor[];
}

export interface ProjectCardData {
	slug: string;
	title: string;
	description: string;
	coverImage: string;
	status: string;
}

export const TEST_PROJECTS: ProjectCardData[] = [
	{
		slug: 'project-one',
		title: 'Project One',
		description: 'This is a description of project one.',
		coverImage: placeholderImage('Project One'),
		status: 'In Progress',
	},
	{
		slug: 'project-two',
		title: 'Project Two',
		description: 'This is a description of project two.',
		coverImage: placeholderImage('Project Two'),
		status: 'Completed',
	},
	{
		slug: 'project-three',
		title: 'Project Three',
		description: 'This is a description of project three.',
		coverImage: placeholderImage('Project Three'),
		status: 'Planned',
	},
	{
		slug: 'project-four',
		title: 'Project Four',
		description: 'This is a description of project four.',
		coverImage: placeholderImage('Project Four'),
		status: 'Not Started',
	},
];
