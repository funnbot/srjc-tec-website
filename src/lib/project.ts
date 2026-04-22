import { placeholderImage } from '$lib/utils';
import * as v from 'valibot';

const ProjectMemberSchema = v.object({
	slug: v.string(),
	name: v.string(),
	role: v.string(),
	href: v.optional(v.string()),
});

export type ProjectMemberInput = v.InferInput<typeof ProjectMemberSchema>;
export type ProjectMember = v.InferOutput<typeof ProjectMemberSchema>;

const DevlogImageMediaSchema = v.object({
	type: v.literal('image'),
	src: v.string(),
	alt: v.string(),
	caption: v.optional(v.string()),
});

const DevlogVideoMediaSchema = v.object({
	type: v.literal('video'),
	src: v.string(),
	title: v.optional(v.string()),
	poster: v.optional(v.string()),
	embed: v.optional(v.boolean()),
	caption: v.optional(v.string()),
});

const DevlogMediaSchema = v.union([
	DevlogImageMediaSchema,
	DevlogVideoMediaSchema,
]);

export type DevlogMediaInput = v.InferInput<typeof DevlogMediaSchema>;
export type DevlogMedia = v.InferOutput<typeof DevlogMediaSchema>;

const DevlogFileSchema = v.object({
	label: v.string(),
	href: v.string(),
	description: v.optional(v.string()),
});

export type DevlogFileInput = v.InferInput<typeof DevlogFileSchema>;
export type DevlogFile = v.InferOutput<typeof DevlogFileSchema>;

const DevlogEntrySchema = v.object({
	id: v.string(),
	title: v.optional(v.string()),
	date: v.string(),
	bodyHtml: v.string(),
	media: v.optional(v.array(DevlogMediaSchema)),
	files: v.optional(v.array(DevlogFileSchema)),
	openByDefault: v.optional(v.boolean()),
});

export type DevlogEntryInput = v.InferInput<typeof DevlogEntrySchema>;
export type DevlogEntry = v.InferOutput<typeof DevlogEntrySchema>;

const ProjectPageSchema = v.object({
	guid: v.string(),
	slug: v.string(),
	title: v.string(),
	shortDescription: v.string(),
	detailedDescription: v.string(),
	coverImage: v.string(),
	coverImageAlt: v.string(),
	status: v.string(),
	leads: v.optional(v.array(ProjectMemberSchema)),
	contributors: v.optional(v.array(ProjectMemberSchema)),
	devlogs: v.array(DevlogEntrySchema),
});

export type ProjectPageInput = v.InferInput<typeof ProjectPageSchema>;
export type ProjectPageData = v.InferOutput<typeof ProjectPageSchema>;

export type ProjectData = ProjectPageData;

const ProjectCardSchema = v.object({
	slug: v.string(),
	title: v.string(),
	description: v.string(),
	coverImage: v.string(),
	status: v.string(),
});

export type ProjectCardInput = v.InferInput<typeof ProjectCardSchema>;
export type ProjectCardData = v.InferOutput<typeof ProjectCardSchema>;

export const projectToCardData = (project: ProjectPageData): ProjectCardData => {
	return v.parse(ProjectCardSchema, {
		slug: project.slug,
		title: project.title,
		description: project.shortDescription,
		coverImage: project.coverImage,
		status: project.status,
	});
};

export const TEST_PROJECTS: ProjectPageData[] = [
	{
		guid: 'project-guid-1',
		slug: 'project-one',
		title: 'Project One',
		shortDescription: 'A compact autonomous rover for campus navigation.',
		detailedDescription:
			'Project One explores lightweight robotics, sensor fusion, and robust control loops for semi-autonomous movement in real-world campus environments.',
		coverImage: placeholderImage('Project One'),
		coverImageAlt: 'Project One rover prototype',
		status: 'In Progress',
		leads: [
			{
				slug: 'member-ava-patel',
				name: 'Ava Patel',
				role: 'Project Lead',
			},
		],
		contributors: [
			{
				slug: 'member-noah-kim',
				name: 'Noah Kim',
				role: 'Mechanical Systems',
			},
		],
		devlogs: [
			{
				id: 'project-one-log-2026-03-22',
				title: 'Chassis and sensor baseline complete',
				date: '2026-03-22',
				bodyHtml:
					'<p>We finalized our initial chassis layout and calibrated the distance sensors. Next sprint focuses on navigation reliability and obstacle recovery.</p>',
				media: [
					{
						type: 'image',
						src: placeholderImage('Project One Build Log', [1280, 720]),
						alt: 'Project One test chassis on bench',
						caption: 'Bench testing with first-pass sensor array.',
					},
				],
				openByDefault: true,
			},
		],
	},
	{
		guid: 'project-guid-2',
		slug: 'project-two',
		title: 'Project Two',
		shortDescription: 'An energy dashboard for workshop and lab spaces.',
		detailedDescription:
			'Project Two collects and visualizes usage data from workshop equipment to help teams schedule efficiently and reduce power waste.',
		coverImage: placeholderImage('Project Two'),
		coverImageAlt: 'Project Two dashboard view',
		status: 'Completed',
		devlogs: [],
	},
	{
		guid: 'project-guid-3',
		slug: 'project-three',
		title: 'Project Three',
		shortDescription: 'Portable materials testing rig for rapid prototypes.',
		detailedDescription:
			'Project Three delivers a modular testing platform that supports quick measurements for student-built structures and components.',
		coverImage: placeholderImage('Project Three'),
		coverImageAlt: 'Project Three testing apparatus',
		status: 'Planned',
		devlogs: [],
	},
	{
		guid: 'project-guid-4',
		slug: 'project-four',
		title: 'Project Four',
		shortDescription: 'Low-cost environmental sensing network for classrooms.',
		detailedDescription:
			'Project Four is designing a distributed sensor network to monitor classroom air conditions and provide accessible historical trends.',
		coverImage: placeholderImage('Project Four'),
		coverImageAlt: 'Project Four sensor node mockup',
		status: 'Not Started',
		devlogs: [],
	},
].map((project) => v.parse(ProjectPageSchema, project));

export const TEST_PROJECT_CARDS: ProjectCardData[] = TEST_PROJECTS.map(
	(project) => projectToCardData(project),
);
