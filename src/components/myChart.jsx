import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "./ui/theme-provider";

import Chart from "react-apexcharts";

export default function MyChart({ IsInView, data, unit, name }) {
  // get theme
  const { theme } = useTheme();
  // state obj for graph
  const [state, setState] = useState({
    options: {
      chart: {
        toolbar: {
          show: true,
          tools: {
            download: false,
            reset: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw" style="fill: none;"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
            zoom: false,
            pan: false,
          },
        },
      },
      stroke: { curve: "smooth", colors: ["#17A34A"] },
      fill: {
        colors: ["#17A34A"],
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "system-ui",
            fontWeight: 700,
            cssClass: "font-normal",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "20/01",
          "21/01",
          "22/01",
          "23/01",
          "24/01",
          "25/01",
          "26/01",
          "27/01",
        ],
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "system-ui",
            fontWeight: 700,
            cssClass: "font-normal",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        borderColor: "#71717F",
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        theme: theme,
        y: {
          formatter: (val) => (val += ` ${unit}`),
        },
      },
    },
    series: [
      {
        name: name,
        color: "#17A34A",
        data: data,
      },
    ],
  });
  // update theme on mode change
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        chart: {
          ...prevState.options.chart,
          foreColor: theme === "dark" ? "#fffff0" : "#333",
        },
        tooltip: {
          ...prevState.options.tooltip,
          theme: theme,
        },
      },
    }));
  }, [theme]);
  // force update for theme
  const forceUpdate = useCallback(() => updateState({}), []);
  return (
    // load only when in view
    IsInView && (
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
      />
    )
  );
}
