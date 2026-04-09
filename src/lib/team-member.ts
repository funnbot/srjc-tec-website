import * as vb from "valibot";

export interface Links {
	linkedin?: string;
	github?: string;
	website?: string;
	other?: string;
}

export interface ValidYearRange {
	start: number;
	end?: number;
}

const YearRangeSchema = vb.object({
	start: vb.pipe(vb.number(), vb.value)
})

export interface ProjectMemberRole {
	slug: string;
	title: string;
	isLead: boolean;
	roles: string[]; // Team lead, Developer, Designer, etc.
}

export interface OfficialsRole {
	role: string;
	startYear: number;
}

export interface ClubMember {
	guid: string;
	name: string;
	headShot: string;
	major: string;
	links: Links;
	yearsActive: ValidYearRange;
	isActive: boolean;
	projects: ProjectMemberRole[];
}

export interface ClubOfficer extends ClubMember {
	officialsRoles: OfficialsRole[]; // "President", "Vice President", "Treasurer", etc.
	biography: string;
}
