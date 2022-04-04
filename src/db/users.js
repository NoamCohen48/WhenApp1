var db = []

export function registerPerson(username, nickname, password) {
    if (!(typeof username === 'string' || username instanceof String)) {
        return 'error';
    }
    if (!(typeof nickname === 'string' || nickname instanceof String)) {
        return 'error';
    }
    if (!(typeof password === 'string' || password instanceof String)) {
        return 'error';
    }

    db.push({
        'username': username,
        'nickname': nickname,
        'password': password
    });
}

export function findPerson({ username, nickname, password }) {
    let result = db;
    if (typeof username === 'string' || username instanceof String) {
        result = result.filter(person => person.username === username);
    }
    if (typeof nickname === 'string' || nickname instanceof String) {
        result = result.filter(person => person.nickname === nickname);
    }
    if (typeof password === 'string' || password instanceof String) {
        result = result.filter(person => person.password === password);
    }
    return result;
}

// export {findPerson, registerPerson};
registerPerson('admin','admin','admin');

// let query = findPerson({username:'hello'})

// console.log(db);
// console.log(query)