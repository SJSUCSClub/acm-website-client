import Input from "../components/atoms/input";
import Dropdown from "../components/atoms/dropdown";
import OnboardingCard from "../components/molecules/onboarding-card";
import ProgressBar from "../components/molecules/progress-bar";
import { useState } from "react";
import Btn from "../components/atoms/btn";

type tempUserType = {
  name: string;
};

const tempUser: tempUserType = {
  name: "Naya",
};

const statusOptions: Array<string> = ["Undergraduate", "Graduate", "Other"];
const yearOptions: Array<string> = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Other",
];
const purposeOptions: Array<string> = ["Networking", "Other"];
const interestOptions: Array<string> = [
  "Frontend",
  "Backend",
  "Design",
  "Marketing",
  "Other",
];

const Page = () => {
  const [progress, setProgress] = useState<number>(0.0);
  const [page, setPage] = useState<number>(0);
  const [status, setStatus] = useState<string>(statusOptions[0]);
  const [year, setYear] = useState<string>(yearOptions[0]);
  const [major, setMajor] = useState<string>("");
  const [purpose, setPurpose] = useState<string>(purposeOptions[0]);
  const [interest, setInterest] = useState<string>(interestOptions[0]);

  function nextPage() {
    console.log(`Status: ${status}`);
    console.log(`Year: ${year}`);
    console.log(`Major: ${major}`);
    console.log(`Purpose: ${purpose}`);
    console.log(`Interest: ${interest}`);
    setPage(page + 1);
    setProgress(progress + 0.25);
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
          {page === 0 && <OnboardingCard
            header="Welcome"
            boldHeader={`${tempUser.name}!`}
            subtitle={"We'd love to know a bit more about you"}
            className="w-full"
          >
            <Dropdown
              label="Status"
              required={false}
              options={statusOptions}
              onChange={(e) => setStatus(e.target.value)}
            />
            <Dropdown
              label="Year"
              required
              footer={'Select "Other" if you are not an undergraduate student'}
              options={yearOptions}
              onChange={(e) => setYear(e.target.value)}
            />
            <Input
              label="Major"
              required={false}
              footer="All majors are welcome :)"
              onChange={(e) => setMajor(e.target.value)}
            />
            <Dropdown
              label="Purpose"
              required={false}
              options={purposeOptions}
              footer="Tell us what brings you to the ACM club"
              onChange={(e) => setPurpose(e.target.value)}
            />
            <Dropdown
              label="Team Interest"
              required={false}
              options={interestOptions}
              footer="This shows that you're interested in joining a team and does not guarantee that you will be put on one. Teams are only for paid members."
              onChange={(e) => setInterest(e.target.value)}
            />
            <br />
            <div className="flex justify-center">
              <Btn variant="primary" onClick={() => nextPage()}>
                Continue
              </Btn>
            </div>
          </OnboardingCard>}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
