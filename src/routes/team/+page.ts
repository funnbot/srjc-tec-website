import type { PageLoad } from './$types';

import { TEST_CLUB_MEMBERS, type ClubMember } from '$lib/team-member';
import { arraySplitBy } from '$lib/utils';

export const load: PageLoad = () => {
	function filter(member: ClubMember): boolean {
		return (
			member.officer !== undefined && member.officer.roles.current.length > 0
		);
	}

	const [currentOfficers, members] = arraySplitBy(TEST_CLUB_MEMBERS, filter);

	return {
		currentOfficers,
		members,
	};
};
