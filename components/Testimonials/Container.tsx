import { clsx } from "clsx";

export function Container({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={clsx(className, "px-6 lg:px-8")}>
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				{children}
			</div>
		</div>
	);
}
