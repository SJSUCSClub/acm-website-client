import { Btn } from '../../atoms/btn';
import RightArrow from "/about/rightarrow.svg";

interface Props
  extends Omit<
    React.ComponentProps<typeof Btn>,
    'children' | 'href'
  > {
}

export const PlanBtn: React.FC<Props> = ({ className,variant, ...props }) => {
    return (
    <Btn
      className={className}
      variant={variant}
      {...props}
    >
      <a
        href=""
        className="flex gap-2"
        onClick={(e) => e.preventDefault()}

      >
        <span className=""> Choose this plan{variant==="ghost" && " >"}</span>
        <img src={RightArrow} alt="right arrow" />
      </a>
    </Btn>
  );
};