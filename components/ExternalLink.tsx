import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ExtrnalLink({ href, children }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
