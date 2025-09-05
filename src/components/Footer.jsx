
const Footer = () => {
  return (
    <div className='mt-32 py-4 flex flex-col gap-6 justify-between md:flex-row md:gap-0 items-center'>
        <h1 className='text-2xl font-bold' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Portofolio</h1>
        <div className='flex gap-7' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className='flex items-center gap-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
            <a href="https://www.instagram.com/farhansyflu_?utm_source=ig_web_button_share_sheet&igsh=OHlid216ODYzeWdl">
                <i className='ri-instagram-fill ri-2x'></i>
            </a>
            <a href="https://wa.me/6288228973096">
                <i className='ri-whatsapp-fill ri-2x'></i>
            </a>
        </div>
    </div>
  )
}

export default Footer