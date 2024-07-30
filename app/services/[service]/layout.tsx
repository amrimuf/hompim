import { Metadata } from "next";
import Page from "./page"; // import your Demo's page
import { features } from "@/lib/dummy-data";
import { generateTitle } from "@/lib/metadata";

interface Params {
	service: string;
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const filteredFeature = features.find(
		(feature) => feature.subTypeSlug === params.service
	);

	const titleSegment = filteredFeature
		? filteredFeature.subTypeName
		: "Service";
	const title = generateTitle(titleSegment);

	return {
		title,
	};
}

export default Page;
