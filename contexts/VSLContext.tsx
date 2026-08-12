"use client";

import { createContext, useContext, useRef, useCallback, useState } from "react";

interface VSLContextValue {
	registerPlaceholder: (el: HTMLDivElement | null) => void;
	placeholderRef: React.MutableRefObject<HTMLDivElement | null>;
	/** Increments on every register/unregister so VSLPlayer can re-run effects */
	placeholderVersion: number;
}

const VSLContext = createContext<VSLContextValue>({
	registerPlaceholder: () => {},
	placeholderRef: { current: null },
	placeholderVersion: 0,
});

export function VSLProvider({ children }: { children: React.ReactNode }) {
	const placeholderRef = useRef<HTMLDivElement | null>(null);
	const [placeholderVersion, setPlaceholderVersion] = useState(0);

	const registerPlaceholder = useCallback((el: HTMLDivElement | null) => {
		placeholderRef.current = el;
		setPlaceholderVersion((v) => v + 1);
	}, []);

	return (
		<VSLContext.Provider
			value={{ registerPlaceholder, placeholderRef, placeholderVersion }}>
			{children}
		</VSLContext.Provider>
	);
}

export function useVSL() {
	return useContext(VSLContext);
}
