import { Btn } from '../../atoms/btn';

interface Props
  extends Omit<
    React.ComponentProps<typeof Btn>,
    'variant' | 'href'
  > {
}

export const SocialBtn: React.FC<Props> = ({ className, children, ...props }) => {
    return (
    <Btn
      className={`${className} border-[#b4c9d9] bg-[#87adcd] text-[#c1d6e6] shadow-md hover:text-white hover:border-[#b4c9d9] animate-[fadeIn_2s_ease-in-out] hover:scale-110 duration-300` }
      variant="ghost"
      {...props}
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf1KNg9T5sPAM9EtOm3i_bQctlq81b7QIns1uNkWtlSCpzOvg/viewform"
        target="_blank"
        className="flex gap-3 no-underline font-bold"
      >
        <span className="flex-cols flex items-center place-content-center">{children}</span>
      </a>
    </Btn>
  );
};