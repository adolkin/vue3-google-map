import { fileURLToPath } from "node:url";

export default {
  title: "vue3-google-map",
  description: "vue3-google-map documentation",
  themeConfig: {
    nav: [
      {
        text: "Getting Started",
        link: "/getting-started/",
      },
      {
        text: "Components",
        link: "/components/",
      },
      {
        text: "Themes",
        link: "/themes/",
      },
      {
        text: "Advanced Usage",
        link: "/advanced-usage/",
      },
    ],
    sidebar: [
      {
        text: "Components",
        children: [
          {
            text: "Marker",
            link: "/components/marker",
          },
          {
            text: "Polyline",
            link: "/components/polyline",
          },
          {
            text: "Polygon",
            link: "/components/polygon",
          },
          {
            text: "Rectangle",
            link: "/components/rectangle",
          },
          {
            text: "Circle",
            link: "/components/circle",
          },
          {
            text: "Info Window",
            link: "/components/info-window",
          },
          {
            text: "Custom Marker",
            link: "/components/custom-marker",
          },
          {
            text: "Custom Control",
            link: "/components/custom-control",
          },
          {
            text: "Marker Cluster",
            link: "/components/marker-cluster",
          },
        ],
      },
    ],
  },
  alias: {
    "@/lib": fileURLToPath(new URL("../../src/index.ts", import.meta.url)),
    "/@docs": fileURLToPath(new URL("..", import.meta.url)),
  },
};
