
var messages_db = new Map();

export function addMessage(contact, iSent, type, data, date) {
    if (!(typeof contact === 'string' || contact instanceof String)) {
        return 'error';
    }
    if (!(typeof to === 'string' || iSent instanceof String)) {
        return 'error';
    }
    if (!(typeof data === 'string' || data instanceof String)) {
        return 'error';
    }
    if (!(typeof type === 'string' || type instanceof String)) {
        return 'error';
    }
    if (!(typeof date === 'string' || date instanceof String)) {
        return 'error';
    }

    messages_db.set(contact, []);
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

addMessage("mike", true, "text", "hello there mike?", Date());
addMessage("mike", false, "text", "yeah", Date());
addMessage("jhon", true, "text", "bla", Date());