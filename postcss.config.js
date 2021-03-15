const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        purgecss({
            content: [
                "./layouts/**/*.html",
                "./content/**/*.md",
                "./content/**/*.html",
                "./themes/bulma/layouts/**/*.html",
            ],
        })
    ]
}