module.exports = {
    name: "Cart",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
    },
    relations: {
        items: {
            target: "Items",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        }
    }
};