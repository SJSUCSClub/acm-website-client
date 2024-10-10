import { cn } from "../../../utils/cn";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  footer?: string,
  required: boolean,
}

export const Input: React.FC<IInputProps> = ({
  label,
  footer="",
  placeholder,
  required,
  className,
  ...props
}) => (
  <div>
    <div className="flex">
    <p className="text-neutral">{label}</p>
    {required && <p className="text-red-500">*</p>}
    </div>
      <input
    className={cn(
      "rounded-xl bg-border text-text px-[16px] py-[10px] focus:outline-none my-2",
      className,
    )}
    placeholder={placeholder}
    {...props}
  />
  {footer !== "" && <p className="text-neutral">{footer}</p>}
  </div>
);
