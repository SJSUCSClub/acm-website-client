interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={`${className} bg-white rounded-md`}
    {...props}
  >
    {children}
  </div>
);