import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./carrosel.css";

const images = [
    "/carousel/image (1).png",
    "/carousel/image (2).png",
    "/carousel/image (3).png",
    "/carousel/image (4).png",
    "/carousel/image.png"
];

export const Carrosel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const carouselWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
        setWidth(carouselWidth);
    }, []);

    return (
        <div className="slider">
            <motion.div
                ref={carousel}
                className="carousel"
            >
                <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0 }}
                    animate={{ x: [-100, -width] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...images, ...images].map((image, index) => (
                        <motion.div className="item" key={index}>
                            <img src={image} alt={`Carrossel item ${index}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};
