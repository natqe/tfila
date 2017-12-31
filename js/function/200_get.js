
function get(name, val, format) {
    fetch(`${location.origin}/?${name}=${val}`).then(res => format === 'json' ? res.json() : res.text());
}