import React from "react";
import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { Text } from "../../TextDatabase/TextObj";
import { BsArrowDown } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';

function ServicesIntro() {
  const [language] = useRecoilState(recoilLanguage);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div ref={ref} className={"h-auto text-[#FAFAFA] flex flex-col gap-5 " + (inView ? 'animate-colorChange' : 'bg-white')}>
      <p className="text-2xl ml-60 mt-10">
        {language ? "SERVICES" : "TJENESTER"}
      </p>
      <div className="flex flex-row w-[70vw] justify-evenly mx-auto mb-10">
        <p className="w-6/12 text-xl">
          {language
            ? Text.services.introText.text.english
            : Text.services.introText.text.norwegian}
        </p>
        <BsArrowDown className="text-[68px] text-[#728DA8]" />
      </div>
    </div>
  );
}
// bg-[#002338]

export default ServicesIntro;
