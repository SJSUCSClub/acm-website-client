import { cn } from "../../../utils/cn";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  footer?: string;
  required: boolean;
}

export const Input: React.FC<IInputProps> = ({
  label,
  footer = "",
  placeholder,
  required,
  className,
  ...props
}) => (
  <div>
    <div className="flex">
      <p className="text-neutral font-semibold mb-2">{label}</p>
      {required && <p className="text-red-500">*</p>}
    </div>
    <input
      className={cn(
        "rounded-xl bg-border text-text px-[16px] py-[10px] focus:outline-none w-full placeholder-neutral",
        className,
      )}
      placeholder={placeholder}
      {...props}
    />
    {footer !== "" && <p className="text-neutral mt-2">{footer}</p>}
  </div>
);
