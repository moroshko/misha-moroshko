import { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

const COLORS = {
  red: "#FECDD3",
  green: "#A7F3D0",
  yellow: "#FDE68A",
  purple: "#E9D5FF",
} as const;

type HighlightProps = {
  color: keyof typeof COLORS;
  delay?: number;
  duration?: number;
  children: ReactNode;
};

export default function Highlight({
  color,
  delay = 0,
  duration = 800,
  children,
}: HighlightProps) {
  return (
    <RoughNotation
      color={COLORS[color]}
      animationDelay={delay}
      animationDuration={duration}
      type="highlight"
      iterations={1}
      multiline={true}
      show={true}
    >
      {children}
    </RoughNotation>
  );
}
