import React from 'react';

const ProductApi = {

    products: [
        { id: 1, name: "Ben Blocker", position: "G" },
        { id: 2, name: "Dave Defender", position: "D" },
        { id: 3, name: "Sam Sweeper", position: "D" },
        { id: 4, name: "Matt Midfielder", position: "M" },
        { id: 5, name: "William Winger", position: "M" },
        { id: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.id === id;
        return this.products.find(isProduct)
    }
};

export default ProductApi;