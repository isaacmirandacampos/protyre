import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-fullpage-hero"
    >
      <div
        className={`
            es-fullpage-hero__content
            ${slice.variation === "imageRight"
            ? "es-fullpage-hero__image--right"
            : "es-fullpage-hero__image--left"
          }
        `}
      >
        <div>
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              className="es-fullpage-hero__image"
            />
          )}
        </div>

        <div className="es-fullpage-hero__content-right">
          <div className="es-fullpage-hero__content__intro">
            {isFilled.keyText(slice.primary.eyebrowHeadline) && (
              <p className="es-fullpage-hero__content__intro__eyebrow">
                {slice.primary.eyebrowHeadline}
              </p>
            )}
            {isFilled.richText(slice.primary.title) && (
              <div className="es-fullpage-hero__content__intro__headline">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            {isFilled.richText(slice.primary.description) && (
              <div className="es-fullpage-hero__content__intro__description">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
            <PrismicNextLink
              className="es-call-to-action__link"
              field={slice.primary.callToActionLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
