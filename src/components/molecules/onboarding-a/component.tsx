import Card from "../../atoms/card";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const OnboardingCard: React.FC<IButtonProps> = ({
  header,
  content
  className,
}) => (
  <Card>
    <div>
    </div>
    <div>
    </div>
  </Card>
);
