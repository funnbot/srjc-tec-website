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

const ProjectMemberRoleSchema = v.object({
	slug: v.string(),
	title: v.string(),
	roles: v.array(v.string()),
});

const OfficerSchema = v.pipe(
	v.object({
		roles: v.object({
			current: v.array(v.string()),
			past: v.array(v.string()),
		}),
		biography: v.string(),
	}),
	v.check(
		(data) => data.roles.current.length > 0 || data.roles.past.length > 0,
		'Officer must have at least one current or past role',
	),
);

const UrlTransformSchema = v.pipe(
	v.string(),
	v.url(),
	v.transform((url) => new URL(url)),
);

const ClubMemberSchema = v.object({
	slug: v.string(),
	name: v.string(),
	headShot: UrlTransformSchema,
	major: v.string(),
	linkedin: v.optional(UrlTransformSchema),
	isCurrent: v.boolean(),
	yearsActive: YearRangeSchema,
	projects: v.object({
		lead: v.array(ProjectMemberRoleSchema),
		member: v.array(ProjectMemberRoleSchema),
	}),
	officer: v.optional(OfficerSchema),
});

export type ClubMemberInput = v.InferInput<typeof ClubMemberSchema>;
export type ClubMember = v.InferOutput<typeof ClubMemberSchema>;

export const TEST_CLUB_MEMBERS: ClubMember[] = [
	{
		slug: 'member-ava-patel',
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
		projects: {
			lead: [],
			member: [
				{
					slug: 'project-one',
					title: 'Project One',
					roles: ['Firmware Developer'],
				},
			],
		},
		officer: {
			roles: {
				current: ['Vice President'],
				past: ['Secretary'],
			},
			biography:
				'Ava is a senior studying Computer Engineering. She has a passion for embedded systems and has been an active member of the club for three years.',
		},
	},
	{
		slug: 'member-noah-kim',
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
		projects: {
			lead: [],
			member: [
				{
					slug: 'project-four',
					title: 'Project Four',
					roles: ['Structures Analyst', 'CAD Designer'],
				},
			],
		},
	},
].map((o) => v.parse(ClubMemberSchema, o));
