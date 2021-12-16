const size = {
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
};
const diff = 0.02;
const min = {
  xs: `min-width: ${size.xs}px`,
  sm: `min-width: ${size.sm}px`,
  md: `min-width: ${size.md}px`,
  lg: `min-width: ${size.lg}px`,
};
const max = {
  xs: `max-width: ${size.xs - diff}px`,
  sm: `max-width: ${size.sm - diff}px`,
  md: `max-width: ${size.md - diff}px`,
  lg: `max-width: ${size.lg - diff}px`,
};
export default { size, min, max };
