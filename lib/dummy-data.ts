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
			{ name: "HompimShop", href: "/hompimshop" },
			{ name: "HompimPay", href: "/hompimpay" },
		],
	},
	{
		label: "About Us",
		href: "/about-us",
	},
];

export const serviceFilters = [
	{ name: "All", slug: null },
	{ name: "Photography", slug: "photography" },
	{ name: "Web Development", slug: "web-development" },
	{ name: "UI/UX Design", slug: "ui-ux-design" },
	{ name: "Graphic Design", slug: "graphic-design" },
	{ name: "Content Creation", slug: "content-creation" },
	{ name: "SEO Optimization", slug: "seo-optimization" },
	{ name: "Digital Marketing", slug: "digital-marketing" },
	{ name: "Brand Strategy", slug: "brand-strategy" },
	{ name: "Video Production", slug: "video-production" },
	{ name: "App Development", slug: "app-development" },
	{ name: "IT Consulting", slug: "it-consulting" },
];

export const heroSlides = [
	{
		src: "/images/hero1.jpg",
		title: "Grow and Glow Your Brand's Wow",
		description:
			"Help every business reach its full digital potential by empowering the best young talent.",
	},
	{
		src: "/images/hero2.jpg",
		title: "Your Partner in Digital Transformation",
		description:
			"Transform your business with our comprehensive digital marketing and SaaS solutions tailored to your needs.",
	},
	{
		src: "/images/hero3.jpg",
		title: "Unleashing Creativity in the Digital Realm",
		description:
			"Empower your brand with creative solutions and strategic digital marketing that make a lasting impact.",
	},
];

export const workFilters = [
	{
		label: "Services",
		slug: "service",
	},
	{
		label: "Products",
		slug: "product",
	},
];

export const works = [
	{
		imageSrc: "/images/work1.jpeg",
		imageAlt: "Rebranding Elevanto This Summer",
		title: "Rebranding Elevanto This Summer",
		type: "service",
		subtype: "ui/ux design",
		subTypeName: "UI/UX Design",
		subTypeSlug: "ui-ux-design",
		description:
			"Elevanto, a prominent digital marketing agency, underwent a rebranding this summer to align with contemporary design trends. This transformation led to a notable boost in user engagement.",
		slug: "rebranding-elevanto-this-summer",
	},
	{
		imageSrc: "/images/work2.jpeg",
		imageAlt: "Photography for Nature Magazine",
		title: "Photography for Nature Magazine",
		type: "service",
		subtype: "photography",
		subTypeName: "Photography",
		subTypeSlug: "photography",
		description:
			"Captured stunning landscapes and wildlife for Nature Magazine, showcasing the beauty of the natural world and enhancing their editorial content.",
		slug: "photography-for-nature-magazine",
	},
	{
		imageSrc: "/images/work3.jpeg",
		imageAlt: "Developing E-commerce Platform for TechMart",
		title: "Developing E-commerce Platform for TechMart",
		type: "service",
		subtype: "web development",
		subTypeName: "Web Development",
		subTypeSlug: "web-development",
		description:
			"Built a modern and responsive e-commerce platform for TechMart, providing a seamless shopping experience and improving customer satisfaction.",
		slug: "developing-ecommerce-platform-for-techmart",
	},
	{
		imageSrc: "/images/work4.jpeg",
		imageAlt: "Graphic Design for Tech Conference by InnovateTech",
		title: "Graphic Design for Tech Conference by InnovateTech",
		type: "service",
		subtype: "graphic design",
		subTypeName: "Graphic Design",
		subTypeSlug: "graphic-design",
		description:
			"Designed engaging visuals and marketing materials for InnovateTech's leading tech conference, enhancing attendee experience and brand visibility.",
		slug: "graphic-design-for-tech-conference-by-innovate-tech",
	},
	{
		imageSrc: "/images/work5.jpeg",
		imageAlt: "SEO Optimization for StartupBoost",
		title: "SEO Optimization for StartupBoost",
		type: "service",
		subtype: "seo optimization",
		subTypeName: "SEO Optimization",
		subTypeSlug: "seo-optimization",
		description:
			"Implemented effective SEO strategies for StartupBoost, significantly improving their search engine rankings and driving organic traffic.",
		slug: "seo-optimization-for-startup-boost",
	},
	{
		imageSrc: "/images/work6.jpeg",
		imageAlt: "Content Creation for Wanderlust",
		title: "Content Creation for Wanderlust",
		type: "service",
		subtype: "content creation",
		subTypeName: "Content Creation",
		subTypeSlug: "content-creation",
		description:
			"Created compelling and informative content for Wanderlust, a popular travel blog, engaging a wide audience and boosting their readership.",
		slug: "content-creation-for-wanderlust",
	},
	{
		imageSrc: "/images/work7.jpeg",
		imageAlt: "Digital Marketing for Fashion Brand Elegance",
		title: "Digital Marketing for Fashion Brand Elegance",
		type: "service",
		subtype: "digital marketing",
		subTypeName: "Digital Marketing",
		subTypeSlug: "digital-marketing",
		description:
			"Developed and executed digital marketing campaigns for Elegance, a fashion brand, boosting their online presence and driving sales.",
		slug: "digital-marketing-for-fashion-brand-elegance",
	},
	{
		imageSrc: "/images/work8.jpeg",
		imageAlt: "Brand Strategy for Tech Startup InnovateX",
		title: "Brand Strategy for Tech Startup InnovateX",
		type: "service",
		subtype: "brand strategy",
		subTypeName: "Brand Strategy",
		subTypeSlug: "brand-strategy",
		description:
			"Crafted a comprehensive brand strategy for InnovateX, a tech startup, establishing a strong market presence and aligning their brand with business goals.",
		slug: "brand-strategy-for-tech-startup-innovate-x",
	},
	{
		imageSrc: "/images/work9.jpeg",
		imageAlt: "Video Production for FutureTech Corporate Event",
		title: "Video Production for Corporate Event at FutureTech",
		type: "service",
		subtype: "video production",
		subTypeName: "Video Production",
		subTypeSlug: "video-production",
		description:
			"Produced high-quality videos for FutureTech's corporate event, capturing key moments and highlights to enhance their event coverage.",
		slug: "video-production-for-corporate-event-future-tech",
	},
	{
		imageSrc: "/images/work10.jpeg",
		imageAlt: "App Development for Healthcare Provider HealthFirst",
		title: "App Development for Healthcare Provider HealthFirst",
		type: "service",
		subtype: "app development",
		subTypeName: "App Development",
		subTypeSlug: "app-development",
		description:
			"Developed an innovative healthcare app for HealthFirst, enhancing patient care and engagement with user-friendly features and functionality.",
		slug: "app-development-for-healthcare-provider-health-first",
	},
	{
		imageSrc: "/images/work11.jpeg",
		imageAlt: "IT Consulting for Financial Services Firm FinServe",
		title: "IT Consulting for Financial Services Firm FinServe",
		type: "service",
		subtype: "it consulting",
		subTypeName: "IT Consulting",
		subTypeSlug: "it-consulting",
		description:
			"Provided expert IT consulting services for FinServe, a financial services company, optimizing their tech infrastructure and improving operational efficiency.",
		slug: "it-consulting-for-financial-services-firm-fin-serve",
	},
	{
		imageSrc: "/images/hompimshop.jpeg",
		imageAlt: "HompimShop",
		title: "HompimShop",
		type: "product",
		description:
			"A comprehensive e-commerce platform offering a seamless shopping experience with a robust backend and an intuitive frontend.",
		slug: "hompimshop",
	},
	{
		imageSrc: "/images/hompimpay.jpeg",
		imageAlt: "HompimPay",
		title: "HompimPay",
		type: "product",
		description:
			"A secure and efficient payment processing system, enhancing the financial transactions with advanced security measures and user-friendly features.",
		slug: "hompimpay",
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

export const socialMediaLinks = [
	{
		href: "https://facebook.com",
		alt: "Facebook",
		Icon: Facebook,
	},
	{
		href: "https://x.com/hompim_hq",
		alt: "Twitter",
		Icon: Twitter,
	},
	{
		href: "https://instagram.com/hompim_hq",
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
