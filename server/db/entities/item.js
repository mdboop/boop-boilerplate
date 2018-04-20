module.exports = {
    name: "Cart",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        stock: {
          type: 'int',
        }
    }
};