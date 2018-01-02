
function get(name, val, format) {
   return fetch(`?${name}=${val}`).then(res => format === 'json' ? res.json() : res.text());
}