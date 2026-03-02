// src/data/routes.ts
export interface RouteData {
  id: string | number;
  title: string;
  path: [number, number][];
  transportMode?: string;
}

export const sampleRoutes: RouteData[] = [
  {
    id: "route-1",
    title: "เส้นทางเชื่อมต่อสถานีสามย่าน - คณะวิศวฯ",
    path: [
      [13.7325, 100.5298],
      [13.734, 100.529],
      [13.736, 100.5231],
    ],
  },
];
