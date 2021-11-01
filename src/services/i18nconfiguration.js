export function localeMessages() {
    const locales = require.context('/src/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

export const dateTimeFormats = {
    'en': {
        short: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false
        },
        long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }
    },
    'nl': {
        short: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false
        },
        long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }
    }
}