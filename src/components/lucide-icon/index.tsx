import type { LucideIcon as LucideIconType, LucideProps } from "lucide-react";

export type LucideIconProps = {
  Icon: LucideIconType;
} & LucideProps;

export const LucideIcon = ({ Icon, size = 16, ...props }: LucideIconProps) => {
  return <Icon size={size} {...props} />;
};
