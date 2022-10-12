export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}


export async function getDate() {
    const response = await fetch(`/api/getDate`);
    return await response.json();
}

export async function getEnv() {
    const response = await fetch(`/api/getEnv`);
    return await response.json();
}