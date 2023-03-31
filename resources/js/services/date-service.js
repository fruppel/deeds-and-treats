/**
 * @returns {String[]}
 */
export function getDatesForCurrentMonth() {
    const lastDay = getDayBefore(new Date());
    const firstDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), 1);

    return getDates(firstDay, lastDay);
}

/**
 * @param {Number} month
 * @param {Number} year
 * @returns {String[]}
 */
export function getDatesForMonthAndYear(month, year) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    return getDates(firstDayOfMonth, lastDayOfMonth);
}

/**
 * @param {number} monthIndex
 * @returns {string}
 */
export function getGermanMonth(monthIndex) {
    let date = new Date((new Date()).getFullYear(), monthIndex, 1);
    return date.toLocaleString('de-DE', {
        month: 'long'
    });
}

/**
 * @param {string} isoDate
 * @returns {string}
 */
export function getGermanDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

/**
 * Returns a string formatted as YYYY-MM-DD
 *
 * @param {string} isoDate
 * @return {string}
 */
export function getIsoDate(isoDate) {
    return extractIsoDate(new Date(isoDate));
}

/**
 * @param {Date} firstDay
 * @param {Date} lastDay
 * @returns {String[]}
 */
function getDates(firstDay, lastDay) {
    const dates = [extractIsoDate(firstDay)];
    let currentDay = firstDay;

    while (currentDay < lastDay) {
        currentDay.setDate(getNextDay(currentDay));
        dates.push(extractIsoDate(currentDay));
    }

    return dates.reverse();
}

/**
 * @param {Date} currentDay
 * @returns {number}
 */
function getNextDay(currentDay) {
    return (new Date(currentDay)).getDate() + 1;
}

/**
 * @param {Date} date
 * @returns {string}
 */
function extractIsoDate(date) {
    const offset = date.getTimezoneOffset();
    const dateWithTimezone = new Date(date.getTime() - (offset * 60 * 1000));
    return dateWithTimezone.toISOString().split('T')[0];
}

/**
 * @param {Date} date
 * @returns {Date}
 */
function getDayBefore(date) {
    const lastDay = new Date(date);
    lastDay.setDate(lastDay.getDate() - 1);
    lastDay.setHours(0, 0, 0, 0);

    return lastDay
}
