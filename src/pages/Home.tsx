import { useEffect, useState } from "react";
import landscape1 from "../assets/landscape1.jpg";
import landscape2 from "../assets/landscape2.jpg";
import landscape3 from "../assets/landscape3.jpg";
import landscape4 from "../assets/landscape4.jpg";
import landscape5 from "../assets/landscape5.jpg";

const images = [
  {
    src: landscape1,
    alt: "landscape1",
  },
  {
    src: landscape2,
    alt: "landscape2",
  },
  {
    src: landscape3,
    alt: "landscape3",
  },
  {
    src: landscape4,
    alt: "landscape4",
  },
  {
    src: landscape5,
    alt: "landscape5",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 6000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="relative h-[70vh]">
      {images.map((image, i) => (
        <img
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover ${
            current === i ? "opacity-100" : "opacity-0"
          } transition-opacity duration-3500`}
          key={image.src}
        />
      ))}
    </div>
  );
};

export default Home;
