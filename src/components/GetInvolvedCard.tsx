interface GetInvolvedCardProps {
  plan: string;
  price: string;
  description: string;
  priceStyling: string;
  textList: string[];
  buttonText: string;
  buttonStyling: string;
}

const GetInvolvedCard = ({
  plan,
  price,
  description,
  priceStyling,
  textList,
  buttonText,
  buttonStyling,
}: GetInvolvedCardProps) => {
  return (
    <div className="bg-white rounded-xl text-center shadow-lg transition ease-in hover:shadow-2xl p-10 pt-20  pb-20">
      <h2 className=" text-base md:text-2xl ont-bold mb-2">{plan}</h2>
      <p className={`${priceStyling} pb-5`}>{price}</p>
      <p className="font-bold">{description}</p>
      <ul className="list-disc pl-3 pt-3">
        {textList.map((text: string, index: number) => (
          <li key={index}> {text}</li>
        ))}
      </ul>
      <button className={`${buttonStyling} mt-10`}>{buttonText}</button>
    </div>
  );
};

export default GetInvolvedCard;
