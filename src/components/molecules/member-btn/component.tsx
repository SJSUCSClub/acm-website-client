import { Btn } from '../../atoms/btn';
import RightArrow from "/about/rightarrow.svg";

interface Props
  extends Omit<
    React.ComponentProps<typeof Btn>,
    'variant' | 'children' | 'href'
  > {
}

export const MemberBtn: React.FC<Props> = ({ className, ...props }) => {
    return (
    <Btn
      className={className}
      variant="primary"
      {...props}
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf1KNg9T5sPAM9EtOm3i_bQctlq81b7QIns1uNkWtlSCpzOvg/viewform"
        target="_blank"
        className="flex gap-3 no-underline font-bold"
      >
        <span className="text-white"> Become a Member </span>
        <img src={RightArrow} alt="right arrow" />
      </a>
    </Btn>
  );
};