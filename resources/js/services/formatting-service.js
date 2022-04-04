export function formatEuro(value) {
    return new Intl.NumberFormat(
        'de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(value);
}

export function formatPercent(value) {
    return Math.trunc(value * 100) + '%';
}
