import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
export default defineConfig({
  presets: [presetUno(), presetWind(), presetIcons({ cdn: 'https://esm.sh/' })],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: [
    [/^wh-(.*)$/, ([, t]) => `w-${t} h-${t}`],
    [/^text-limit-(\d{0,})$/, ([, n]) => `line-clamp-${n}`],
    {
      rel: 'relative',
      abs: 'absolute',
      fix: 'fixed',
    },
    {
      'fx-cer': 'flex items-center',
      'f-cer': 'flex items-center justify-center',
    },
  ],
})
