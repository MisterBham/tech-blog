const dayjs = require('dayjs')
dayjs().format()

module.exports = {
    clean_date: (longDate) => {
        return dayjs(longDate).format('D/M/YY');
    },
};