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
    }, 5000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="h-[70vh] w-full object-cover"
      />
    </div>
  );
};

export default Home;
