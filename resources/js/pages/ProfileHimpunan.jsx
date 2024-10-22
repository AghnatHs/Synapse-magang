import { motion } from "framer-motion";

// Banner Components
import solidLogo from '../../assets/svgs/synapseLogo/synapse_solid.svg';
import solidLogoText from '../../assets/svgs/synapseLogo/synapse_text_solid.svg';

export default function ProfileHimpunan() {
  return(
    <section className="flex flex-col justify-center items-center mt-1 m-0 p-0 overflow-hidden">
      {/* Banner */}
      <section className="flex justify-center items-center w-screen bg-bannerPhone bg-center bg-stretch bg-no-repeat md:bg-bannerTab lg:bg-bannerDesk">
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-center items-center text-center max-w-[700px] max-h-[700px] my-12 md:h-[40vw]">
          <div className="min-w-[200px] flex flex-row items-center justify-center gap-0">
            <img
              src={solidLogo}
              className="w-1/6 md:w-1/4 lg:w-[180px] xl:w-[250px]"></img>
            <div className="ml-2">
              <div className="flex flex-col items-start gap-1">
                <img
                  src={solidLogoText}
                  className="h-[40px] m-0 md:h-[70px] lg:h-[100px] xl:h-[150px]"></img>
                <p className="hidden gap-1 text-[10px] md:text-sm md:flex lg:text-xl xl:text-2xl font-changa italic text-white text-stroke-2 text-stroke-color-black text-shadow-black">
                  <span>Synergy,</span>
                  <span>Networking,</span>
                  <span>Collaboration</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] pt-2 flex gap-1 font-changa italic md:text-sm md:hidden">
            <span>Synergy,</span>
            <span>Networking,</span>
            <span>Collaboration</span>
          </p>
          <p className="text-white text-stroke-1 text-stroke-color-black text-shadow-black text-[12px] md:text-stroke-2 md:text-xl md:mt-6 lg:text-2xl xl:text-3xl font-changa">
            Himpunan Mahasiswa Ilmu Komputer
          </p>
        </motion.div>
      </section>
    </section>
  );
}