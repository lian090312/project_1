"use strict";

class UserStorage {
    static #users = {
        id: ["haru0312", "이하루", "하루"],
        psword: ["1234", "1234", "123456"],
        name: ["이하루", "하루", "이규현"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
