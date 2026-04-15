import { type ValidYearRange } from '$lib/team-member';

export function formatYearsActive(years: ValidYearRange): string {
	const result = `'${years.start.toString().substring(2)}`;
	if (years.end) {
		return result + `-'${years.end.toString().substring(2)}`;
	}
	return result;
}
