import { motion } from "framer-motion";

// Banner Components
import solidLogo from '../../assets/svgs/synapseLogo/synapse_solid.svg';
import solidLogoText from '../../assets/svgs/synapseLogo/synapse_text_solid.svg';

// Web Components
import HimalkomLogo from '../../assets/svgs/ipb/logohimalkom.svg';
import SynapseLight from '../../assets/svgs/synapseLogo/synapse_light.svg';
import Elips from '../../assets/pngs/containers/filosofiElips.png'
import Comic from '../../assets/pngs/containers/comicstyled.png'

// Divisi
import bp from '../../assets/svgs/divisi/icons/bp.svg';

export default function ProfileHimpunan() {
  return(
    <section className="flex flex-col justify-center items-center mt-1 m-0 p-0 overflow-hidden gap-y-1">
      {/* Banner */}
      <section className="flex justify-center items-center w-screen bg-bannerPhone bg-center bg-cover md:bg-stretch bg-no-repeat md:bg-bannerTab lg:bg-bannerDesk">
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

      {/* About Himalkom */}
      <motion.section 
        whileInView={{ opacity: [0, 0, 1] }} 
        transition={{ duration: 0.35 }} 
        className="gap-y-5 flex flex-col bg-about-himalkom-desktop bg-cover w-screen bg-no-repeat p-8 border-y-2 border-black"
        style={{ backgroundPosition: "top center" }}>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }} 
        >
          <h4 className="font-bold font-monts">Apa itu</h4>
          <h2 
            className="font-sports text-[#F0E4D4] text-3xl" 
            style={{ WebkitTextStroke:"2px black", textShadow:".2rem .3rem black" }}>HIMALKOM?</h2>
        </motion.div>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}>
          <img src={HimalkomLogo} className="w-[10rem]"></img>
        </motion.div>
        <motion.div
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}>
          <motion.p className="font-monts text-justify">
            <motion.span className="font-bold">Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) </motion.span> adalah himpunan yang bergerak dalam pengembangan dan ekstensi mahasiswa ilmu komputer IPB.
          </motion.p> 
        </motion.div>
      </motion.section>

      {/* Tujuan Himalkom */}
      <motion.section
        whileInView={{ opacity: [0, 0, 1] }} 
        transition={{ duration: 0.35 }} 
        className="gap-y-5 border-y-2 border-black flex flex-col bg-goals-himalkom-desktop bg-cover w-screen bg-left-bottom bg-no-repeat p-9">
        <motion.div 
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}
          className="w-full">
          <h4 className="font-bold text-right font-monts">Tujuan</h4>
          <h2 
            className="font-sports text-[#F0E4D4] text-3xl text-right" 
            style={{ WebkitTextStroke:"2px black", textShadow:".2rem .3rem black" }}>HIMALKOM?</h2>        
        </motion.div>
        <motion.div 
          whileInView={{ y: [50, 25, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.35 }}
          className="right-0">
          <motion.p className="font-monts text-justify">Mencerdaskan ilkomerz agar siap dan semangat untuk menjadi professional, memperkuat internalisasi, meningkatkan eksistensi, dan membangun Ilmu Komputer IPB berdasarkan aspirasi Ilkomerz sehingga tercipta hasil yang dahsyat.</motion.p>
        </motion.div>
      </motion.section>

      {/* Filosofi Synapse */}
      <motion.section className="bg-[#F7C5A1] w-screen mt-2 border-y-2 border-black flex flex-col items-center pb-10">
        <motion.div 
          className="flex flex-col items-center justify-center w-[15rem] min-h-[5rem] pb-10 pt-4"
          style={{
            backgroundImage: `url(${Elips})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}>
          <h4 className="font-monts font-bold">FILOSOFI LOGO</h4>
          <h2 
            className="font-sports text-[#F0E4D4] text-3xl text-right" 
            style={{ WebkitTextStroke:"2px black", textShadow:".2rem .2rem black" }}>SYNAPSE</h2>
        </motion.div>
        <motion.div className="mt-10 flex flex-col items-center">
          <motion.div className="mb-10">
            <img src={SynapseLight} className="w-[10rem]"></img>
          </motion.div>
          <motion.div className="flex flex-col gap-y-5">
            <motion.div className="flex flex-col gap-y-5">
              {/* Kolaborasi Komunikasi */}
              <div className="flex flex-col items-center bg-[#F7C5A1] max-w-[15rem] p-3 rounded-xl shadow-2xl">
                <img src={SynapseLight} className="max-w-[10rem]"></img>
                <h3 
                  className="font-changa italic text-center text-[#EC6F13] text-[20px]"
                  style={{ WebkitTextStroke:"1px black", textShadow:".2rem .1rem black" }}>KOLABORASI DAN KOMUNIKASI</h3>
                <p className="font-monts text-center">Melambangkan inisial kabinet saat ini yaitu S (Synapse)</p>
              </div>
              {/* Letter S */}
              <div className="flex flex-col items-center bg-[#F7C5A1] max-w-[15rem] p-3 rounded-xl shadow-2xl">
                <img src={SynapseLight} className="max-w-[10rem]"></img>
                <h3 
                  className="font-changa italic text-center text-[#EC6F13] text-[20px]"
                  style={{ WebkitTextStroke:"1px black", textShadow:".2rem .1rem black" }}>LETTER S</h3>
                <p className="font-monts text-center">Melambangkan ketidakterbataasan dalam menjalin kerjasama</p>
              </div>
            </motion.div>
            <motion.div className="flex flex-col gap-y-5">
              {/* Inovasi */}
              <div className="flex flex-col items-center bg-[#F7C5A1] max-w-[15rem] p-3 rounded-xl shadow-2xl">
                <img src={SynapseLight} className="max-w-[10rem]"></img>
                <h3 
                  className="font-changa italic text-center text-[#EC6F13] text-[20px]"
                  style={{ WebkitTextStroke:"1px black", textShadow:".2rem .1rem black" }}>INOVASI</h3>
                <p className="font-monts text-center">Menggambarkan dua insan yang saling terhubung</p>
              </div>
              {/* Lingkaran */}
              <div className="flex flex-col items-center bg-[#F7C5A1] max-w-[15rem] p-3 rounded-xl shadow-2xl">
                <img src={SynapseLight} className="max-w-[10rem]"></img>
                <h3 
                  className="font-changa italic text-center text-[#EC6F13] text-[20px]"
                  style={{ WebkitTextStroke:"1px black", textShadow:".2rem .1rem black" }}>LINGKARAN</h3>
                <p className="font-monts text-center">Setiap divisi harus saling melengkapi antara satu sama lain</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Synergy */}
      <motion.section className="py-5">
        <h3
          className="font-changa italic text-center text-[#EC6F13] text-[14px]"
          style={{ WebkitTextStroke:"1px rgba(0, 0, 0, 0.8)", textShadow:".2rem .1rem rgba(0, 0, 0, 0.8)" }}>
          “SYNERGY, NETWORKING, AND COLLABORATION”
        </h3>
      </motion.section>

      {/* Comic Style Divisi List */}
      <motion.section
        style={{ 
          backgroundImage: `url(${Comic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col w-screen py-4 border-black border-y-2">
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-center font-monts">DIVISI</h4>
          <h2 
            style={{ WebkitTextStroke:"2px black" }}
            className="font-sports text-[#F0E4D4] text-center max-w-[15rem] text-3xl px-2 underline underline-offset-8">HIMALKOM</h2>
        </div>
        {/* Divisi Grid */}
        <motion.section
          className="grid grid-cols-1 mt-10 items-center md:px-10 w-screen">
          <motion.div 
            className="flex justify-center items-center w-fit shadow-xs transition-shadow duration-200 rounded-md"
            whileHover={{ translateY: '-10px', translateX:'5px' ,boxShadow: '-.7rem .7rem black', backgroundColor: 'rgba(0,0,0,0.1)', cursor:'pointer' }}
            transition={{ duration: 0.2, ease: "easeInOut", backgroundColor:{delay:.2} }}
          >
            <img src={bp} alt="Description" className="flex justify-center items-center w-full" />
          </motion.div>
        </motion.section>
      </motion.section>
    </section>
  );
}