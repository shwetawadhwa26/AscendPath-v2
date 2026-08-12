"use client";

import { useState } from "react";
import VSLPlayer from "@/components/VSLs/VSLPlayer";

export default function VSLPlayerWrapper() {
	const [isDesktop] = useState(() => window.innerWidth >= 700);


	if (!isDesktop) return null;
	return <VSLPlayer />;
}
