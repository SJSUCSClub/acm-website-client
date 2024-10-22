import Input from "../components/atoms/input";
import Dropdown from "../components/atoms/dropdown";
import OnboardingCard from "../components/molecules/onboarding-card";
import ProgressBar from "../components/molecules/progress-bar";
import { useState } from "react";
import Btn from "../components/atoms/btn";
import TextArea from "../components/atoms/text-area";
import RightArrow from "/about/rightarrow.svg";

type tempUserType = {
  name: string;
};

const tempUser: tempUserType = {
  name: "Naya",
};

const educationLevelOptions: Array<string> = ["Undergraduate", "Graduate"];

const tempMajorOptions: Array<string> = [
  "Computer Science",
  "Data Science",
  "Computer Engineering",
  "Software Engineering",
];

const purposeOptions: Array<string> = ["Networking", "Other"];

const pronounOptions: Array<string> = [
  "Ask Me!",
  "She/Her",
  "He/Him",
  "They/Them",
];

type User = {
  educationLevel: string;
  major: string;
  gradDate: Date;
  purpose: string;
  interests: Array<string>;
  pronouns: string;
  bio: string;
  discord: string;
  linkedin: string;
  github: string;
  instagram: string;
  website: string;
};

const Page = () => {
  const [progress, setProgress] = useState<number>(0.0);
  const [page, setPage] = useState<number>(0);

  const [user, setUser] = useState<User>({
    educationLevel: educationLevelOptions[0],
    major: "",
    gradDate: new Date(),
    purpose: purposeOptions[0],
    interests: [],
    pronouns: pronounOptions[0],
    bio: "",
    discord: "",
    linkedin: "",
    github: "",
    instagram: "",
    website: "",
  });

  const handleChange = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  function nextPage() {
    if (page < 2) {
      console.log(user);
      setPage(page + 1);
      setProgress(progress + 0.5);
    } else {
      window.location.href = "/";
    }
  }

  function backPage() {
    console.log(user);
    setPage(page - 1);
    setProgress(progress - 0.5);
  }

  function renderContinueButton(text: string = "Continue") {
    return (
      <>
        <br />
        <div className="flex justify-between">
          <Btn
            variant="primary"
            className="bg-transparent text-primary border-none pl-0 hover:bg-transparent disabled:bg-transparent"
            disabled={page < 1}
            onClick={() => backPage()}
          >
            {"< Back"}
          </Btn>
          <Btn variant="primary" onClick={() => nextPage()}>
            <span className="">{text}</span>
            <img src={RightArrow} alt="right arrow" />
          </Btn>
        </div>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-[75%] md:w-[50%] lg:w-[40%]">
        <div>
          <br />
          <br />
          <ProgressBar value={progress} max={1} />
          <br />
          <br />

          {page === 0 && (
            <OnboardingCard
              header="Welcome"
              boldHeader={`${tempUser.name}!`}
              subtitle="We'd love to know a bit more about you"
            >
              <Dropdown
                label="Status"
                required={false}
                options={educationLevelOptions}
                onChange={(e) => handleChange("status", e.target.value)}
              />
              <Dropdown
                label="Major"
                required={false}
                footer="All majors are welcome :)"
                options={tempMajorOptions}
                onChange={(e) => handleChange("major", e.target.value)}
              />
              {/*add grad date*/}
              <Dropdown
                label="Purpose"
                required={false}
                options={purposeOptions}
                footer="Tell us what brings you to the ACM club"
                onChange={(e) => handleChange("purpose", e.target.value)}
              />
              {/*add interests multi select*/}
              {renderContinueButton()}
            </OnboardingCard>
          )}
          {page === 1 && (
            <OnboardingCard
              header="Share a bit about yourself and"
              boldHeader="connect your social profiles"
              subtitle="This helps us build your network within our community"
            >
              <Dropdown
                label="Pronouns"
                required={false}
                options={pronounOptions}
                onChange={(e) => handleChange("pronouns", e.target.value)}
              />
              <TextArea
                label="Bio"
                required={false}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
              <Input
                label="Discord"
                required={false}
                placeholder="john.doe"
                onChange={(e) => handleChange("discord", e.target.value)}
              />
              <Input
                label="LinkedIn"
                required={false}
                icon="/src/assets/Link.svg"
                placeholder="https://linkedin.com/in/john-doe"
                onChange={(e) => handleChange("linkedin", e.target.value)}
              />
              <Input
                label="Github"
                required={false}
                icon="/src/assets/Link.svg"
                placeholder="https://github.com/john-doe"
                onChange={(e) => handleChange("github", e.target.value)}
              />
              <Input
                label="Instagram"
                required={false}
                icon="/src/assets/Link.svg"
                placeholder="https://instagram.com/john-doe"
                onChange={(e) => handleChange("instagram", e.target.value)}
              />
              <Input
                label="Website"
                required={false}
                icon="/src/assets/Link.svg"
                placeholder="https://johndoe.com"
                onChange={(e) => handleChange("website", e.target.value)}
              />
              {renderContinueButton()}
            </OnboardingCard>
          )}
          {page === 2 && (
            <OnboardingCard
              image="/src/assets/trophy.svg"
              header=""
              boldHeader="Congratulations!"
              subtitle="You're all set! Welcome to the ACM Club at San José State University. Make the most out of your experience with us."
            >
              <div></div>
              {renderContinueButton("Start Exploring")}
            </OnboardingCard>
          )}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
