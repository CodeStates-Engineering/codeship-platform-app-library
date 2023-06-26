import { useMemo } from 'react';

/**
 * @deprecated useTypographyClassName를 사용해주세요.
 */
export type FontSize =
  | 'large4x'
  | 'large3x'
  | 'large2x'
  | 'large'
  | 'medium'
  | 'normal'
  | 'small'
  | 'small2x'
  | 'small3x';

/**
 * @deprecated useTypographyClassName를 사용해주세요.
 */
export type FontWeight = 700 | 500 | 400;

/**
 * @deprecated useTypographyClassName를 사용해주세요.
 */
export interface Typography {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

/**
 * @deprecated useTypographyClassName를 사용해주세요.
 */
export const useTypography = (fontSize?: FontSize, FontWeight?: FontWeight) =>
  useMemo(
    () => ({
      fontSizeClassName: fontSize ? `font-size-${fontSize}` : '',
      fontWeightClassName: FontWeight ? `font-weight-${FontWeight}` : '',
    }),
    [fontSize, FontWeight],
  );
