"use client";
import React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

// Inspired by the former Facebook spinners.
function FacebookCircularProgress() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={(theme) => ({
            color: theme.palette.grey[200],
            ...(theme.palette.mode === "dark" && {
              color: theme.palette.grey[800],
            }),
          })}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={(theme) => ({
            color: "#1a90ff",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
            ...(theme.palette.mode === "dark" && { color: "#308fe8" }),
          })}
          size={40}
          thickness={4}
        />
      </Box>
    </div>
  );
}

export default FacebookCircularProgress;
