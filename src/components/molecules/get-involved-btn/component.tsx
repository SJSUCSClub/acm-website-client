import { Btn } from '../../atoms/btn';
import RightArrow from "/about/rightarrow.svg";

interface Props
  extends Omit<
    React.ComponentProps<typeof Btn>,
    'variant' | 'children' | 'href'
  > {
}

export const GetInvolvedBtn: React.FC<Props> = ({ className, ...props }) => {
    return (
    <Btn
      className={className}
      variant="primary"
      {...props}
    >
      <a
      className=""
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSf1KNg9T5sPAM9EtOm3i_bQctlq81b7QIns1uNkWtlSCpzOvg/viewform"
    >
      &lt;/&gt; Get Involved
    </a>
    </Btn>
  );
};