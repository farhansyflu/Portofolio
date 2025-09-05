import DataImage, { listProyek } from "./data"
import "./index.css"
import { listTools } from "./data"
import 'animate.css'
import SplashCursor from './components/SplashCursor/SplashCursor'
import DarkVeil from "./DarkVeil"
import GlareHover from './GlareHover'


function App() {

  return (
    <>
    <div style={{ minWidth: '100%', minHeight: '600px', position: 'absolute', top:"0px", left:"0px", zIndex:"0"}}>
        <DarkVeil />
    </div>
    
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="beranda">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-glass w-fit p-4 rounded-2xl" >
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Ngoding itu menyenangkan bukan?😊</q>

          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Farhan Syifa'ul</h1>
          <p className="text-base/loose mb-6">Programming bagi saya bukan sekadar menulis kode, tetapi sebuah cara untuk melatih logika, kreativitas, dan problem solving. Tujuan saya adalah menjadi programmer yang terus berkembang dan mampu memberikan solusi nyata melalui teknologi.</p>

            <div>
              <a href="#proyek" className="bg-button p-3 rounded-xl">Lihat Proyek <i className="ri-arrow-down-long-line"></i></a>
            </div>
        </div>
        
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-bl-2xl"  loading="lazy"/>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang"> 
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-glass rounded-2xl" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
         <p>Hi, Perkenalkan saya Farhan Syifa'ul. Saya adalah seorang mahasiswa STDI Imam Syafi'i Jember yang sedang mulai belajar tentang dunia pengembangan web. Saya senang belajar hal-hal baru dan menerapkannya melalui proyek-proyek kecil. Portofolio ini saya buat sebagai wadah untuk menampilkan perjalanan belajar dan hasil karya saya.</p>
         <div>
          <div className="flex gap-6 items-center mt-10">
            <div className="bg-primary p-5 rounded-2xl">
              <h1 className="text-4xl">3<span></span></h1>
              <p>Proyek Selesai</p>
            </div>
            <div className="bg-primary p-5 rounded-2xl">
              <h1 className="text-4xl">0.5<span>+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
         </div>
        </div>

        <div className="tools mt-32" >
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text/base opacity-70" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang saya pakai untuk pembuatan Website ataupun Graphic Design</p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 card rounded-2xl group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-70">{tool.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base text-center opacity-70" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini adalah beberapa proyek yang telah saya buat</p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 bg-primary rounded-2xl " data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                  <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
                  <div>
                    <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                    <p className="text-base mb-4">{proyek.desk}</p>

                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool,index) => (
                        <p key={index} className="py-1 px-3 border border-white rounded-md font-semibold bg-glass">{tool}</p>
                      ))}
                    </div>
                      <div className="mt-8 text-center">
                      <a className="bg-button p-3 rounded-xl block cursor-pointer" href="https://farhansyflu.github.io/farhansyflu--weather-app/">Lihat Website</a>  
                      </div>    
                  </div>
              </div>
            ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Kontak</h1>
        <p className="text-base text-center mb-10 opacity-70" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
       
        <form action="https://formsubmit.co/farhansyflu@gmail.com" method="POST" className="bg-glass p-10 w-full sm:w-fit mx-auto rounded-2xl" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-white p-2 rounded-xl" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border border-white p-2 rounded-xl" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea cols="45" rows="7" id="pesan" name="pesan" placeholder="Tulis Pesan" className="border border-white p-2 rounded-xl" required/>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full cursor-pointer bg-button p-3 rounded-xl block">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
