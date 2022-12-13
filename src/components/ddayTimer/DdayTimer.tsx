/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { useEffect, useState } from "react";

export function DdayTimer({ closeDueYmd, currentTimestamp }) {
  const diffSeconds = Math.floor((new Date(`${closeDueYmd} 24:00:00+09:00`).getTime() - currentTimestamp) / 1000);

  if (Number.isNaN(diffSeconds)) return null;

  if (diffSeconds <= 0) {
    return <div css={stylePill}>기간만료</div>;
  }

  const diffDays = Math.floor(diffSeconds / 60 / 60 / 24);

  if (diffDays > 0) {
    return <div css={stylePill}>D-{diffDays}</div>;
  } else {
    return <Timer diffSeconds={diffSeconds} />;
  }
}

function Timer({ diffSeconds }) {
  const [seconds, setSeconds] = useState(diffSeconds);

  useEffect(() => {
    let timerSeconds = seconds;

    const intervalId = setInterval(() => {
      timerSeconds--;

      if (timerSeconds < 0) {
        clearInterval(intervalId);
      } else {
        setSeconds(timerSeconds);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div css={stylePill}>{formatTime(seconds)}</div>;
}

function formatTime(seconds) {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds - hour * 3600) / 60);
  const sec = (seconds - hour * 3600) % 60;

  const zeroPad = (v) => (v < 10 ? `0${v}` : v);

  return `${zeroPad(hour)}:${zeroPad(min)}:${zeroPad(sec)}`;
}

const stylePill = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  background: #ddba40;
  border-radius: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17.16px;
  height: 17.16px;
  letter-spacing: -0.005em;
  color: #ffffff;
`;
