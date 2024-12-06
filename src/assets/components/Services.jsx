import { useState } from "react";
import Card from "./sub-components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      url: "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2021/08/WhatsApp-Image-2021-08-24-at-13.58.07.jpeg",
      description: "Haircut & Styling",
      serviceDescription:
        "A classic haircut & styling service tailored to your preferences. Our experts will give you the perfect look.",
    },
    {
      url: "https://www.bellanaijastyle.com/wp-content/uploads/2021/01/Nenails-768x768.jpg",
      description: "Manicure",
      serviceDescription:
        "A relaxing manicure service to give your nails a fresh, clean, and polished look.",
    },
    {
      url: "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2021/08/WhatsApp-Image-2021-08-24-at-14.01.52.jpeg",
      description: "Hair Coloring & Treatment",
      serviceDescription:
        "Transform your hair with vibrant color and nourishing treatments for healthy, shiny hair.",
    },
    {
      url: "https://i.pinimg.com/236x/04/a3/f6/04a3f634014ddb73b7ade0cde592d60a.jpg",
      description: "Pedicure",
      serviceDescription:
        "Pamper your feet with a luxurious pedicure to keep them smooth, clean, and beautiful.",
    },
    {
      url: "http://blog.sugar.ng/files/styles/width-640/public/Full%20Glam%20Smokey%20Eye%20Bridal%20looks%20%281%29.jpg?itok=XXk2Rtwn",
      description: "Bridal Hair & Makeup",
      serviceDescription:
        "Get the perfect bridal look with professional hair styling and makeup for your special day.",
    },
    {
      url: "https://cartnear.s3.us-east-2.amazonaws.com/ng/0a8a4ccd09f73cd1828dad7d4b246266.jpg",
      description: "Wigs",
      serviceDescription:
        "A wide selection of beautiful, high-quality wigs for any occasion.",
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section id="services" className="relative text-center pb-16 mb-5">
      {/* Wave Background */}
      <div className="absolute inset-0 -z-10 bg-green-800">
        <svg
          className="absolute top-0 w-full h-[120px]"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 0 720 80 1080 40C1260 20 1440 40 1440 40V120H0V40Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-[120px]"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C360 120 720 40 1080 80C1260 100 1440 80 1440 80V0H0V80Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <h2 className="text-3xl font-bold font-sans mb-8">Our Services</h2>
      <div
        className={`relative w-full max-w-4xl mx-auto ${
          isModalOpen ? "opacity-50 blur-sm" : ""
        }`}
      >
        <div className="overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="z-10">
                <div className="relative w-full h-60 sm:h-72 md:h-80 bg-gradient-to-b from-green-400 to-orange-500 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={image.url}
                    alt={image.description}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-orange-500 p-2 text-center text-sm">
                    {image.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isModalOpen && <Card closeModal={closeModal} image={modalImage} />}
    </section>
  );
}

export default Services;
