import { Metadata } from "next";
import Page from "./page";
import { generateTitle } from "@/lib/metadata";

export const metadata: Metadata = {
	title: generateTitle("Contact"),
	description: "Your Description",
};

export default Page;
