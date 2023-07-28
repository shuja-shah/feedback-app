function getFontColorBasedOnColor(color) {
  // Convert hex color to RGB format
  const hexToRGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  // Calculate relative luminance
  const calculateRelativeLuminance = (r, g, b) => {
    const sRGB = (c) => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    const R = sRGB(r);
    const G = sRGB(g);
    const B = sRGB(b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };

  // Check if the color is light or dark
  const isLightColor = (color) => {
    const { r, g, b } = hexToRGB(color);
    const luminance = calculateRelativeLuminance(r, g, b);
    return luminance > 0.5;
  };

  // Determine the font color based on lightness
  return isLightColor(color) ? "#000" : "#fff";
}

export default getFontColorBasedOnColor;
