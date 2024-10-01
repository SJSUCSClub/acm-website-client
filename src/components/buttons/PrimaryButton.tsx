import RightArrow from "/public/about/rightarrow.svg";

const PrimaryButton = ({ text, destination }: any) => {
  return (
    <button className="bg-primary py-2 px-4 rounded-full border border-border border-2 hover:border-border-hovered">
      <a
        href={destination}
        target="_blank"
        className="flex gap-3 no-underline font-bold"
      >
        <span className="text-white"> {text} </span>
        <img src={RightArrow} alt="right arrow" />
      </a>
    </button>
  );
};

export default PrimaryButton;
