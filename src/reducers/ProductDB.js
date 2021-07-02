const initialState = [
{ category : 'shirts',
brand : 'Asics',
photo: "as1.jpg",
title: 'Asics Sky Elite FF MT "Tokyo"',
price: 399,
desciption: "",
id: "1",
promoted: true,
size : ['41','42','43','45', '47'],
color : ['red'],
filterProperties : []

},
{ category : 'shoes',
photo: "miz1.jpg",
brand : 'Mizuno',
title: "Mizuno Wave Momentum",
price: 399,
desciption: "",
id: "1",
promoted: true,
size : ['41','42','43','46','49'],
color : [ 'red', 'black'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Mizuno',
photo: "miz2.jpg",
title: "Mizuno Wave Lightning Neo",
price: 399,
desciption: "",
id: "1",
promoted: true,
size : ['41','42','43'],
color : [ 'black'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Nike',
photo: "nk1.jpg",
title: "Nike Air Zoom Hyperace 2",
price: 399,
desciption: "",
id: "1",
promoted: true,
size : ['38','39','40','45','42','43'],
color : [ 'white'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Nike',
photo: "nk1.jpg",
title: "Nike Air Zoom Hyperace 2",
price: 399,
desciption: "",
id: "1",
promoted: true,
size : ['41','42'],
color : [ 'white'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Adidas',
photo: "adi4.jpg",
title: "Adidas Harden Vol.4 J x Star Wars Lightsaber",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['41','42','43', '40'],
color : [ 'black', 'purple'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Adidas',
photo: "adi3.jpg",
title: "Adidas Harden Vol. 4",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['48','42','43'],
color : [ 'white'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Adidas',
photo: "adi2.jpg",
title: "adidas Harden Vol. 5 Futurenatural Volt Pink Navy",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['46','39','43'],
color : [ 'yellow'],
filterProperties : []
},
{ category : '',
brand : 'Adidas',
photo: "adi1.jpg",
title: "Adidas Harden Vol. 5 Futurenatural",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['37','38','39','40'],
color : [ 'pink', 'black'],
filterProperties : []
},
{ category : '',
brand : 'Mizuno',
photo: "miz3.jpg",
title: "Mizuno Wave Momentum 2",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['38','45','39', '40', '41'], 
color : [ 'white','pink'],
filterProperties : []
},
{ category : '',
brand : 'Asics',
photo: "as2.jpg",
title: "Asics Netburner Ballistic FF",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['38','45','51'],
color : [ 'black', 'blue','green'],
filterProperties : []
},
{ category : 'shoes',
brand : 'Asics',
photo: "as3.jpg",
title: "Asics Gel-Task",
price: 399,
desciption: "",
id: "1",
promoted: false,
size : ['38','45','51'],
color : [  'blue'],
filterProperties : []
},

    ]


const ProductDB = (state = [], action) => {
    switch(action.type){
        case 'SET_PRODUCTS' : return action.payload;
        default : return initialState
    }
    
}

export default ProductDB