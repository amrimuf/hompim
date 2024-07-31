import { Metadata } from "next";
import Page from "./page"; // import your Demo's page
import { works } from "@/lib/dummy-data";
import { generateTitle } from "@/lib/metadata";

interface Params {
	service: string;
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const filteredService = works.find(
		(work) => work.subTypeSlug === params.service
	);

	const titleSegment = filteredService
		? filteredService.subTypeName
		: "Service";
	const title = generateTitle(titleSegment);

	return {
		title,
	};
}

export default Page;
