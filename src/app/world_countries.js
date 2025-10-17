export const geo = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "United States" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-125, 24],
            [-66, 24],
            [-66, 49],
            [-125, 49],
            [-125, 24],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Brazil" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-74, -34],
            [-34, -34],
            [-34, 5],
            [-74, 5],
            [-74, -34],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Australia" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [113, -43],
            [154, -43],
            [154, -10],
            [113, -10],
            [113, -43],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Europe" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-10, 35],
            [40, 35],
            [40, 70],
            [-10, 70],
            [-10, 35],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Asia" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [40, 0],
            [150, 0],
            [150, 60],
            [40, 60],
            [40, 0],
          ],
        ],
      },
    },
  ],
};
