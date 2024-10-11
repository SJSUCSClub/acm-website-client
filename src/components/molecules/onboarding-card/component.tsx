import React from "react";
import Card, { ICardProps } from "../../atoms/card";

export interface IOnboardingCardProps extends ICardProps {
  subtitle: string;
  header: React.ReactNode;
  image?: string;
  children: React.ReactNode;
}

export const OnboardingCard: React.FC<IOnboardingCardProps> = ({
  header,
  subtitle,
  image = "",
  children,
}) => (
  <Card className="border-[2px] py-[32px] px-[32px] border-border rounded-xl w-full">
    <div className="text-center">
      {image !== "" && <img src={image} alt={subtitle} />}
      <p className="text-[20px]">{header}</p>
      <p className="text-[16px]">{subtitle}</p>
    </div>
    <div>{children}</div>
  </Card>
);
