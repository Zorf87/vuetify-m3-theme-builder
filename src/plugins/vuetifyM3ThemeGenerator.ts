import {
  Hct,
  SchemeTonalSpot,
  MaterialDynamicColors,
  DynamicScheme,
  DynamicColor,
  argbFromHex,
  hexFromArgb,
  sourceColorFromImage
} from '@material/material-color-utilities'
import kebabCase from 'just-kebab-case'

export function getDynamicColors(scheme: DynamicScheme) {
  const tokens = Object.keys(MaterialDynamicColors) as (keyof typeof MaterialDynamicColors)[]
  return Object.fromEntries(
    tokens
      .map((token) => {
        const key = kebabCase(token)
        const value = MaterialDynamicColors[token] as DynamicColor
        if (!value.getArgb) return [key, null]
        return [key, hexFromArgb(value.getArgb(scheme))]
      })
      .filter(([, value]) => value !== null)
  )
}

export function vuetifyThemeFromColor(
  sourceColor: number,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  const source = Hct.fromInt(sourceColor)
  const scheme = new SchemeTonalSpot(source, dark, contrast)
  const colors = getDynamicColors(scheme)
  return {
    dark,
    colors,
    variables: {}
  }
}

export function vuetifyThemeFromHex(
  hex: string,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  return vuetifyThemeFromColor(argbFromHex(hex), dark, contrast, variables)
}

export async function vuetifyThemeFromImage(
  image: HTMLImageElement,
  dark: boolean,
  contrast = 0.3,
  variables: Record<string, string | number> = {}
) {
  const color = await sourceColorFromImage(image)
  return vuetifyThemeFromColor(color, dark)
}