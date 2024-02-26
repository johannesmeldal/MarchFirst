import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import { Text } from "../../TextDatabase/TextObj";
import munkedamsveien_img from "../../Images/Munkedamsveien.png";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const [language] = useRecoilState(recoilLanguage);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={
        "bg-[#04243c] flex flex-col h-auto justify-center gap-10 items-center lg:flex-row" +
        (inView ? " animate-fadeIn" : "lg:opacity-0")
      }
    >
      <img
        style={{ objectFit: "cover" }}
        src={munkedamsveien_img}
        alt="Munkedamsveien"
        className="w-[100vw] h-[50vh] object-cover lg:w-6/12"
      />
      <div className="  items-center flex flex-col justify-evenly mb-10 lg:w-6/12 ">
        <p className="text-xl text-[#FAFAFA] w-[80vw] border-l-2 pl-5 border-[#C44404] lg:w-6/12 lg:text-2xl">
          {language
            ? Text.home.introText.text.english
            : Text.home.introText.text.norwegian}
        </p>
      </div>
    </div>
  );
}
