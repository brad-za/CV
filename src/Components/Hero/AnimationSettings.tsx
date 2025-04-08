import React, { useState } from "react";
import SettingsIcon from "../../assets/settingsIcon.tsx";
import {
  HeroAnimationSettings,
  ScreenType,
} from "../../Hooks/useHeroAnimationSettings";

interface AnimationSettingsProps {}

const AnimationSettings: React.FC<AnimationSettingsProps> = () => {
  const [rotate, setRotate] = useState<boolean>(false);

  const {
    isOpen,
    animationsEnabled,
    changeSize,
    moveVertically,
    moveHorizontally,
    textAnimation,
    activeScreen,
    isMobile,
    sizeTiming,
    verticalTiming,
    horizontaltiming,
    textTiming,
    handleMenuOpen,
    toggleAnimations,
    handleChangeSizeChange,
    handleMoveVerticallyChange,
    handleMoveHorizontallyChange,
    handleTextAnimationChange,
    handleSizeTimeChange,
    handleVerticalTimingChange,
    handleHorizontalTimingChange,
    handleTextTimingChange,
    setActiveScreen,
    setIsMobile,
    setMoveVertically,
    setMoveHorizontally,
  } = HeroAnimationSettings();

  const handleMenuOpenWithRotation = () => {
    handleMenuOpen?.();
    setRotate(!rotate);
  };

  return (
    <div className="absolute right-10 top-10 z-50 flex flex-row-reverse">
      <div>
        <div
          onClick={handleMenuOpenWithRotation}
          className={`z-10 flex-none bg-[#292f31a7] p-2 backdrop-blur-lg transition-all duration-200 ease-in-out ${
            isOpen
              ? "bg-green- rounded-br-2xl rounded-tr-2xl"
              : "bg-red- rounded-2xl"
          }`}
        >
          <div className={rotate ? "animate-spin720" : ""}>
            <SettingsIcon />
          </div>
        </div>
      </div>
      <div
        className={`z-0 origin-top-right transform rounded-bl-2xl rounded-br-2xl rounded-tl-2xl bg-[#292f31a7] p-2 backdrop-blur-lg transition-all duration-500 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {isOpen && (
          <form className="my-5">
            <div className="flex flex-col space-y-2 text-lg font-medium">
              <div className="mb-4 border-b border-gray-600 pb-2">
                <h3 className="mb-2 text-center font-bold">Global Controls</h3>
                <div className="mb-2 flex justify-center">
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      animationsEnabled
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                    onClick={toggleAnimations}
                  >
                    Animations: {animationsEnabled ? "ON" : "OFF"}
                  </button>
                </div>
              </div>

              <div className="mb-4 border-b border-gray-600 pb-2">
                <h3 className="mb-2 text-center font-bold">Active Screen</h3>
                <div className="mb-2 flex justify-center space-x-2">
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      activeScreen === "welcome"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setActiveScreen?.("welcome")}
                  >
                    Welcome
                  </button>
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      activeScreen === "projects"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setActiveScreen?.("projects")}
                  >
                    Projects
                  </button>
                </div>
              </div>

              <div className="mb-4 border-b border-gray-600 pb-2">
                <h3 className="mb-2 text-center font-bold">Screen Size</h3>
                <div className="mb-2 flex justify-center space-x-2">
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      !isMobile
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setIsMobile?.(false)}
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      isMobile
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setIsMobile?.(true)}
                  >
                    Mobile
                  </button>
                </div>
                <div className="flex justify-between space-x-2">
                  <p>Auto Size Animation</p>
                  <input
                    type="checkbox"
                    checked={changeSize}
                    onChange={handleChangeSizeChange}
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <p>Size Change Delay</p>
                  <div className="flex rounded-xl border-2 border-white">
                    <input
                      className="w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      type="number"
                      value={`${Number(sizeTiming) / 1000}`}
                      onChange={handleSizeTimeChange}
                    />
                    <div className="mx-1"> s</div>
                  </div>
                </div>
              </div>

              <div className="mb-4 border-b border-gray-600 pb-2">
                <h3 className="mb-2 text-center font-bold">
                  Screen Transition
                </h3>
                <div className="mb-2 flex justify-center space-x-2">
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      moveVertically
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setMoveVertically?.(!moveVertically)}
                  >
                    Vertical
                  </button>
                  <button
                    type="button"
                    className={`rounded px-3 py-1 ${
                      moveHorizontally
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setMoveHorizontally?.(!moveHorizontally)}
                  >
                    Horizontal
                  </button>
                </div>
                <div className="flex justify-between space-x-2">
                  <p>Auto Vertical Animation</p>
                  <input
                    type="checkbox"
                    checked={moveVertically}
                    onChange={handleMoveVerticallyChange}
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <p>Vertical Movement Delay</p>
                  <div className="flex rounded-xl border-2 border-white">
                    <input
                      className="w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      type="number"
                      value={`${Number(verticalTiming) / 1000}`}
                      onChange={handleVerticalTimingChange}
                    />
                    <div className="mx-1"> s</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-center font-bold">Text Animation</h3>
                <div className="flex justify-between space-x-2">
                  <p>Toggle Text Animation</p>
                  <input
                    type="checkbox"
                    checked={textAnimation}
                    onChange={handleTextAnimationChange}
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <p>Text Animation Delay</p>
                  <div className="flex rounded-xl border-2 border-white">
                    <input
                      className="w-14 bg-transparent text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      type="number"
                      value={`${Number(textTiming) / 1000}`}
                      onChange={handleTextTimingChange}
                    />
                    <div className="mx-1"> s</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AnimationSettings;
