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
      url: "/Haircut.jpeg",
      description: "Haircut & Styling",
      serviceDescription:
        "A classic haircut & styling service tailored to your preferences. Our experts will give you the perfect look.",
    },
    {
      url: "/Attachment.jpeg",
      description: "Attachment",
      serviceDescription:
        "A relaxing manicure service to give your nails a fresh, clean, and polished look.",
    },
    {
      url: "/Haircoloring.jpeg",
      description: "Hair Coloring & Treatment",
      serviceDescription:
        "Transform your hair with vibrant color and nourishing treatments for healthy, shiny hair.",
    },
    {
      url: "/ChildrenHair.jpeg",
      description: "Braids",
      serviceDescription:
        "Pamper your feet with a luxurious pedicure to keep them smooth, clean, and beautiful.",
    },
    {
      url: "/Lashes.jpeg",
      description: "Lashes",
      serviceDescription:
        "Get the perfect bridal look with professional hair styling and makeup for your special day.",
    },
    {
      url: "/Wigs.jpeg",
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
      {/* Content */}
      <h2 className="text-3xl text-white uppercase font-lora md:pt-28 mb-8">
        Our Services
      </h2>
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
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="z-10 group">
                <div className="relative w-full h-60 sm:h-72 md:h-80 rounded-lg shadow-lg overflow-hidden transition-transform duration-300">
                  <img
                    src={image.url}
                    alt={image.description}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                  <div className="absolute bottom-0 left-0 w-full font-hind font-bold bg-black bg-opacity-50 text-orange-600 p-2 text-center text-sm rounded-t-sm transition-all duration-300 h-10 flex items-center justify-center group-hover:h-16 group-hover:text-lg group-hover:p-4">
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
