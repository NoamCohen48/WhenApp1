var messages_db = []

export function addMessage(from, to, type, data, date) {
    if (!(typeof from === 'string' || from instanceof String)) {
        return 'error';
    }
    if (!(typeof to === 'string' || to instanceof String)) {
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

    messages_db.push({
        'from': from,
        'to': to,
        'type': type,
        'data': data,
        'date': date
    });
}

export function receiveMessages(from, to){
    if (!(typeof from === 'string' || from instanceof String)) {
        return 'error';
    }
    if (!(typeof to === 'string' || to instanceof String)) {
        return 'error';
    }

    return messages_db.filter(message => message.from === from && message.to === to);
}

addMessage("noam", "shaked", "text", "hello there", "now");
addMessage("noam", "shaked", "text", "you here", "now");
addMessage("shaked", "noam", "img", "<cat smiling>", "then");