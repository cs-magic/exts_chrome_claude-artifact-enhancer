export const config = {
  svg: {
    export: {
      width: {
        min: 36,
      },
    },
  },
  png: {
    export: {
      ppi: {
        default: 640, // svg 在 320 导出不够
      },
    },
  },
};
