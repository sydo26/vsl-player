module.exports = {
    'packages/**/{src,test}/**/*.{js,jsx,ts,tsx,cjs,mjs}': [
        'eslint --fix',
        'prettier --write -u',
    ],
    '!**/*.{js,ts,jsx,tsx}': 'prettier --write -u',
}
