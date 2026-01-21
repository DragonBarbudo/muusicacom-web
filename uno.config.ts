import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['link', 'text-slate-500 hover:text-blue-500 dark:text-slate-400'],
    ['btn', 'text-lg  font-light font-second  px-8 border-1 border-blue-500  py-1 rounded-full inline-block cursor-pointer bg-blue-500/60 hover:bg-cyan-500 text-white hover:scale-105 shadow-lg hover:shadow-cyan-500/50 transition-transform duration-200'],
    ['btn-calm', 'text-lg  font-light font-second px-8 border-1 border-blue-500  py-1 rounded-full inline-block cursor-pointer dark:text-white hover:bg-blue-500/20 hover:scale-105 shadow-lg hover:shadow-blue-500/50 transition-transform duration-200'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Asap Condensed',
        second: {
          name: 'Urbanist',
          weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        }
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
