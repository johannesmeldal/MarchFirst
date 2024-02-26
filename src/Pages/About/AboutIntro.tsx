import { useRecoilState } from "recoil";
import { recoilLanguage } from "../../Recoil/atoms";
import munkedamsveien_img from "../../Images/Munkedamsveien.png";
import { Text } from "../../TextDatabase/TextObj";
import { BsArrowRight } from "react-icons/bs";

export default function Intro() {
  const [language] = useRecoilState(recoilLanguage);

  function setActivePage(p: string) {
    sessionStorage.setItem("activePage", JSON.stringify(p));
  }

  return (
    <div className="bg-[#04243c] flex flex-col h-auto justify-center gap-10 items-center lg:flex-row object-cover">
      <img
        src={munkedamsveien_img}
        alt="Munkedamsveien"
        className=" h-[60vh] object-cover lg:w-6/12"
      />
      <div className="items-center flex flex-col justify-between mb-10 lg:w-6/12 gap-5 h-auto">
        <p className="text-xl text-[#FAFAFA] w-[80vw] border-l-2 pl-5 border-[#C44404] lg:w-auto lg:text-2xl">
          {language
            ? Text.aboutUs.introTop.english
            : Text.aboutUs.introTop.norwegian}
        </p>
        <p className="text-xl text-[#FAFAFA] w-[80vw] lg:w-auto lg:text-lg">
          {language
            ? Text.aboutUs.introBody.english
            : Text.aboutUs.introBody.norwegian}
        </p>
        <a
          onClick={() => setActivePage("services")}
          href="services"
          className="text-[#728DA8] flex gap-2 hover:text-[#FFFFFF]"
        >
          {language ? "SEE OUR REFERENCES" : "SE VÅRE REFERANSER"}
          <BsArrowRight className="mt-1" />
        </a>
      </div>
    </div>
  );
}
