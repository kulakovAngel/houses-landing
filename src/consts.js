export const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'http://localhost:8000/';

export const STYLE = {
    FONT_URL: 'https://fonts.googleapis.com/css?family=Roboto:100&display=swap&subset=cyrillic',
    FONT_FAMILY: '"Roboto", sans-serif',
    BP_MOBILE: `@media (max-width: 768px)`,
    BP_DESKTOP: `@media (min-width: 769px)`,
    GAP_1: '12px',
    GAP_2: '24px',
    GAP_3: '48px',
    NAV_SIZE: '28px',
    BACKGROUND_1: '#353c54',
    BACKGROUND_1_LIGHT: '#454c64',
    BACKGROUND_2: '#242943',
    COLOR_1: '#fbfdff',
    COLOR_2: '#ffd595',
};