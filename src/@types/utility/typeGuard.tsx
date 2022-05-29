import React from "react";

export const isEmpty = (target: string) => {
  if (target) {
    return target.length === 0;
  }
};
