import React, { ReactNode, useState, useRef, CSSProperties } from "react";
import useWindowSize from "../../../Hooks/useWindowSize";
import useInView from "../../../Hooks/useInView";
import { NavLink } from "react-router-dom";

type LabelDirection = "up" | "down" | "left" | "right";

// Menu item for navigation cards
interface MenuItem {
  label: string;
  href?: string; // For NavLink (internal routes)
  externalHref?: string; // For external links
  onClick?: () => void; // For button actions
  end?: boolean; // For NavLink exact matching
}

interface GalleryCardProps {
  // Positioning (desktop only)
  bottom?: string;
  right?: string;
  left?: string;
  top?: string;
  mdHeight: string;
  mdWidth: string;
  background: string;

  // Card identity
  name: string;
  label?: string;
  labelDirection?: LabelDirection;
  mobileOrder?: number;

  // Mouse tracking
  mouseOverElementHandler: (name: string | null) => void;

  // Content options (use ONE of these)
  content?: string | string[]; // Simple text content - auto-styled. Array renders with line breaks.
  menuItems?: MenuItem[]; // Navigation menu items - auto-rendered
  children?: ReactNode; // Complex content (escape hatch)

  // Image card options
  image?: {
    src: string;
    alt: string;
  };

  // Link options (makes content clickable)
  href?: string; // External link

  // Profile card option
  profileImage?: {
    src: string;
    alt: string;
    birthdayOverlay?: {
      src: string;
      alt: string;
      isBirthday: boolean;
    };
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

// Standard text classes for different content types
const TEXT_CLASSES = {
  content: "text-base md:text-3xl leading-9",
  menu: "text-lg md:text-[3vmin] font-normal tracking-wider",
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
  mobileOrder,
  content,
  menuItems,
  href,
  profileImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const isMdBreakpoint = width >= 768; // Tailwind's md breakpoint

  // Use intersection observer for mobile (< md) to reveal content when 75% visible
  const isInView = useInView(cardRef, { threshold: 0.75, triggerOnce: true });

  // On desktop (md+): use hover. On mobile: use intersection observer
  const isRevealed = isMdBreakpoint ? isHovered : isInView;

  // Show "touch me" on mobile for image cards (they have hidden content behind the image)
  const showTouchIndicator = image && !isMdBreakpoint;

  const handleMouseOver = () => {
    setIsHovered(true);
    mouseOverElementHandler(name);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    mouseOverElementHandler(null);
  };

  // Use CSS variables for height and width, and apply positioning only at md breakpoint
  const style = {
    "--card-height": mdHeight,
    "--card-width": mdWidth,
    // Mobile ordering (only applies when in flex container on mobile)
    ...(!isMdBreakpoint &&
      mobileOrder !== undefined && {
        order: mobileOrder,
      }),
    // Desktop absolute positioning
    ...(isMdBreakpoint && {
      bottom,
      right,
      left,
      top,
    }),
  } as CSSProperties;

  // Render simple text content
  const renderContent = () => {
    if (!content) return null;

    // Support both string and array of strings (array renders with line breaks)
    const textElement = (
      <p className={TEXT_CLASSES.content}>
        {Array.isArray(content)
          ? content.map((line, i) => (
              <span key={i}>
                {line}
                {i < content.length - 1 && <br />}
              </span>
            ))
          : content}
      </p>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={() => mouseOverElementHandler(null)}
          className="grid h-full w-full place-items-center"
        >
          {textElement}
        </a>
      );
    }

    return (
      <div className="grid h-full w-full place-items-center">{textElement}</div>
    );
  };

  // Render navigation menu items
  const renderMenuItems = () => {
    if (!menuItems) return null;

    return (
      <div className="flex gap-6 md:gap-10 flex-col h-full w-full">
        {menuItems.map((item, index) => {
          const baseClasses = `flex items-center justify-center w-full h-full border-b-2 border-transparent ${TEXT_CLASSES.menu} hover:border-black`;
          const activeClasses = `flex items-center justify-center w-full h-full border-b-2 ${TEXT_CLASSES.menu} border-black`;

          // Internal route (NavLink)
          if (item.href) {
            return (
              <NavLink
                key={index}
                to={item.href}
                onMouseMove={() => mouseOverElementHandler(null)}
                className={({ isActive }) =>
                  isActive ? activeClasses : baseClasses
                }
                end={item.end}
                style={{ height: `${100 / menuItems.length}%` }}
              >
                <span>{item.label}</span>
              </NavLink>
            );
          }

          // Button with onClick
          if (item.onClick) {
            return (
              <button
                key={index}
                onClick={item.onClick}
                onMouseMove={() => mouseOverElementHandler(null)}
                className={baseClasses}
                style={{ height: `${100 / menuItems.length}%` }}
              >
                <span>{item.label}</span>
              </button>
            );
          }

          // External link
          if (item.externalHref) {
            return (
              <a
                key={index}
                href={item.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={() => mouseOverElementHandler(null)}
                className={baseClasses}
                style={{ height: `${100 / menuItems.length}%` }}
              >
                <span>{item.label}</span>
              </a>
            );
          }

          return null;
        })}
      </div>
    );
  };

  // Render profile image (for BioCard-style cards)
  const renderProfileImage = () => {
    if (!profileImage) return null;

    return (
      <div className="relative grid place-items-center">
        <div className="relative">
          <img
            src={profileImage.src}
            className="mt-8 w-40 rounded-full shadow-lg"
            alt={profileImage.alt}
          />
          {profileImage.birthdayOverlay?.isBirthday && (
            <img
              src={profileImage.birthdayOverlay.src}
              alt={profileImage.birthdayOverlay.alt}
              className="absolute top-3 left-1/2 h-14 w-14 -translate-x-1/2 animate-bounce"
            />
          )}
        </div>
      </div>
    );
  };

  // Determine what to render inside the card
  const renderCardContent = () => {
    // Image card - special slide-out behavior
    if (image) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-3xl">
          <img
            src={image.src}
            alt={image.alt}
            className={`ease h-full w-full duration-200 ${
              isRevealed
                ? "-translate-x-[120%]"
                : "md:group-hover:-translate-x-[120%]"
            }`}
          />
          <div
            className={`absolute right-0 duration-150 ease-in ${
              isRevealed
                ? "w-full translate-x-0 opacity-100"
                : "w-0 translate-x-full opacity-0 md:group-hover:w-full md:group-hover:translate-x-0 md:group-hover:opacity-100"
            }`}
          >
            {/* Priority: menuItems > content > children */}
            {menuItems
              ? renderMenuItems()
              : content
                ? renderContent()
                : children}
          </div>
        </div>
      );
    }

    // Non-image card - standard reveal behavior
    return (
      <div
        className={`w-full opacity-0 duration-150 ease-in flex items-center justify-center md:absolute md:top-[50%] md:translate-y-[-50%] ${
          isRevealed ? "opacity-100" : ""
        }`}
      >
        {/* Priority: profileImage + content > menuItems > content > children */}
        {profileImage ? (
          <div className="flex h-full flex-col justify-center">
            {renderProfileImage()}
            {content && (
              <div className="mt-8 flex items-center">
                <div className="grid h-full w-full place-items-center">
                  <p className={TEXT_CLASSES.content}>
                    {Array.isArray(content)
                      ? content.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < content.length - 1 && <br />}
                          </span>
                        ))
                      : content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : menuItems ? (
          renderMenuItems()
        ) : content ? (
          renderContent()
        ) : (
          children
        )}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`
          block items-center w-full justify-center overflow-hidden rounded-3xl
          ${background} ${label ? "px-4 py-10" : "p-6"} text-xl md:text-3xl font-extrabold text-black
          min-h-[180px]
          md:absolute md:flex md:h-[var(--card-height)] md:w-[var(--card-width)] md:min-h-0
          relative
          ${image ? "group" : ""}
        `}
        style={style}
      >
        {/* Label */}
        {label &&
          labelDirection &&
          (isMdBreakpoint ? (
            // Desktop: original positioning and animation
            <div
              className={`
                ease duration-200 absolute
                ${labelDirection === "up" || labelDirection === "down" ? "left-3" : ""}
                ${labelDirection === "left" || labelDirection === "right" ? "bottom-2" : ""}
                ${labelDirection === "up" ? "top-2" : ""}
                ${labelDirection === "down" ? "bottom-2" : ""}
                ${labelDirection === "right" ? "right-3" : ""}
                ${getLabelAnimation(labelDirection, isRevealed)}
              `}
            >
              <p className="">{label}</p>
            </div>
          ) : (
            // Mobile: static top-left, negative color via mix-blend-difference, no animation
            <div
              className="absolute top-2 left-3"
              style={{ mixBlendMode: "difference" }}
            >
              <p className="text-white">{label}</p>
            </div>
          ))}

        {/* Touch me indicator for mobile image cards - bottom right corner */}
        {showTouchIndicator && (
          <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
            <span className="text-xs font-normal opacity-60 animate-pulse">
              touch me
            </span>
          </div>
        )}

        {/* Card content */}
        <div className="relative h-full w-full">{renderCardContent()}</div>
      </div>
    </div>
  );
};

export default GalleryCard;
