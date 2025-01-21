const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../app-one/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../app-two/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../libs/ui/src/lib/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        customFont: ['"Your Custom Font"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
