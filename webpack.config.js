const path = require('path');

module.exports = {
    stats: {
        children: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js')
        }
    }
};
