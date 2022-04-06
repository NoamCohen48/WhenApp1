var users_db = []

export function registerPerson(username, nickname, password, img) {
    if (!(typeof username === 'string' || username instanceof String)) {
        return 'error';
    }
    if (!(typeof nickname === 'string' || nickname instanceof String)) {
        return 'error';
    }
    if (!(typeof password === 'string' || password instanceof String)) {
        return 'error';
    }
    // if (!(typeof img === 'string' || img instanceof String)) {
    //     return 'error';
    // }


    console.log(img)

    users_db.push({
        'username': username,
        'nickname': nickname,
        'password': password,
        'img': img
    });
}

export function findPerson({ username, nickname, password }) {
    let result = users_db;
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
registerPerson('admin', 'admin', 'admin', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png');
// let query = findPerson({username:'hello'})