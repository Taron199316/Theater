class Utilities {
    static normalizeSeqErrors(e) {
        const data = {};
        if (e.errors) {
            e.errors.forEach(err => {
                data[err.path] = err.message;
            });
        } else {
            return e;
        }
        return data;
    }
}

module.exports = Utilities;