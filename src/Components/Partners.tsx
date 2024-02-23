import alex_img from "../Images/Alex_sorthvit.jpg";
import petter_img from "../Images/Petter_svarthvit.jpg";
import { recoilLanguage } from "../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Text } from "../TextDatabase/TextObj";

function Partners() {
  const [language] = useRecoilState(recoilLanguage);

  // // function that makes the component blurry untill its scrolled into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("opacity-100");
  //           observer.unobserve(entry.target); // Stop observing the current target
  //         }
  //       });
  //     },
  //     { threshold: 1 }
  //   );

  //   const elements = document.querySelectorAll(".fade-in");
  //   elements.forEach((element) => observer.observe(element));

    // Cleanup function
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className="bg-[#728DA8] flex flex-col justify-evenly gap-20 ">
      <div className="flex flex-col  justify-evenly items-center gap-10 mt-10 lg:flex-row">
        <img
          src={alex_img}
          alt="Alex"
          className="object-cover h-[40vh] max-w-[80vw]  lg:h-[30vw] "
        />
        <p className="w-[80vw] flex items-center md:text-xl text-[#FAFAFA] lg:w-[30vw] xl:text-2xl ">
          {language ? Text.aboutUs.alex.english : Text.aboutUs.alex.norwegian}
        </p>
      </div>
      <div className="flex flex-col  justify-evenly items-center gap-10 mb-10 lg:flex-row-reverse">
        <img
          src={petter_img}
          alt="Petter"
          className="object-cover h-[40vh] max-w-[80vw]  lg:h-[30vw] "
        />
        <p className="w-[80vw] flex items-center text-[#FAFAFA] md:text-xl lg:w-[30vw] xl:text-2xl ">
          {language
            ? Text.aboutUs.petter.english
            : Text.aboutUs.petter.norwegian}
        </p>
      </div>
    </div>
  );
}

export default Partners;
