module.exports = (ctx) => ({
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': { root: ctx.file.dirname },
        'precss': {},
        'autoprefixer': {},
        'cssnano': {}
    }
});
