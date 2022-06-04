import React from "react";

export const isEmpty = (target: any) => {
  if (target) {
    return target.length === 0;
  }
};
