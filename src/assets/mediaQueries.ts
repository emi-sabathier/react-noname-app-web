const size = {
    xsmall: '320px',
    small: '375px',
    medium: '425px',
    large: '768px',
    xlarge: '1024px',
    xxlarge: '1440px',
};

export const mediaQueries = {
    mobileXsmall: `(min-width: ${size.xsmall})`,
    mobileSmall: `(min-width: ${size.small})`,
    mobileMedium: `(min-width: ${size.medium})`,
    tabletLarge: `(min-width: ${size.large})`,
    laptopXlarge: `(min-width: ${size.xlarge})`,
    laptopXXlarge: `(min-width: ${size.xxlarge})`,
};
