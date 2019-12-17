import { PETS, SUNLIGHT, WATER } from "../../constants/filter";

import Dog from "../../assets/illustrations/dog.png";
import FilterContainer from "../FilterContainer";
import { ReactComponent as HighSunlight } from "../../assets/icons/coral/high-sun.svg";
import { ReactComponent as HighSunlightActive } from "../../assets/icons/white/high-sun.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo-greenthumb-vertical.svg";
import { ReactComponent as LowSunlight } from "../../assets/icons/coral/low-sun.svg";
import { ReactComponent as LowSunlightActive } from "../../assets/icons/white/low-sun.svg";
import { ReactComponent as NoAnswer } from "../../assets/icons/coral/no-answer.svg";
import { ReactComponent as NoAnswerActive } from "../../assets/icons/white/no-answer.svg";
import { ReactComponent as OneDrop } from "../../assets/icons/green/one-drop.svg";
import { ReactComponent as OneDropActive } from "../../assets/icons/white/one-drop.svg";
import { ReactComponent as Pet } from "../../assets/icons/coral/pet.svg";
import { ReactComponent as PetActive } from "../../assets/icons/white/pet.svg";
import React from "react";
import Sun from "../../assets/illustrations/sun.png";
import { ReactComponent as ThreeDrops } from "../../assets/icons/green/three-drops.svg";
import { ReactComponent as ThreeDropsActive } from "../../assets/icons/white/three-drops.svg";
import { ReactComponent as TwoDrops } from "../../assets/icons/green/two-drops.svg";
import { ReactComponent as TwoDropsActive } from "../../assets/icons/white/two-drops.svg";
import Water from "../../assets/illustrations/wateringcan.png";

const sunlightFilterOptions = [
  {
    text: "High sunlight",
    value: "high",
    icon: HighSunlight,
    iconActive: HighSunlightActive
  },
  {
    text: "Low sunlight",
    value: "low",
    icon: LowSunlight,
    iconActive: LowSunlightActive
  },
  {
    text: "No sunlight",
    value: "no",
    icon: NoAnswer,
    iconActive: NoAnswerActive
  }
];

const waterFilterOptions = [
  {
    text: "Rarely",
    value: "rarely",
    icon: OneDrop,
    iconActive: OneDropActive
  },
  {
    text: "Regularly",
    value: "regularly",
    icon: TwoDrops,
    iconActive: TwoDropsActive
  },
  {
    text: "Daily",
    value: "daily",
    icon: ThreeDrops,
    iconActive: ThreeDropsActive
  }
];

const petsFilterOptions = [
  {
    text: "Yes",
    value: "true",
    icon: Pet,
    iconActive: PetActive
  },
  {
    text: "No/They don't care",
    value: "false",
    icon: NoAnswer,
    iconActive: NoAnswerActive
  }
];

const getPath = fullPath => fullPath.split("/")[2].toUpperCase();

const getFilterContainer = (
  path,
  error,
  sunlight,
  water,
  pets,
  setSunlight,
  setWater,
  setPets,
  updateError
) => {
  switch (path) {
    case SUNLIGHT:
      return (
        <FilterContainer
          picture={Sun}
          options={sunlightFilterOptions}
          title={
            <h2>
              First, set the amount of <strong>sunlight</strong> your plant will
              get.
            </h2>
          }
          theme={"coral"}
          btns={[
            {
              label: "home",
              clickHandler: updateError,
              errorStatus: false,
              pathTo: "/"
            },
            {
              label: "next",
              clickHandler: updateError,
              errorStatus: sunlight.length > 0 ? false : true,
              pathTo: sunlight.length > 0 ? "/Filter/Water" : "#"
            }
          ]}
          setFilter={setSunlight}
          typeValue={sunlight}
          error={error.text}
        ></FilterContainer>
      );
    case WATER:
      return (
        <FilterContainer
          picture={Water}
          options={waterFilterOptions}
          title={
            <h2>
              How often do you want to <strong>water</strong> your plant?
            </h2>
          }
          theme={"green"}
          btns={[
            {
              label: "previous",
              clickHandler: updateError,
              errorStatus: false,
              pathTo: "/Filter/Sunlight"
            },
            {
              label: "next",
              clickHandler: updateError,
              errorStatus: water.length > 0 ? false : true,
              pathTo: water.length > 0 ? "/Filter/Pets" : "#"
            }
          ]}
          setFilter={setWater}
          typeValue={water}
          error={error.text}
        ></FilterContainer>
      );
    case PETS:
      return (
        <FilterContainer
          picture={Dog}
          options={petsFilterOptions}
          title={
            <h2>
              Do you have pets? Do they <strong>chew</strong> plants?
            </h2>
          }
          subtitle={
            <span>
              We are asking because some plants can be <strong>toxic</strong>{" "}
              for your buddy.
            </span>
          }
          theme={"coral"}
          btns={[
            {
              label: "previous",
              clickHandler: updateError,
              errorStatus: false,
              pathTo: "/Filter/Water"
            },
            {
              label: "finish",
              clickHandler: updateError,
              errorStatus: pets.length > 0 ? false : true,
              pathTo: pets.length > 0 ? "/" : "#"
            }
          ]}
          setFilter={setPets}
          typeValue={pets}
          error={error.text}
        ></FilterContainer>
      );
    default:
      break;
  }
};

const Filter = ({
  location,
  sunlight,
  water,
  pets,
  error,
  setSunlight,
  setWater,
  setPets,
  updateError
}) => {
  return (
    <div className="container background-grey">
      <div className="logo-bar">
        <Logo></Logo>
        <div className="green-line"></div>
      </div>
      <div className="container-inside">
        {getFilterContainer(
          getPath(location.pathname),
          error,
          sunlight,
          water,
          pets,
          setSunlight,
          setWater,
          setPets,
          updateError
        )}
      </div>
    </div>
  );
};

export default Filter;
