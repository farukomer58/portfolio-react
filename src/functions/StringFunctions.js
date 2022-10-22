
/** Takes string and slices to specified n lenght and appends three dots */
export function truncate(str, n) {
    if (str) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    }
    return str
};
