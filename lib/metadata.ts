export const APP_NAME = "Hompim";

export function generateTitle(titleSegment?: string | undefined): string {
	if (titleSegment) {
		return `${titleSegment} | ${APP_NAME}`;
	}
	return APP_NAME;
}
