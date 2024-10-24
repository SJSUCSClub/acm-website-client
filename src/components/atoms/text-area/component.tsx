import { cn } from "../../../utils/cn";

export interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  footer?: string;
  required: boolean;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  footer = "",
  required,
  className,
  ...props
}) => (
  <div>
    <div className="flex">
      <p className="text-neutral font-semibold mb-2">{label}</p>
      {required && <p className="text-red-500">*</p>}
    </div>
    <textarea
      maxLength={160}
      className={cn(
        "rounded-xl bg-border text-text px-[16px] py-[10px] focus:outline-none w-full placeholder-neutral mb-2 border-border-hovered border-2",
        className,
      )}
      {...props}
    />
    {footer !== "" && <p className="text-neutral mb-2">{footer}</p>}
  </div>
);
