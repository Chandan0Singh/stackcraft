import {
  useCallback,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type EmblaApi = UseEmblaCarouselType[1];

type DotButtonClickHandler = (
  emblaApi: NonNullable<EmblaApi>,
) => void;

type UseDotButtonReturn = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaApi,
  onButtonClick?: DotButtonClickHandler,
): UseDotButtonReturn => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);

      if (onButtonClick) {
        onButtonClick(emblaApi);
      }
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((api: NonNullable<EmblaApi>) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: NonNullable<EmblaApi>) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type DotButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export const DotButton = ({
  children,
  ...restProps
}: DotButtonProps) => {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

