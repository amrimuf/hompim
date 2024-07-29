export interface LinkItem {
	label: string;
	href?: string;
	content?: { name: string; href: string }[];
}

export interface Article {
	title: string;
	description: string;
	content: string;
}
