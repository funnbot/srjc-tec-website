import { placeholderImage } from './utils';

export interface TeamMember {
	guid: string;
	name: string;
	headshot: string;
	major: string;
	linkedIn?: string;
	github?: string;
	yearStart: string; // e.g., "26"
	yearEnd?: string; // undefined if only active in one year
	isActive: boolean;
	projects: ProjectMemberRole[];
}

export interface Officer extends TeamMember {
	officialsRole: string; // "President", "Vice President", "Treasurer", etc.
	biography: string;
	roleStartYear?: string; // When they took this officer role
	roleEndYear?: string; // When they left, if applicable
}

export interface ProjectMemberRole {
	projectGuid: string;
	projectTitle: string;
	role: string; // Team lead, Developer, Designer, etc.
}

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

export const TEST_MEMBERS: (TeamMember | Officer)[] = [
	{
		guid: 'member-maya-chen',
		name: 'Maya Chen',
		headshot: placeholderImage('Maya Chen', [400, 400]),
		major: 'Mechanical Engineering',
		linkedIn: 'https://www.linkedin.com/in/mayachen',
		github: 'https://github.com/mayachen',
		yearStart: '24',
		yearEnd: '26',
		isActive: true,
		projects: [
			{
				projectGuid: 'project-one',
				projectTitle: 'Project One',
				role: 'Systems Lead',
			},
			{
				projectGuid: 'project-three',
				projectTitle: 'Project Three',
				role: 'CAD Designer',
			},
		],
		officialsRole: 'President',
		biography:
			'Maya focuses on project planning and mentoring new members in prototyping and design reviews.',
		roleStartYear: '25',
	},
	{
		guid: 'member-leo-martinez',
		name: 'Leo Martinez',
		headshot: placeholderImage('Leo Martinez', [400, 400]),
		major: 'Electrical Engineering',
		linkedIn: 'https://www.linkedin.com/in/leomartinez',
		github: 'https://github.com/leomartinez',
		yearStart: '23',
		yearEnd: '25',
		isActive: false,
		projects: [
			{
				projectGuid: 'project-two',
				projectTitle: 'Project Two',
				role: 'PCB Engineer',
			},
		],
		officialsRole: 'Treasurer',
		biography:
			'Leo managed budgeting for prototypes and helped standardize sourcing and component tracking.',
		roleStartYear: '24',
		roleEndYear: '25',
	},
	{
		guid: 'member-ava-patel',
		name: 'Ava Patel',
		headshot: placeholderImage('Ava Patel', [400, 400]),
		major: 'Computer Engineering',
		linkedIn: 'https://www.linkedin.com/in/avapatel',
		github: 'https://github.com/avapatel',
		yearStart: '25',
		isActive: true,
		projects: [
			{
				projectGuid: 'project-one',
				projectTitle: 'Project One',
				role: 'Firmware Developer',
			},
		],
	},
	{
		guid: 'member-noah-kim',
		name: 'Noah Kim',
		headshot: placeholderImage('Noah Kim', [400, 400]),
		major: 'Civil Engineering',
		linkedIn: 'https://www.linkedin.com/in/noahkim',
		yearStart: '22',
		yearEnd: '24',
		isActive: false,
		projects: [
			{
				projectGuid: 'project-four',
				projectTitle: 'Project Four',
				role: 'Structures Analyst',
			},
		],
	},
];
