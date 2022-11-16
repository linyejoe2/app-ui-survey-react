import { Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const FbCreateShort: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <svg className="fb-short-col" width="102" height="177" viewBox="0 0 102 177" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.5" y="0.5" width="101" height="176" rx="13.5" fill="#F7F8FA" stroke="#E5E5E5" />
        <path d="M1 14C1 6.8203 6.8203 1 14 1H88C95.1797 1 101 6.8203 101 14V116H1V14Z" fill="url(#pattern0)" />
        <circle cx="53" cy="119" r="16" fill="#F7F8FA" />
        <path d="M65.9999 119C65.9999 126.18 60.1796 132 52.9999 132C45.8202 132 39.9999 126.18 39.9999 119C39.9999 111.82 45.8202 106 52.9999 106C60.1796 106 65.9999 111.82 65.9999 119Z" fill="#1776EF" />
        <line x1="45" y1="119" x2="61" y2="119" stroke="#F7F8FA" strokeWidth="2" />
        <line x1="53" y1="111" x2="53" y2="127" stroke="#F7F8FA" strokeWidth="2" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_343_1576" transform="translate(0 -0.0797101) scale(0.000462963 0.000402576)" />
          </pattern>
          <image id="image0_343_1576" width="2160" height="2880" xlinkHref="/S__162758683.jpg" />
        </defs>
        <foreignObject width="100" height="175">
          <Typography
            className="fb-short-create-text"
            component="div">
            {t("fb.s.create")}
          </Typography>
        </foreignObject>
      </svg>
    </>
  )
}