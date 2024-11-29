import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StarRating";
import { useEffect } from "react";

const Card = ({ closeModal, image }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="fixed inset-0 flex items-center justify-center p-6">
      <div
        onClick={closeModal}
        className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-40"
        style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
      ></div>
      <div className=" rounded bg-white relative max-h-full overflow-y-scroll p-4 z-50 max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Xmark */}
        <div
          className=" absolute top-4 left-4 rounded p-2 cursor-pointer hover:bg-gray-300 hover:text-red-600 transition-all grid place-items-center"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} className="text-lg" />
        </div>
        {/* Card Content */}

        <div className="">
          {/* Card Title */}
          <h1 className="my-5 font-sans font-extrabold">{image.description}</h1>

          <section className="flex flex-col lg:flex-row md:flex-row gap-4">
            <img
              src={image.url}
              alt={image.description}
              className=" max-w-52 h-auto rounded"
            />

            <div>
              <p className="text-sm md:text-base lg:text-lg">
                {image.serviceDescription}
              </p>
              <StarRating />
              <button
                className="p-2 border border-green-500 rounded-md bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform"
                // style={{ transition: "all ease .5s" }}
              >
                Book an Appointment
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Card;
