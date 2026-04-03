import type { PageLoad } from './$types';

// Replace this import with the module that holds your build-time team data.
import { TEST_MEMBERS } from '$lib/project';

export const load: PageLoad = () => {
	const officers = TEST_MEMBERS.filter((member) => !!member.officialsRole);
	const members = TEST_MEMBERS.filter((member) => !member.officialsRole);

	return {
		officers,
		members,
	};
};
