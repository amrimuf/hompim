import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Gallery from "@/components/ui/gallery";
import Hero from "@/components/ui/hero";
import { features } from "@/lib/dummy-data";

export default function Home() {
	return (
		<main>
			<Hero />
			<Section
				id="features"
				title="Our Works"
				gradient="bg-gradient-to-r from-primary via-secondary to-primary"
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							imgSrc={feature.imageSrc}
							imgAlt={feature.imageAlt}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</Section>

			<Gallery />
		</main>
	);
}
