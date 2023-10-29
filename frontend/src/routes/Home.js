import React from "react";
import spotify_logo from "../assets/spotify_logo_white.svg";
import IconComponent from "../components/IconComponent";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
const Data = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    imgUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    imgUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    imgUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    imgUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    imgUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
];
export default function HomeComponent() {
  return (
    <div className="h-full w-full flex ">
      <div className="w-1/5 bg-black flex flex-col justify-between pb-5">
        <div className="flex flex-col">
          <img
            src={spotify_logo}
            className="p-3 mx-auto pb-7"
            width={150}
            alt="Spotify Logo"
          />
          <div>
            <IconComponent
              iconName="ant-design:home-filled"
              displayText="HOME"
              active={1}
            />
            <IconComponent
              iconName="gg:search"
              displayText="SEARCH"
              active={0}
            />
            <IconComponent
              iconName="fluent:library-28-filled"
              displayText="LIBRARY"
              active={0}
            />
          </div>
          <div className="py-7">
            <IconComponent
              iconName="ph:plus-fill"
              displayText="Create Playlists"
              active={0}
            />
            <IconComponent
              iconName="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
              displayText="Liked Songs"
              active={0}
            />
          </div>
        </div>
        <div className="flex justify-center items-center border border-gray-500 rounded-full p-2 m-3 hover:cursor-pointer hover:border-white">
          <Icon icon="radix-icons:globe" color="white" />
          <div className="text-white">Language</div>
        </div>
      </div>
      <div className="w-4/5 h-full flex flex-col">
        <div
          className="Navbar h-1/10 w-full bg-app-black text-white bg-opacity-90 
        flex justify-end
        "
        >
          <div className="w-1/2 h-full flex justify-around items-center">
            <TextWithHover textDisplay={"Premium"} active={1} />
            <TextWithHover textDisplay={"Support"} active={0} />

            <TextWithHover textDisplay={"Download"} active={0} />
            <div className="h-1/2 border border-white"></div>
            <TextWithHover textDisplay={"Sigu up"} />
            <div className="border-gray-200 bg-white rounded-full font-semibold text-black py-2 px-4 hover:bg-app-black hover:text-white hover:cursor-pointer hover:border ">
              Log in
            </div>
          </div>
        </div>
        <div className="Content bg-black p-8 h-9/10 overflow-auto">
          <PlayListView titleText={"focus"} cardsData={Data} />
          <PlayListView titleText={"focus"} cardsData={Data} />
          <PlayListView titleText={"spotifyList"} cardsData={Data} />
        </div>
      </div>
    </div>
  );
}

const PlayListView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mb-6">
      {}
      <div className="font-semibold text-2xl mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-3">
        {cardsData.map((items) => {
          return (
            <Card
              title={items.title}
              description={items.description}
              imgUrl={items.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="text-white bg-app-black bg-opacity-60 w-1/5 rounded-xl p-3">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imgUrl} alt="404 not found" />
      </div>
      <div className="font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};
