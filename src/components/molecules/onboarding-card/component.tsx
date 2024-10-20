import React from "react";
import Card, { ICardProps } from "../../atoms/card";

export interface IOnboardingCardProps extends ICardProps {
  subtitle: string;
  header: React.ReactNode;
  boldHeader: React.ReactNode;
  image?: string;
  children: React.ReactNode;
  className?: string;
}

export const OnboardingCard: React.FC<IOnboardingCardProps> = ({
  header,
  boldHeader,
  subtitle,
  image = "",
  children,
  className,
}) => (
  <Card
    className={
      "border-[2px] py-[32px] px-[32px] border-border rounded-xl w-full" +
      className
    }
  >
    <div className="text-center">
      {image !== "" && <img src={image} alt={subtitle} />}
      <p className="text-[20px]">
        {header}
        <strong> {boldHeader}</strong>
      </p>
      <p className="text-[16px]">{subtitle}</p>
    </div>
    <div>{children}</div>
  </Card>
);
