import React from 'react';

const ProductApi = {

    products: [
        {
            "id": 1,
            "name": "sagittis. Duis",
            "price": "$93.63",
            "description": "tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis,"
        },
        {
            "id": 2,
            "name": "molestie orci",
            "price": "$4.30",
            "description": "varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt,"
        },
        {
            "id": 3,
            "name": "ligula. Nullam",
            "price": "$37.26",
            "description": "orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In"
        },
        {
            "id": 4,
            "name": "magnis dis",
            "price": "$57.53",
            "description": "enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus"
        },
        {
            "id": 5,
            "name": "ante. Maecenas",
            "price": "$43.39",
            "description": "ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed"
        },
        {
            "id": 6,
            "name": "nulla. Integer",
            "price": "$63.28",
            "description": "velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel"
        },
        {
            "id": 7,
            "name": "mauris sagittis",
            "price": "$20.13",
            "description": "orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam"
        },
        {
            "id": 8,
            "name": "gravida mauris",
            "price": "$80.12",
            "description": "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam"
        },
        {
            "id": 9,
            "name": "montes, nascetur",
            "price": "$52.17",
            "description": "euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum"
        },
        {
            "id": 10,
            "name": "nec orci.",
            "price": "$68.99",
            "description": "nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc"
        },
        {
            "id": 11,
            "name": "laoreet, libero",
            "price": "$70.97",
            "description": "dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin"
        },
        {
            "id": 12,
            "name": "elit, pretium",
            "price": "$70.69",
            "description": "cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit"
        },
        {
            "id": 13,
            "name": "eget magna.",
            "price": "$41.95",
            "description": "Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse"
        },
        {
            "id": 14,
            "name": "Nulla tincidunt,",
            "price": "$21.77",
            "description": "libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc"
        },
        {
            "id": 15,
            "name": "orci, consectetuer",
            "price": "$64.40",
            "description": "tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus."
        },
        {
            "id": 16,
            "name": "Sed congue,",
            "price": "$53.69",
            "description": "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a,"
        },
        {
            "id": 17,
            "name": "mauris a",
            "price": "$67.42",
            "description": "purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices,"
        },
        {
            "id": 18,
            "name": "Duis elementum,",
            "price": "$25.77",
            "description": "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper,"
        },
        {
            "id": 19,
            "name": "litora torquent",
            "price": "$77.31",
            "description": "lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet"
        },
        {
            "id": 20,
            "name": "Suspendisse non",
            "price": "$79.50",
            "description": "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris"
        },
        {
            "id": 21,
            "name": "nec tellus.",
            "price": "$74.50",
            "description": "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu"
        },
        {
            "id": 22,
            "name": "Sed eu",
            "price": "$10.04",
            "description": "non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas"
        },
        {
            "id": 23,
            "name": "molestie in,",
            "price": "$16.24",
            "description": "nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus."
        },
        {
            "id": 24,
            "name": "Aenean sed",
            "price": "$32.31",
            "description": "facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel"
        },
        {
            "id": 25,
            "name": "ornare. Fusce",
            "price": "$5.00",
            "description": "non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras"
        },
        {
            "id": 26,
            "name": "pellentesque eget,",
            "price": "$72.30",
            "description": "tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec"
        },
        {
            "id": 27,
            "name": "Etiam ligula",
            "price": "$27.99",
            "description": "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla"
        },
        {
            "id": 28,
            "name": "consectetuer ipsum",
            "price": "$94.78",
            "description": "massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada"
        },
        {
            "id": 29,
            "name": "felis ullamcorper",
            "price": "$71.30",
            "description": "eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque"
        },
        {
            "id": 30,
            "name": "urna justo",
            "price": "$13.81",
            "description": "turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed"
        },
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.id === id;
        return this.products.find(isProduct)
    }
};

export default ProductApi;