import { ReactNode } from "react";

export function HomeIcon({alt = "KJTR Games' Icon"}: {alt: String}): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      role="image"
      area-label={alt}>
      <path d="M 0 0 L 0 4 L 4 4 A 4 10 0 0 1 0 14 V 16 A 6 11 0 0 0 6 5 L 6 0 Z M 7 0 V 16 L 9 16 L 9 0 Z M 10 0 L 16 0 L 16 4 L 10 4 Z M 10 5 H 16 V 10 A 6 6 0 0 1 10 16 L 10 14 A 5 5 0 0 0 14 9 L 10 9 Z" />
    </svg>
  );
}