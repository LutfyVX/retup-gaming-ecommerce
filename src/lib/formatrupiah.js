export const formatRupiah = (amount) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        className: "font-raleway",
    })
    .format(amount)
    .replace(/\u00A0/, ''); // Remove non-breaking space between Rp and amount