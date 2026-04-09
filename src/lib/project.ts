import type { ClubOfficer, ClubMember } from '$lib/team-member';
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

export interface ProjectData {
	guid: string;
	title: string;
	shortDescription: string;
}

export interface ProjectCardData {
	slug: string;
	title: string;
	description: string;
	coverImage: string;
	imageAlt: string;
	status: string;
}

export const TEST_PROJECTS: ProjectCardData[] = [
	{
		slug: 'project-one',
		title: 'Project One',
		description: 'This is a description of project one.',
		coverImage: placeholderImage('Project One'),
		imageAlt: 'Project One Cover Image',
		status: 'In Progress',
	},
	{
		slug: 'project-two',
		title: 'Project Two',
		description: 'This is a description of project two.',
		coverImage: placeholderImage('Project Two'),
		imageAlt: 'Project Two Cover Image',
		status: 'Completed',
	},
	{
		slug: 'project-three',
		title: 'Project Three',
		description: 'This is a description of project three.',
		coverImage: placeholderImage('Project Three'),
		imageAlt: 'Project Three Cover Image',
		status: 'Planned',
	},
	{
		slug: 'project-four',
		title: 'Project Four',
		description: 'This is a description of project four.',
		coverImage: placeholderImage('Project Four'),
		imageAlt: 'Project Four Cover Image',
		status: 'Not Started',
	},
];

export const TEST_MEMBERS: (ClubMember | ClubOfficer)[] = [
	{
		guid: 'member-maya-chen',
		name: 'Maya Chen',
		headShot: placeholderImage('Maya Chen', [400, 400]),
		major: 'Mechanical Engineering',
		links: {
			linkedin: 'https://www.linkedin.com/in/mayachen',
			github: 'https://github.com/mayachen',
		},
		yearsActive: {
			start: 24,
			end: 26,
		},
		isActive: true,
		projects: [
			{
				slug: 'project-one',
				title: 'Project One',
				isLead: true,
				roles: ['Systems Lead'],
			},
			{
				slug: 'project-three',
				title: 'Project Three',
				isLead: false,
				roles: ['CAD Designer'],
			},
		],
		officialsRoles: [
			{
				role: 'President',
				startYear: 25,
			},
		],
		biography:
			'Maya focuses on project planning and mentoring new members in prototyping and design reviews.',
	},
	{
		guid: 'member-leo-martinez',
		name: 'Leo Martinez',
		headShot: placeholderImage('Leo Martinez', [400, 400]),
		major: 'Electrical Engineering',
		links: {
			linkedin: 'https://www.linkedin.com/in/leomartinez',
			github: 'https://github.com/leomartinez',
		},
		yearsActive: {
			start: 23,
			end: 25,
		},
		isActive: false,
		projects: [
			{
				slug: 'project-two',
				title: 'Project Two',
				isLead: false,
				roles: ['PCB Engineer'],
			},
		],
		officialsRoles: [
			{
				role: 'Treasurer',
				startYear: 24,
			},
		],
		biography:
			'Leo managed budgeting for prototypes and helped standardize sourcing and component tracking.',
	},
	{
		guid: 'member-ava-patel',
		name: 'Ava Patel',
		headShot: placeholderImage('Ava Patel', [400, 400]),
		major: 'Computer Engineering',
		links: {
			linkedin: 'https://www.linkedin.com/in/avapatel',
			github: 'https://github.com/avapatel',
		},
		yearsActive: {
			start: 25,
		},
		isActive: true,
		projects: [
			{
				slug: 'project-one',
				title: 'Project One',
				isLead: false,
				roles: ['Firmware Developer'],
			},
		],
	},
	{
		guid: 'member-noah-kim',
		name: 'Noah Kim',
		headShot: placeholderImage('Noah Kim', [400, 400]),
		major: 'Civil Engineering',
		links: {
			linkedin: 'https://www.linkedin.com/in/noahkim',
		},
		yearsActive: {
			start: 22,
			end: 24,
		},
		isActive: false,
		projects: [
			{
				slug: 'project-four',
				title: 'Project Four',
				isLead: false,
				roles: ['Structures Analyst', 'CAD Designer'],
			},
		],
	},
];
