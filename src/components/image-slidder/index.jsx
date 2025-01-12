import { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./styles.css";

function ImageSlidder({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  async function fetchImages(getImageURL) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getImageURL}?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (e) {
      setError(e.error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (error !== null) {
    return <div>Error occured! {error}</div>;
  }

  return (
    <>
      {/* <div className="flex flex-row justify-between items-center px-5 align-middle w-[50%] h-[20rem] bg-red-200 relative"> */}
      <div className="container">
        <FaRegArrowAltCircleLeft
          onClick={handlePrev}
          className="absolute w-[10rem] h-[2rem] text-white left-2 hover:cursor-pointer"
        />

        {images && images.length
          ? images.map((imgItem, index) => (
              <img
                key={imgItem.id}
                src={imgItem.download_url}
                alt={""}
                // className="border boarder-[0.5rem] w-[100%] h-[100%]"
                className={
                  currentSlide === index
                    ? "current_image"
                    : "current_image hideImage"
                }
              />
            ))
          : null}

        {/* <div className="bg-red-400">
          <input>text1</input>
          <inptut>tx 3</inptut>
          <button>Submit</button>
        </div> */}

        <FaRegArrowAltCircleRight
          onClick={handleNext}
          className="absolute w-[10rem] h-[2rem] right-2 text-white hover:cursor-pointer"
        />

        <span className="circle-indicator">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentSlide === index
                      ? "current_indicator"
                      : "current_indicator inactive_indicator"
                  }
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}

export default ImageSlidder;
