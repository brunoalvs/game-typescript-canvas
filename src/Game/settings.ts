// Basic
export const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
export const ctx = canvas.getContext("2d")!;

canvas.width = 512;
canvas.height = 512 * 0.5625;
