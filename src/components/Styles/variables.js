const color = {
  primary: '#323C6A',
  secondary: '#007D58',
  tertiary: '#DEB887',
  black: '#454655',
  gray: '#A9AABC',
  white: '#F7F8FF',
};

export const colors = {
  primary: `${color.primary}`,
  secondary: `${color.secondary}`,
  tertiary: `${color.tertiary}`,
  black: `${color.black}`,
  gary: `${color.gary}`,
  white: `${color.white}`,
};

const size = {
  small: '640px',
  medium: '768px',
  large: '1024px',
  extralarge: '1280px',
};

export const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
  extralarge: `(min-width: ${size.extralarge})`,
};
