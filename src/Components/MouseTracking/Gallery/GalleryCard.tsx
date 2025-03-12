import React, { ReactNode, useState } from "react";

type LabelDirection = "up" | "down" | "left" | "right";

interface GalleryCardProps {
  bottom?: string;
  right?: string;
  left?: string;
  top?: string;
  mdHeight: string;
  mdWidth: string;
  background: string;
  children: ReactNode;
  mouseOverElementHandler: (name: string | null) => void;
  name: string;
  label?: string;
  labelDirection?: LabelDirection;
  image?: {
    src: string;
    alt: string;
  };
}

const getLabelAnimation = (direction: LabelDirection, isHovered: boolean) => {
  const animations = {
    up: isHovered ? "-translate-y-[110%]" : "",
    down: isHovered ? "translate-y-[110%]" : "",
    left: isHovered ? "-translate-x-[120%]" : "",
    right: isHovered ? "translate-x-[120%]" : "",
  };
  return animations[direction];
};

const GalleryCard: React.FC<GalleryCardProps> = ({
  bottom,
  right,
  left,
  top,
  mdHeight,
  mdWidth,
  background,
  children,
  mouseOverElementHandler,
  name,
  label,
  labelDirection,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    mouseOverElementHandler(name);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    mouseOverElementHandler(null);
  };
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div
        className={`
          block items-center justify-center overflow-hidden rounded-3xl 
          ${background} ${label ? "px-4 py-10" : "p-6"} text-3xl font-extrabold text-black 
          md:absolute md:flex
          ${bottom ? `bottom-[${bottom}]` : ""}
          ${right ? `right-[${right}]` : ""}
          ${left ? `left-[${left}]` : ""}
          ${top ? `top-[${top}]` : ""}
          md:h-[${mdHeight}] md:w-[${mdWidth}]
          relative
          ${image ? "group" : ""}
        `}
      >
        {label && labelDirection && (
          <div
            className={`
              ease duration-200 md:absolute
              ${labelDirection === "up" || labelDirection === "down" ? "left-3" : ""}
              ${labelDirection === "left" || labelDirection === "right" ? "bottom-2" : ""}
              ${labelDirection === "up" ? "top-2" : ""}
              ${labelDirection === "down" ? "bottom-2" : ""}
              ${labelDirection === "right" ? "right-3" : ""}
              ${getLabelAnimation(labelDirection, isHovered)}
            `}
          >
            <p className="">{label}</p>
          </div>
        )}
        <div className="relative h-full w-full text-2xl">
          {image && (
            <div className="flex h-full w-full items-center justify-center rounded-3xl">
              <img
                src={image.src}
                alt={image.alt}
                className="ease h-full w-full duration-200 group-hover:-translate-x-[120%]"
              />
              <div className="absolute right-0 w-0 translate-x-full opacity-0 duration-150 ease-in group-hover:w-full group-hover:translate-x-0 group-hover:opacity-100">
                {children}
              </div>
            </div>
          )}
          {!image && (
            <div
              className={`w-full opacity-0 duration-150 ease-in md:absolute md:top-[50%] md:translate-y-[-50%] ${
                isHovered ? "opacity-100" : ""
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
