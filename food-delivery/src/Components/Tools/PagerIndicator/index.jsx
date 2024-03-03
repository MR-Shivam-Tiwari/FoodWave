import React from "react";

const PagerIndicator = ({
  className,
  activeCss,
  inactiveCss,
  sliderRef = null,
  count,
  activeIndex,
  selectedWrapperCss = "",
  unselectedWrapperCss = "",
  ...restProps
}) => {
  const [slidesToShow, setSlidesToShow] = React.useState(0);

  React.useEffect(() => {
    const _slidesToShow = sliderRef?.current?.state?.itemsInSlide;
    setSlidesToShow(_slidesToShow);
  }, [sliderRef]);

  return (
    <div className={className} {...restProps}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          const isActive =
            activeIndex >= i * slidesToShow &&
            activeIndex < (i + 1) * slidesToShow;
          return (
            <div
              key={"indicator" + i}
              className={`${isActive ? selectedWrapperCss : unselectedWrapperCss} `}
            >
              <span
                className={`${isActive ? activeCss : inactiveCss} slider-indicator`}
                onClick={() => sliderRef?.current?.slideTo(i * slidesToShow)}
              />
            </div>
          );
        })}
    </div>
  );
};

export { PagerIndicator };
