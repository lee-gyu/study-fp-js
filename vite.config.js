const { defineConfig } = require("vitest/config")

module.exports = defineConfig({
    test: {
        include: [
            "**/__test__/**/*.test.js"
        ],
    }
})