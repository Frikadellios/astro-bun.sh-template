import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

const settings = {
      plugins: [
          autoprefixer(),
          tailwindcss(),
          postcssPresetEnv({ stage: 1 }),
          cssnano({ preset: 'default' }),
      ],
  };

export default settings;
