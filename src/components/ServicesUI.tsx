import React from "react";
import Reveal from "./animation/Reveal";
import ourServices from "../../data/OurServices";
import { cn } from "@/lib/utils";

type Props = {
  serviceName: "Design" | "Marketing" | "Development" | "Discovery";
  title?: string;
};
const ServicesUI = ({ serviceName, title }: Props) => {
  const service = ourServices.find((service) => service.name === serviceName);
  return (
    <>
      <div className="text-dark relative p-5 md:p-5 lg:p-10 bg-white rounded-custom section">
        <Reveal type="top">
          <h2 className="sm:text-6xl text-5xl md:text-7xl lg:text-9xl font-semibold uppercase">
            {title ? (
              <>
                {title?.split(" ")[0]} <br />
                {title?.split(" ")[1]}
              </>
            ) : (
              <>
                UPSELL <br /> SERVICES
              </>
            )}
          </h2>
        </Reveal>
        <ul className="w-full">
          {service?.subServices.map((subService, i) => (
            <Reveal key={i} type="bottom">
              <li
                className={cn(
                  "w-full text-lg md:text-2xl py-3 md:py-5 uppercase font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:rounded-full after:bg-zinc-300 ",
                  i === 4 && "pb-0"
                )}
              >
                {subService}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServicesUI;
