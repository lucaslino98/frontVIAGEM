export function api(endpoint, init) {
    const url = 'http://localhost:5173' + endpoint
    return fetch(url, init)
}