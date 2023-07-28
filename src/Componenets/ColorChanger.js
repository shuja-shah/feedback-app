function hexToHSL(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  }

  const h = (r, g, b) => {
    const d = max - min;
    let hue;
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      case b:
        hue = (r - g) / d + 4;
        break;
      default:
        break;
    }
    return hue / 6;
  };

  const hsl = {
    h: h(r, g, b),
    s,
    l,
  };

  return hsl;
}

function hslToHex(h, s, l) {
  const hueToRGB = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  const r = Math.round(hueToRGB(p, q, h + 1 / 3) * 255);
  const g = Math.round(hueToRGB(p, q, h) * 255);
  const b = Math.round(hueToRGB(p, q, h - 1 / 3) * 255);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function makeColorLighter(hexColor) {
  const hslColor = hexToHSL(hexColor);
  hslColor.l = Math.max(0, hslColor.l - 0.2);
  return hslToHex(hslColor.h, hslColor.s, hslColor.l);
}
export default makeColorLighter;
