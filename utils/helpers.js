const dayjs = require('dayjs')
dayjs().format()

module.exports = {
    clean_date: (longDate) => {
        const date = dayjs(longDate).format('D/M/YY');
        const time = dayjs(longDate).format('h:mma');
        return date + " at " + time;
    },
};
