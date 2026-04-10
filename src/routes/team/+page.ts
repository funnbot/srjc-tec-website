import type { PageLoad } from './$types';

// Replace this import with the module that holds your build-time team data.
import { TEST_CLUB_MEMBERS, TEST_CLUB_OFFICERS } from '$lib/team-member';

export const load: PageLoad = () => {
	return {
		officers: TEST_CLUB_OFFICERS,
		members: TEST_CLUB_MEMBERS,
	};
};
