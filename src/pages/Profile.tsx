import Dropdown from "../components/atoms/dropdown";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/atoms/avatar";
import { Btn } from "../components/atoms/btn";
import { Card, CardContent, CardHeader } from "../components/atoms/card";
import { Input } from "../components/atoms/input";

import { TextArea } from "../components/atoms/text-area";
import { ImageIcon } from "lucide-react";
import { Edit } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pronouns: Array<string> = ["He/Him", "She/Her", "They/Them", "Other"];
const status: Array<string> = ["Undergraduate", "Graduate"];
const year: Array<string> = ["Freshman", "Sophomore", "Junior", "Senior"];

export default function Profile() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  // Profile fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [selectedPronouns, setSelectedPronouns] = useState<string>("He/Him");
  const [bio, setBio] = useState<string>("");
  const [discord, setDiscord] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [major, setMajor] = useState<string>("");

  useEffect(() => {
    const fetchFirstName = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.org/users/1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFirstName(data.firstname);
        setLastName(data.lastname);
      } catch (err: any) {}
    };

    fetchFirstName();
  }, []);

  // for avatar
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAvatar(fileURL);
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid p-16 gap-16 ">
      <p className="font-extrabold text-5xl tracking-tighter"> Profile</p>
      <div className="grid gap-16">
        <Card className="w-full max-w-7xl mx-auto p-8">
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Public Profile</h2>
              <div className="space-y-4">
                <div className="flex flex-rows space-y-2">
                  <div className="relative flex items-center gap-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={avatar} alt="Profile picture" />
                      <AvatarFallback>
                        <ImageIcon className="w-12 h-12 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>

                    <div
                      className="absolute top-0 right-0 transform translate-x-1/2 translate-y-full"
                      onClick={handleClick}
                    >
                      <button className="bg-gray-200 p-1 rounded-full shadow-md hover:bg-gray-300">
                        <Edit className=" text-gray-500" />
                      </button>

                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      label="First Name"
                      required={false}
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      label="Last Name"
                      required={false}
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Dropdown
                    label="Pronouns"
                    required={true}
                    options={pronouns}
                    value={selectedPronouns}
                    onChange={(e) => setSelectedPronouns(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <TextArea
                    label="Bio"
                    required={false}
                    placeholder="Bio..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Discord"
                    required={false}
                    placeholder=""
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Linkedin"
                    required={false}
                    placeholder="https://linkedin.com/john-doe/"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Github"
                    required={false}
                    placeholder="https://github.com/john.doe/"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Instagram"
                    required={false}
                    placeholder="https://instagram.com/john.doe/"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Website"
                    required={false}
                    placeholder="https://myportfolio.com/john.doe/"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Dropdown
                    label="Status"
                    required={true}
                    options={status}
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Dropdown
                    label="Year"
                    required={true}
                    options={year}
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    label="Major"
                    required={true}
                    placeholder="Major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Btn variant="tertiary">Cancel</Btn>
              <Btn variant="secondary">Save</Btn>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
