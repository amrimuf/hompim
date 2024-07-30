import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaProps {
	className?: string;
	onClick?: () => void;
}

const Cta: React.FC<CtaProps> = ({ className = "", onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`btn-primary transition group ${className}`}
		>
			<Link href="/contact" className="flex items-center gap-1">
				Let&apos;s work together{" "}
				<ArrowRight className="transform transition-transform duration-300 ease-in-out group-hover:scale-x-150 origin-left" />
			</Link>
		</button>
	);
};

export default Cta;
