import RightArrow from "/about/rightarrow.svg";
const MemberButton = () => {
  return (
    <button className="bg-primary py-2 px-4 rounded-full border border-border border-2 hover:border-border-hovered">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf1KNg9T5sPAM9EtOm3i_bQctlq81b7QIns1uNkWtlSCpzOvg/viewform"
        target="_blank"
        className="flex gap-3 no-underline font-bold"
      >
        <span className="text-white"> Become a Member </span>
        <img src={RightArrow} alt="right arrow" />
      </a>
    </button>
  );
};

export default MemberButton;
