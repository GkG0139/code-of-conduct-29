const getColorByColorCode = (colorCode: string) => {
  let color: string;
  switch (colorCode) {
    case '#ff6d6d':
    case '#f44a4a':
      color = 'Red';
      break;
    case '#06b050':
    case '#92d051':
      color = 'Green';
      break;
    case '#0171c0':
    case '#06b0f0':
      color = 'Blue';
      break;
    case '#ffff33':
    case '#f5ff79':
      color = 'Yellow';
      break;
    case '#f6b26b':
    case '#ffe699':
      color = 'Orange';
      break;
    case '#ff99f8':
    case '#ffd9fc':
      color = 'Pink';
      break;
    default:
      color = 'black';
      break;
  }
  return color;
};

export default getColorByColorCode;
