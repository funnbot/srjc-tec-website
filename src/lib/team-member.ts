import { placeholderImage } from '$lib/utils';
import * as v from 'valibot';

export interface Links {
	linkedin?: string;
	github?: string;
	website?: string;
	other?: string;
}

const currentYear = new Date().getFullYear();

const YearRangeSchema = v.object({
	start: v.pipe(v.number(), v.minValue(2000), v.maxValue(currentYear + 1)),
	end: v.optional(
		v.pipe(v.number(), v.minValue(2000), v.maxValue(currentYear + 1)),
	),
});

export type YearRangeInput = v.InferInput<typeof YearRangeSchema>;
export type ValidYearRange = v.InferOutput<typeof YearRangeSchema>;
export interface ProjectMemberRole {
	slug: string;
	title: string;
	isLead: boolean;
	roles: string[]; // Team lead, Developer, Designer, etc.
}

export interface OfficialsRole {
	role: string;
	isCurrent: boolean;
}

const ClubMemberSchema = v.object({
	guid: v.string(),
	name: v.string(),
	headShot: v.pipe(
		v.string(),
		v.url(),
		v.transform((url) => new URL(url)),
	),
	major: v.string(),
	linkedin: v.optional(v.string()),
	isCurrent: v.boolean(),
	yearsActive: YearRangeSchema,
	projects: v.array(
		v.object({
			slug: v.string(),
			title: v.string(),
			isLead: v.boolean(),
			roles: v.array(v.string()),
		}),
	),
});

export type ClubMemberInput = v.InferInput<typeof ClubMemberSchema>;
export type ClubMember = v.InferOutput<typeof ClubMemberSchema>;

const ClubOfficerSchema = v.object({
	...ClubMemberSchema.entries,
	officialsRoles: v.array(
		v.object({
			role: v.string(),
			isCurrent: v.boolean(),
		}),
	),
	biography: v.string(),
});

export type ClubOfficerInput = v.InferInput<typeof ClubOfficerSchema>;
export type ClubOfficer = v.InferOutput<typeof ClubOfficerSchema>;

function formatYearsActive(years: ValidYearRange): string {
	const result = `'${years.start.toString().substring(2)}`;
	if (years.end) {
		return result + `-'${years.end.toString().substring(2)}`;
	}
	return result;
}

function isOfficer(member: ClubMember | ClubOfficer): member is ClubOfficer {
	return 'officialsRoles' in member && member.officialsRoles.length > 0;
}

function transformClubMember(input: ClubMember | ClubOfficer): ClubMemberCard {
	const card: ClubMemberCard = {
		name: input.name,
		headShot: input.headShot.toString(),
		major: input.major,
		yearsActive: formatYearsActive(input.yearsActive),
		isCurrent: input.isCurrent,
		projects: input.projects.map((proj) => ({
			slug: proj.slug,
			title: proj.title,
			role: proj.roles.join(', '),
		})),
	};

	if (input.linkedin !== undefined) {
		card.linkedIn = input.linkedin;
	}

	if (isOfficer(input)) {
		const officialRole = input.officialsRoles.find(
			(role) => role.isCurrent,
		)?.role;
		card.pastOfficialRoles = input.officialsRoles
			.filter((role) => !role.isCurrent)
			.map((role) => role.role);
		card.biography = input.biography;
	}

	return card;
}

export interface ClubMemberCard {
	name: string;
	headShot: string;
	major: string;
	yearsActive: string;
	isCurrent: boolean;

	projects: {
		slug: string;
		title: string;
		role: string;
	}[];

	linkedIn?: string;

	officialRole?: string;
	pastOfficialRoles?: string[];
	biography?: string;
}

export const TEST_CLUB_MEMBERS: ClubMember[] = [
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
			start: 2025,
		},
		isCurrent: true,
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
			start: 2022,
			end: 2024,
		},
		isCurrent: false,
		projects: [
			{
				slug: 'project-four',
				title: 'Project Four',
				isLead: false,
				roles: ['Structures Analyst', 'CAD Designer'],
			},
		],
	},
].map((o) => v.parse(ClubMemberSchema, o));

export const TEST_CLUB_OFFICERS: ClubOfficer[] = [
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
			start: 2024,
			end: 2026,
		},
		isCurrent: true,
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
				isCurrent: true,
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
			start: 2023,
			end: 2025,
		},
		isCurrent: false,
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
				isCurrent: false,
			},
		],
		biography:
			'Leo managed budgeting for prototypes and helped standardize sourcing and component tracking.',
	},
].map((o) => v.parse(ClubOfficerSchema, o));
