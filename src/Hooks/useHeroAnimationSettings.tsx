import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

interface HeroAnimationContextType {
  isOpen?: boolean;
  changeSize?: boolean;
  moveVertically?: boolean;
  moveHorizontally?: boolean;
  textAnimation?: boolean;
  sizeTiming?: string | number;
  verticalTiming?: string | number;
  horizontaltiming?: string | number;
  textTiming?: string | number;
  handleMenuOpen?: () => void;
  handleChangeSizeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMoveVerticallyChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMoveHorizontallyChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTextAnimationChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSizeTimeChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleVerticalTimingChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleHorizontalTimingChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleTextTimingChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

interface HeroAnimationSettingsProviderProps {
  children: ReactNode;
}

const heroAnimationContext = createContext<HeroAnimationContextType>({});

export const HeroAnimationSettings = () => useContext(heroAnimationContext);

const HeroAnimationSettingsProvider: React.FC<
  HeroAnimationSettingsProviderProps
> = ({ children }) => {
  // states
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [changeSize, setChangeSize] = useState<boolean>(true);
  const [moveVertically, setMoveVertically] = useState<boolean>(true);
  const [moveHorizontally, setMoveHorizontally] = useState<boolean>(false);
  const [textAnimation, setTextAnimation] = useState<boolean>(true);
  const [sizeTiming, setSizeTiming] = useState<string>("5000");
  const [verticalTiming, setVerticalTiming] = useState<string>("6000");
  const [horizontaltiming, setHorizontalTiming] = useState<string>("6000");
  const [textTiming, setTextTiming] = useState<string>("3000");

  const handleMenuOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const handleChangeSizeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.persist();
    setChangeSize(e.target.checked);
  };

  const handleMoveVerticallyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.persist();
    setMoveVertically(e.target.checked);
  };

  const handleMoveHorizontallyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.persist();
    setMoveHorizontally(e.target.checked);
  };

  const handleTextAnimationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.persist();
    setTextAnimation(e.target.checked);
  };

  const handleSizeTimeChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSizeTiming((e.target as HTMLInputElement).value + "000");
  };

  const handleVerticalTimingChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setVerticalTiming((e.target as HTMLInputElement).value + "000");
  };

  const handleHorizontalTimingChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setHorizontalTiming((e.target as HTMLInputElement).value + "000");
  };

  const handleTextTimingChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setTextTiming((e.target as HTMLInputElement).value + "000");
  };

  const contextValue = useMemo(
    () => ({
      isOpen,
      changeSize,
      moveVertically,
      moveHorizontally,
      textAnimation,
      sizeTiming,
      verticalTiming,
      horizontaltiming,
      textTiming,
      handleMenuOpen,
      handleChangeSizeChange,
      handleMoveVerticallyChange,
      handleMoveHorizontallyChange,
      handleTextAnimationChange,
      handleSizeTimeChange,
      handleVerticalTimingChange,
      handleHorizontalTimingChange,
      handleTextTimingChange,
    }),
    [
      isOpen,
      changeSize,
      moveVertically,
      moveHorizontally,
      textAnimation,
      sizeTiming,
      verticalTiming,
      horizontaltiming,
      textTiming,
    ]
  );

  return (
    <heroAnimationContext.Provider value={contextValue}>
      {children}
    </heroAnimationContext.Provider>
  );
};

export default HeroAnimationSettingsProvider;
