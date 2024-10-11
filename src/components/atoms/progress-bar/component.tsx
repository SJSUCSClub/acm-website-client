import { cn } from "../../../utils/cn";

type Variant = "primary" | "secondary" | "tertiary" | "ghost";

export interface IProgressBarProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  className,
  ...props
}) => (
  <progress
    className={cn(
      "flex items-center justify-center gap-[10px] rounded-full py-[10px] px-[20px] border-2 disabled:text-neutral font-bold",
      className,
    )}
    {...props}
/>
);
