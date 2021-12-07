import { DARK_COLORS, LIGHT_COLORS, TWITTER_LINK } from "lib/constants";
import { shuffleArray } from "lib/shuffleArray";
import { useIsFontReady } from "lib/useIsFontReady";
import arangaImg from "/public/aranga.webp";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import cx from "clsx";
import { FOCUS_VISIBLE_OUTLINE } from "lib/constants";
import { useTheme } from 'next-themes'

export const About = () => {
  // Before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady();
  const { theme } = useTheme();
  const palette = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  const [colors, setColors] = React.useState<string[]>([]);

  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(palette));
  }, [palette]);

  return (
    <div className="container mx-auto">
      <div className="space-x-5 lg:flex item-center lg:-mx-4">
        <div className="lg:px-4 ">
          <RoughNotationGroup show={isFontReady}>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
              Hi there, I'm{" "}
              <RainbowHighlight color={colors[4]}>Aranga</RainbowHighlight>.
            </h1>

            <div className="mt-4 text-gray-800 dark:text-gray-200">
              <p>
                Engineer with +4 years of experience in building quality,
                user-friendly and high-performance accessible web
                experiences.Skilled in Javascript, Python to deliver features,
                maintain and support large-scale web applications.
              </p>
              <p className="mt-2">
                I love making tools that are user-friendly, simple and
                delightful. I work as a{" "}
                <RainbowHighlight color={colors[1]}>
                  Frontend Engineer
                </RainbowHighlight>{" "}
                at{" "}
                <a
                  href="http://boloo.co/"
                  className={cx(
                    "font-bold transition-colors hover:text-cyan-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  Boloo ❤️
                </a>{" "}
                &mdash; focusing on UI/UX and helping the Bol.com seller
                community create wonderful things.
              </p>

              <p className="mt-2">
                I share here what I'm learning about shipping{" "}
                <RainbowHighlight color={colors[2]}>
                  great products
                </RainbowHighlight>
                , becoming a{" "}
                <RainbowHighlight color={colors[3]}>
                  better developer
                </RainbowHighlight>{" "}
                and growing a{" "}
                <RainbowHighlight color={colors[0]}>
                  career in tech
                </RainbowHighlight>
                .
              </p>

              <p className="mt-2">
                Let's hang out on{" "}
                <a
                  href={TWITTER_LINK}
                  className={cx(
                    "font-bold transition-colors hover:text-cyan-500",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
          </RoughNotationGroup>
        </div>
        <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
          <Image
            src={arangaImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};