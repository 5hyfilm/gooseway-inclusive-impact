// src/data/obstacles.ts
export interface ObstacleData {
  id: string | number;
  position: [number, number];
  description: string;
  type?: string;
}

export const sampleObstacles: ObstacleData[] = [
  {
    id: "obs-1",
    position: [13.7367, 100.5231],
    description: "ทางเท้าชำรุดบริเวณหน้าคณะวิศวฯ",
    type: "pavement_damage",
  },
  {
    id: "obs-2",
    position: [13.738, 100.525],
    description: "มีเสาไฟฟ้ากีดขวางทางเดิน",
    type: "utility_pole",
  },
];
