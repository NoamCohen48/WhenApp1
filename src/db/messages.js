
var messages_db = new Map();

export function addUserMessages(contact) {
    messages_db.set(contact, []);
}

export function addMessage(contact, iSent, type, data, date) {
    messages_db.get(contact).push({
        'iSent': iSent,
        'type': type,
        'data': data,
        'date': date
    });
}

export function receiveMessages(contact) {
    if (!(typeof contact === 'string' || contact instanceof String)) {
        return 'error';
    }
    return messages_db.get(contact)
}

