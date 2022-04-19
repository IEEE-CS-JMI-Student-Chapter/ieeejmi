import React, { useEffect, useState } from "react";
import faker from "@faker-js/faker";
import Card from "../../components/Teams/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useMediaQuery } from "react-responsive";
import Execomm from "../../components/Teams/Execomm";
import { useQuery } from "@apollo/client";
import { GET_ALL_TEAM_NAMES } from "../../api/teams";
import Skeleton from "react-loading-skeleton";
import Team, { IndividualLoading } from "../../components/Teams/Team";

function Teams() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [currentTeam, setCurrentTeam] = useState(null);

  const { loading, error, data } = useQuery(GET_ALL_TEAM_NAMES);

  useEffect(() => {
    setCurrentTeam(data?.__type?.enumValues[0]?.name);
  }, [data]);

  return (
    <div className="font-body pt-28 flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-3xl border-b-2 pb-3">Meet Our Team</h1>
      </div>

      <div className="w-full p-4">
        <Execomm />
      </div>
      <div
        className="overflow-hidden team-list"
        style={{
          width: "99vw",
        }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={isTabletOrMobile ? 1 : 3}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => {
            setCurrentTeam(
              swiper.clickedSlide?.children[0]?.innerHTML
                .replace("Team", "")
                .trim()
                .replace(" ", "_")
            );
          }}
          onSwiper={(swiper) => console.log(swiper)}
          slideToClickedSlide={true}
        >
          {loading
            ? Array(8)
                .fill(0)
                .map((item, index) => (
                  <SwiperSlide className="text-center p-5 px-14">
                    <div className="p-6 header-team-list">
                      <Skeleton height={50} width={200} />
                    </div>
                  </SwiperSlide>
                ))
            : data.__type.enumValues.map((item, index) => {
                if (item.name === "Execomm") return null;

                return (
                  <SwiperSlide className="text-center p-5 px-14">
                    <div className="p-6 header-team-list">
                      {item.name.slice().replace("_", " ")} Team
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
      {currentTeam ? (
        <div className="w-full flex flex-col justify-center items-center">
          <Team name={currentTeam} />
        </div>
      ) : (
        <IndividualLoading />
      )}
    </div>
  );
}

export default Teams;
