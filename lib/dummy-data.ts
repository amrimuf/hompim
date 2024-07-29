import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const headerLinks = [
	{
		label: "Services",
		content: [
			{ name: "Photography", href: "/services/photography" },
			{ name: "Web Development", href: "/services/web-development" },
			{ name: "UI/UX Design", href: "/services/ui-ux-design" },
			{ name: "Graphic Design", href: "/services/graphic-design" },
			{ name: "Content Creation", href: "/services/content-creation" },
			{ name: "SEO Optimization", href: "/services/seo-optimization" },
			{ name: "Digital Marketing", href: "/services/digital-marketing" },
			{ name: "Brand Strategy", href: "/services/brand-strategy" },
			{ name: "Video Production", href: "/services/video-production" },
			{ name: "App Development", href: "/services/app-development" },
			{ name: "IT Consulting", href: "/services/it-consulting" },
		],
	},
	{
		label: "Products",
		content: [
			{ name: "HompimShop", href: "/cases/hompimshop" },
			{ name: "HompimPay", href: "/cases/hompimpay" },
		],
	},
	{
		label: "About Us",
		href: "/about-us",
	},
];

export const filters = [
	{ name: "All", slug: null },
	{ name: "UI/UX Design", slug: "ui-ux-design" },
	{ name: "Web Development", slug: "web-development" },
	{ name: "Photography", slug: "photography" },
];

export const slides = [
	{
		src: "/images/hero1.jpeg",
		title: "Grow and Glow Your Brand's Wow",
		description:
			"Help every business reach its full digital potential by empowering the best young talent.",
	},
	{
		src: "/images/hero2.jpeg",
		title: "Your Partner in Digital Transformation",
		description:
			"Transform your business with our comprehensive digital marketing and SaaS solutions tailored to your needs.",
	},
	{
		src: "/images/hero3.jpeg",
		title: "Unleashing Creativity in the Digital Realm",
		description:
			"Empower your brand with creative solutions and strategic digital marketing that make a lasting impact.",
	},
];

export const features = [
	{
		imageSrc: "/images/case1.jpeg",
		imageAlt: "Rebranding Elevanto This Summer",
		title: "Rebranding Elevanto This Summer",
		type: "service",
		subtype: "ui/ux design",
		subTypeName: "UI/UX Design",
		subTypeSlug: "ui-ux-design",
		description:
			"Elevanto, a prominent digital marketing agency, underwent a rebranding to align with contemporary design trends. This transformation led to a notable boost in user engagement.",
		slug: "rebranding-elevanto-this-summer",
	},
	{
		imageSrc: "/images/case2.jpeg",
		imageAlt: "Revamp of TechWave Solutions",
		title: "Revamp of TechWave Solutions",
		type: "service",
		subtype: "web development",
		subTypeName: "Web Development",
		subTypeSlug: "web-development",
		description:
			"TechWave Solutions required a refreshed look to enhance their online presence. Our redesign significantly improved their website's usability and functionality, leading to increased customer satisfaction.",
		slug: "revamp-of-techwave-solutions",
	},
	{
		imageSrc: "/images/case3.jpeg",
		imageAlt: "Creative Campaign for Bright Ideas",
		title: "Creative Campaign for Bright Ideas",
		type: "product",
		description:
			"Bright Ideas sought a creative marketing campaign to elevate their brand visibility. We designed a visually engaging strategy that greatly enhanced their lead generation and market presence.",
		slug: "creative-campaign-for-bright-ideas",
	},
	{
		imageSrc: "/images/case4.jpeg",
		imageAlt: "Modernize the Site for GreenTech",
		title: "Modernize the Site for GreenTech",
		type: "product",
		description:
			"GreenTech needed a modernized website to better showcase their innovative products. Our design included a sleek interface and optimized site performance, resulting in higher user retention.",
		slug: "modernize-the-site-for-greentech",
	},
	{
		imageSrc: "/images/case5.jpeg",
		imageAlt: "UX/UI Overhaul for ShopEase",
		title: "UX/UI Overhaul for ShopEase",
		type: "service",
		subtype: "ui/ux design",
		subTypeName: "UI/UX Design",
		subTypeSlug: "ui-ux-design",
		description:
			"ShopEase required a thorough UX/UI overhaul. Our focus was on improving usability and visual appeal, which led to enhanced user engagement and increased conversion rates.",
		slug: "ux-ui-overhaul-for-shopease",
	},
	{
		imageSrc: "/images/case6.jpeg",
		imageAlt: "Brand Identity Creation for Stellar",
		title: "Brand Identity Creation for Stellar",
		type: "service",
		subtype: "photography",
		subTypeName: "Photography",
		subTypeSlug: "photography",
		description:
			"Stellar sought a new brand identity to reflect their evolving growth. We developed a comprehensive brand design, including logo and marketing materials, which helped them stand out in a competitive market.",
		slug: "brand-identity-creation-for-stellar",
	},
	{
		imageSrc: "/images/case7.jpeg",
		imageAlt: "Digital Transformation for Urbanity",
		title: "Digital Transformation for Urbanity",
		type: "service",
		subtype: "web development",
		subTypeName: "Web Development",
		subTypeSlug: "web-development",
		description:
			"Urbanity needed a digital transformation to stay ahead in the industry. We revamped their digital strategy and platform, leading to a better user experience and significant business growth.",
		slug: "digital-transformation-for-urbanity",
	},
	{
		imageSrc: "/images/case8.jpeg",
		imageAlt: "Marketing Strategy for HealthCareX",
		title: "Marketing Strategy for HealthCareX",
		type: "product",
		description:
			"HealthCareX needed a new marketing strategy to effectively reach their target audience. We developed and executed a plan that improved their online presence and attracted more clients.",
		slug: "marketing-strategy-for-healthcarex",
	},
	{
		imageSrc: "/images/case9.jpeg",
		imageAlt: "Website Redesign for FinSolve",
		title: "Website Redesign for FinSolve",
		type: "service",
		subtype: "web development",
		subTypeName: "Web Development",
		subTypeSlug: "web-development",
		description:
			"FinSolve’s website required a redesign to better showcase their expertise in financial solutions. Our design enhanced the site's aesthetics and functionality, providing a superior user experience.",
		slug: "website-redesign-for-finsolve",
	},
	{
		imageSrc: "/images/case10.jpeg",
		imageAlt: "Creative Design for InnovateX",
		title: "Creative Design for InnovateX",
		type: "product",
		description:
			"InnovateX needed a striking creative design for their new product launch. We crafted a visually compelling campaign that effectively communicated their product’s unique features and advantages.",
		slug: "creative-design-for-innovatex",
	},
	{
		imageSrc: "/images/case11.jpeg",
		imageAlt: "Revitalize Brand for EcoWave",
		title: "Revitalize Brand for EcoWave",
		type: "product",
		description:
			"EcoWave aimed to rejuvenate their brand to better reflect their commitment to sustainability. We developed a fresh brand identity and marketing materials, boosting their market presence.",
		slug: "revitalize-brand-for-ecowave",
	},
];

export const testimonials = [
	{
		quote: "The creative solutions provided by this agency transformed our brand's online presence.",
		author: "Alice Johnson",
		company: "BrandBoost",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Alice Johnson",
	},
	{
		quote: "Their digital marketing strategies helped us achieve our best sales quarter ever.",
		author: "Mark Spencer",
		company: "EcomSuccess",
		imageSrc: "/images/client1.jpeg",
		imageAlt: "Mark Spencer",
	},
	{
		quote: "We saw a 200% increase in website traffic thanks to their innovative SEO techniques.",
		author: "Emily Davis",
		company: "TechWave",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Emily Davis",
	},
	{
		quote: "Their SaaS solutions streamlined our workflow and improved team collaboration.",
		author: "James Wilson",
		company: "WorkSync",
		imageSrc: "/images/client1.jpeg",
		imageAlt: "James Wilson",
	},
	{
		quote: "The creative team at this agency brought our vision to life with stunning designs.",
		author: "Sarah Thompson",
		company: "DesignPro",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Sarah Thompson",
	},
	{
		quote: "Their digital marketing campaigns are data-driven and highly effective.",
		author: "David Lee",
		company: "MarketGenius",
		imageSrc: "/images/client1.jpeg",
		imageAlt: "David Lee",
	},
	{
		quote: "The SaaS platform they developed for us is intuitive and has significantly boosted our productivity.",
		author: "Jessica Brown",
		company: "ProductivityPlus",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Jessica Brown",
	},
	{
		quote: "Their creative approach to social media marketing has greatly increased our brand engagement.",
		author: "Michael Smith",
		company: "SocialBuzz",
		imageSrc: "/images/client1.jpeg",
		imageAlt: "Michael Smith",
	},
	{
		quote: "Thanks to their digital solutions, our online sales have doubled in just six months.",
		author: "Olivia Martinez",
		company: "SalesGrowth",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Olivia Martinez",
	},
	{
		quote: "The agency's expertise in digital marketing has been invaluable to our business growth.",
		author: "Daniel Anderson",
		company: "GrowthHackers",
		imageSrc: "/images/client1.jpeg",
		imageAlt: "Daniel Anderson",
	},
	{
		quote: "Their SaaS product has become an integral part of our daily operations.",
		author: "Sophia Williams",
		company: "DailyTask",
		imageSrc: "/images/client2.jpeg",
		imageAlt: "Sophia Williams",
	},
];

export const galleryItems = [
	{
		imgSrc: "/images/hero1.jpeg",
		imgAlt: "Gallery Image 1",
	},
	{
		imgSrc: "/images/hero2.jpwg",
		imgAlt: "Gallery Image 2",
	},
	{
		imgSrc: "/images/gallery3.png",
		imgAlt: "Gallery Image 3",
	},
];

export const socialMediaLinks = [
	{
		href: "https://facebook.com",
		alt: "Facebook",
		Icon: Facebook,
	},
	{
		href: "https://twitter.com",
		alt: "Twitter",
		Icon: Twitter,
	},
	{
		href: "https://instagram.com",
		alt: "Instagram",
		Icon: Instagram,
	},
	{
		href: "https://linkedin.com",
		alt: "LinkedIn",
		Icon: Linkedin,
	},
];

export const quickLinks = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/about",
		label: "About Us",
	},
	{
		href: "/products",
		label: "Products",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];
