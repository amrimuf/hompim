import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaProps {
	className?: string;
}

const Cta: React.FC<CtaProps> = ({ className = "" }) => {
	return (
		<button className={`btn-primary transition group ${className}`}>
			<Link href="/contact" className="flex items-center gap-2">
				Let&apos;s work together{" "}
				<ArrowRight className="transform transition-transform duration-300 ease-in-out group-hover:scale-x-150 origin-left" />
			</Link>
		</button>
	);
};

export default Cta;
