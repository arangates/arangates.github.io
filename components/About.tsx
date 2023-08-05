import { DARK_COLORS, LIGHT_COLORS, TWITTER_LINK } from "lib/constants";
import { shuffleArray } from "lib/shuffleArray";
import { useIsFontReady } from "lib/useIsFontReady";
import arangaImg from "/public/aranga-formal.png";
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
              Hi there, I'm{' '}
              <RainbowHighlight color={colors[4]}>Aranga</RainbowHighlight>.
            </h1>

            <div className="text-lg mt-4 text-gray-800 dark:text-gray-200">
              <div className="mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
                <span className="ml-3">
                  
                  <RainbowHighlight color={colors[2]}>
                    27 years
                  </RainbowHighlight>{' '}
                  old ! 
                </span>
              </div>

              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-3">
                  I work as a{' '}
                  <RainbowHighlight color={colors[1]}>
                    Frontend Engineer
                  </RainbowHighlight>{' '}
                  in{' '}
                  <a
                    href="https://www.asml.com/en"
                    className={cx(
                      'font-bold transition-colors hover:text-cyan-500',
                      FOCUS_VISIBLE_OUTLINE
                    )}
                  >
                    ASML❤️
                  </a>{' '}
                </span>
              </div>

              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-3">Veldhoven</span>
              </div>

              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="ml-3">
                  {' '}
                  love making tools that are user-friendly, simple and
                  delightful.
                </span>
              </div>
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
