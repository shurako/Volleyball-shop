(this.webpackJsonpsklep=this.webpackJsonpsklep||[]).push([[0],{43:function(e,t,i){},57:function(e,t,i){},68:function(e,t,i){},72:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){"use strict";i.r(t);var c=i(3),r=i.n(c),s=i(24),o=i.n(s),a=(i(68),i(4)),n=i(5),l=(i(48),i(21)),d=i(9),p=function(e){return{type:"INCREMENT",payload:e}},j=function(e){return{type:"ADD",payload:e}},u=function(e){return{type:"SET_CATEGORY",payload:e}},b=(i(72),i(7)),h=i(2);var O=function(e){var t={color:Object(n.c)((function(e){return e.setMobileView}))?"white":"black",textDecoration:"none"};return Object(h.jsxs)("div",{className:"nav filter",children:[Object(h.jsx)(l.b,{style:t,to:"/shoes",children:Object(h.jsx)("div",{className:"nav item",children:"Obuwie"})}),Object(h.jsx)(l.b,{style:t,to:"/clothes",children:Object(h.jsx)("div",{className:"nav item",children:"Odzie\u017c"})}),Object(h.jsx)(l.b,{style:t,to:"/accessories",children:Object(h.jsx)("div",{className:"nav item",children:"Akcesoria"})}),Object(h.jsx)("div",{className:"nav item",children:"Strefa kibica"}),Object(h.jsx)("div",{className:"nav item",children:"Dla dru\u017cyn"})]})};i(77),i(78);var v=function(){return Object(h.jsxs)("div",{className:"login-section",children:[Object(h.jsx)("div",{className:"login-section item",children:"Zaloguj"}),Object(h.jsx)("div",{className:"login-section item",children:"Rejestracja"})]})};var m=function(){return Object(h.jsxs)("div",{className:"main-nav__wrapper",children:[Object(h.jsxs)("div",{className:"main nav",children:[Object(h.jsx)(l.b,{to:"/",style:{color:"Black",textDecoration:"none"},children:Object(h.jsx)("div",{className:"main nav item",children:"Strona G\u0142\xf3wna"})}),Object(h.jsx)("div",{className:"main nav item",children:"Nasze Sklepy"}),Object(h.jsx)("div",{className:"main nav item",children:"Kontakt"})]}),Object(h.jsx)("div",{className:"input-wrapper",children:Object(h.jsx)("input",{className:"search"})}),Object(h.jsx)(v,{})]})};var f=function(){return Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(l.b,{to:"/",children:Object(h.jsx)("img",{alt:"",src:"logo.png"})})})},k=i(23),x=(i(79),i(58));var y=function(e){var t=Object(n.c)((function(e){return e.basketData})),i=Object(n.c)((function(e){return e.isBasketShown})),c=Object(n.b)();return Object(h.jsxs)("div",{className:i?"basket-window":"basket-window hide",children:[Object(h.jsx)("div",{className:"basket-window-header",children:Object(h.jsx)("p",{children:"Tw\xf3j koszyk"})}),Object(h.jsx)("div",{children:t.map((function(e,i){var r=0;return t.includes(e)&&r++,Object(h.jsxs)("div",{className:"basket-item__wrapper",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"",src:e.photo})}),Object(h.jsxs)("div",{className:"basket-item-data__wrapper",children:[Object(h.jsx)("div",{children:e.title}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["ilo\u015b\u0107: ",r]}),Object(h.jsxs)("div",{children:[e.price," z\u0142"]})]})]}),Object(h.jsx)("div",{className:"basketitem__close-btn",children:Object(h.jsx)("button",{onClick:function(){c(function(e){return{type:"REMOVE",payload:e}}(e)),c(function(e){return{type:"MINUS",payload:e}}(e.price))},children:Object(h.jsx)(x.a,{})})})]})}))})]})};i(80);var g=function(e){var t=Object(n.c)((function(e){return e.counterReducer})),i=Object(n.c)((function(e){return e.isBasketShown})),c=Object(n.b)(),r=Object(b.useSpring)({val:t}),s=Object(b.useSpring)({from:{rotateZ:0},to:{rotateZ:1},config:{duration:500},reset:!0}).rotateZ;return Object(h.jsxs)(b.animated.div,{onMouseLeave:function(){c({type:"FALSE"}),console.log(i)},onMouseOver:function(){c({type:"TRUE"}),console.log(i)},className:"basket",children:[Object(h.jsx)(b.animated.div,{style:{transform:s.interpolate([0,.2,.4,.6,.8,1],[0,10,-10,10,-10,0]).interpolate((function(e){return"rotateZ(".concat(e,"deg)")}))},children:Object(h.jsx)(k.d,{})}),Object(h.jsxs)("div",{className:"total",children:[Object(h.jsx)(b.animated.div,{children:r.val.interpolate((function(e){return Math.floor(e)}))})," ","z\u0142"]}),Object(h.jsx)(y,{})]})};i(81);var w=function(){return Object(h.jsxs)("div",{className:"social-media__wrapper flex",children:[Object(h.jsx)("div",{children:Object(h.jsx)(k.b,{})}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(k.c,{})]}),Object(h.jsx)("div",{children:Object(h.jsx)(k.a,{})})]})};var N=function(e){var t=Object(c.useRef)(Object(h.jsx)("div",{})),i=Object(c.useRef)(),r={height:e.headerSize};window.addEventListener("resize",(function(){e.setHeaderSize(t.current.clientHeight)}));var s=Object(c.useState)(!1),o=Object(a.a)(s,2),n=o[0],l=o[1],d=Object(b.useTransition)(n,{from:{x:"-100%"},enter:{x:"0%"},leave:{x:"-100%"}});return Object(c.useEffect)((function(){window.innerHeight<window.innerWidth&&l(!1)}),[n]),Object(h.jsx)("div",{style:r,ref:i,className:"header__wrapper",children:Object(h.jsxs)("div",{ref:t,className:"header",children:[window.innerHeight>window.innerWidth?Object(h.jsx)(v,{}):null,Object(h.jsx)(f,{}),Object(h.jsxs)("div",{onClick:function(){l(!n)},className:"hamburger",children:[Object(h.jsx)("div",{className:"hamburger-links"}),Object(h.jsx)("div",{className:"hamburger-links"}),Object(h.jsx)("div",{className:"hamburger-links"})]}),window.innerHeight>window.innerWidth?d((function(e,t){return t?Object(h.jsxs)(b.animated.div,{style:e,className:"nav-wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)(b.animated.div,{className:"flex space-btw",children:Object(h.jsx)(O,{showMenu_mobile:n,setShowMenu_mobile:l})})]}):""})):window.innerHeight<window.innerWidth?Object(h.jsxs)("div",{className:"nav-wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:"flex space-btw",children:[Object(h.jsx)(O,{showMenu_mobile:n,setShowMenu_mobile:l}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)(w,{}),Object(h.jsx)(g,{total:e.total})]})]})]}):void 0]})})},z=i(61),C=i(60),_=i(59);i(82);var A=function(e){return Object(h.jsxs)("div",{className:"advantages-bar-item flex",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(e.icon,{})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"item-title",children:e.title}),Object(h.jsx)("div",{className:"item-description",children:e.description})]})]})};var S=function(){var e=[{icon:k.e,title:"99.9% POZYTYWNYCH OPINII",description:"16600 u\u017cytkownik\xf3w serwisu Allegro oceni\u0142o nasz sklep na 5 gwiazdek"},{icon:_.a,title:"WYSY\u0141KA W 24H",description:"dost\u0119pno\u015b\u0107 produktu od r\u0119ki"},{icon:C.a,title:"DARMOWA DOSTAWA",description:"od 250 Z\u0141"},{icon:z.a,title:"DARMOWY ZWROT",description:"w cia\u0105gu 60 dni"}];return Object(h.jsx)("div",{className:"advantages-bar",children:e.map((function(e){return Object(h.jsx)(A,{icon:e.icon,title:e.title,description:e.description})}))})},L=i(38),T=function(){return Object(h.jsxs)(L.Carousel,{autoPlay:!0,interval:3e3,dynamicHeight:!1,showThumbs:!1,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"",src:"2.png"}),Object(h.jsx)("p",{className:"legend",children:"Legend 1"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"",src:"2.png"}),Object(h.jsx)("p",{className:"legend",children:"Legend 2"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"",src:"2.png"}),Object(h.jsx)("p",{className:"legend",children:"Legend 3"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"",src:"2.png"}),Object(h.jsx)("p",{className:"legend",children:"Legend 4"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"",src:"2.png"}),Object(h.jsx)("p",{className:"legend",children:"Legend 5"})]})]})},E=function(){return Object(h.jsxs)(L.Carousel,{autoPlay:!0,interval:3e3,dynamicHeight:!1,showThumbs:!1,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"",src:"./banners/2m.jpg"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"",src:"./banners/1m.jpg"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{alt:"",src:"./banners/3m.jpg"})})]})};i(88);var M=function(){return Object(h.jsxs)("div",{className:"main-section",children:[Object(h.jsx)("div",{className:"section-title",children:"PARTNERZY"}),Object(h.jsxs)("div",{className:"partners-bar",children:[Object(h.jsx)("div",{className:"logo__wrapper",children:Object(h.jsx)("img",{alt:"",src:"partners logo/adidas.png"})}),Object(h.jsx)("div",{className:"logo__wrapper",children:Object(h.jsx)("img",{alt:"",src:"partners logo/asics.png"})}),Object(h.jsx)("div",{className:"logo__wrapper",children:Object(h.jsx)("img",{alt:"",src:"partners logo/mizuno.png"})}),Object(h.jsx)("div",{className:"logo__wrapper",children:Object(h.jsx)("img",{alt:"",src:"partners logo/nike.png"})}),Object(h.jsx)("div",{className:"logo__wrapper",children:Object(h.jsx)("img",{alt:"",src:"partners logo/underarmor.png"})})]})]})},P=i(19);i(57);var F=function(e){var t=Object(c.useState)(!1),i=Object(a.a)(t,2),r=i[0],s=i[1],o=Object(n.b)(),l=Object(b.useSpring)({from:{opacity:0},to:{opacity:1},config:{duration:1e3,trail:200},reset:!0}),d=Object(b.useSpring)({from:{width:"0%",backgroundColor:"#303030",wordBreak:"keep-all"},to:{width:"100%",color:"white"},config:{duration:200},reset:!0});return Object(h.jsxs)("div",{onMouseLeave:function(){s(!1)},onMouseOver:function(){s(!0)},className:"product-card",children:[Object(h.jsx)(b.animated.div,{className:"product-title",children:e.title}),Object(h.jsx)("div",{className:"product-photo",children:r?Object(h.jsxs)(b.animated.div,{className:"hovered",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{className:"size-table",children:Object(h.jsx)(b.animated.div,{style:r?l:null,className:"item__wrapper",children:e.size.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"size-table-item",children:e})})}))})})]}):""}),r?Object(h.jsxs)(b.animated.div,{onClick:function(){o(j({photo:e.photo,title:e.title,price:e.price})),o(p(e.price))},price:e.price,className:"product-price",style:d,children:[Object(h.jsx)("p",{children:e.price}),Object(h.jsx)("p",{children:"Dodaj do koszyka"})," ",Object(h.jsx)("p",{children:Object(h.jsx)(P.c,{})})," "]}):Object(h.jsx)("div",{price:e.price,className:"product-price",children:e.price})]})},H=[{shoes:[{photo:"as1.jpg",title:'Asics Sky Elite FF MT "Tokyo"',price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43","45","47"],color:["red"],filterProperties:[]},{photo:"miz1.jpg",title:"Mizuno Wave Momentum",price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43","46","49"],color:["red","black"],filterProperties:[]},{photo:"miz2.jpg",title:"Mizuno Wave Lightning Neo",price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43"],color:["black"],filterProperties:[]},{photo:"nk1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["38","39","40","45","42","43"],color:["white"],filterProperties:[]},{photo:"nk1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["41","42"],color:["white"],filterProperties:[]},{photo:"adi4.jpg",title:"Adidas Harden Vol.4 J x Star Wars Lightsaber",price:399,desciption:"",id:"1",promoted:!1,size:["41","42","43","40"],color:["black","purple"],filterProperties:[]},{photo:"adi3.jpg",title:"Adidas Harden Vol. 4",price:399,desciption:"",id:"1",promoted:!1,size:["48","42","43"],color:["white"],filterProperties:[]},{photo:"adi2.jpg",title:"adidas Harden Vol. 5 Futurenatural Volt Pink Navy",price:399,desciption:"",id:"1",promoted:!1,size:["46","39","43"],color:["yellow"],filterProperties:[]},{photo:"adi1.jpg",title:"Adidas Harden Vol. 5 Futurenatural",price:399,desciption:"",id:"1",promoted:!1,size:["37","38","39","40"],color:["pink","black"],filterProperties:[]},{photo:"miz3.jpg",title:"Mizuno Wave Momentum 2",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","39","40","41"],color:["white","pink"],filterProperties:[]},{photo:"as2.jpg",title:"Asics Netburner Ballistic FF",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","51"],color:["black","blue","green"],filterProperties:[]},{photo:"as3.jpg",title:"Asics Gel-Task",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","51"],color:["blue"],filterProperties:[]},{photo:"und1.jpg",title:"Under Armour Curry Flow 8 Yellow",price:399,desciption:"",id:"1",promoted:!0,size:["38","45","51"],color:["yellow"],filterProperties:[]}],shirts:[{category:"shirts",photo:"products photo/shirts/k1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["M","L","XL"]},{photo:"products photo/shirts/k1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["S","M","L","XL"]},{photo:"products photo/shirts/k1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["M","L","XL","XXL"]},{photo:"products photo/shirts/k1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["M","L","XL"]}]}];i(89);var D=function(e){var t=Object(n.b)(),i=e.product,c=i.size,r=i.title,s=i.photo,o=i.price;return Object(h.jsxs)("div",{className:"product product-card",children:[Object(h.jsx)("div",{className:"product-photo",children:Object(h.jsx)("img",{alt:"",src:s})}),Object(h.jsx)("div",{className:"product-title",children:r}),Object(h.jsxs)("div",{className:"flex space-btw",children:[Object(h.jsxs)("div",{className:"product-star__wrapper",children:[Object(h.jsx)(P.d,{}),Object(h.jsx)(P.d,{}),Object(h.jsx)(P.d,{}),Object(h.jsx)(P.d,{}),Object(h.jsx)(P.d,{})]}),Object(h.jsxs)("div",{className:"product-price",children:[o," z\u0142"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Dost\u0119pne rozmiary:"})}),Object(h.jsx)("div",{className:"size-table",children:c.map((function(e,t){return Object(h.jsx)("div",{className:"size-table-item",children:e},t)}))})]}),Object(h.jsxs)("div",{className:"flex space-btw",children:[Object(h.jsx)("div",{onClick:function(){t(j({photo:s,title:r,price:o})),t(p(o))},className:"add-to-cart",children:"DO KOSZYKA"}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("div",{className:"product-icon",children:Object(h.jsx)(P.c,{})}),Object(h.jsx)("div",{className:"product-icon",children:Object(h.jsx)(P.b,{})})]})]})]})};var R=function(){var e=Object(n.c)((function(e){return e.FilterKey})),t=Object(n.c)((function(e){return e.ProductDB})).filter((function(t){return e.every((function(e){return Array.isArray(t[e.key])?e.value.some((function(i){return t[e.key].includes(i)})):e.value.includes(t[e.key])}))})).map((function(e,t){return Object(h.jsxs)("div",{className:"product__wrapper",children:[" ",Object(h.jsx)(D,{product:e})]},t)}));return Object(h.jsxs)("div",{className:"main-section",children:[Object(h.jsx)("div",{className:"section-title",children:"POLECAMY"}),Object(h.jsx)("div",{className:"promoted-products__wrapper",children:t})]})};var X=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:window.innerHeight>window.innerWidth?Object(h.jsx)(E,{}):window.innerHeight<window.innerWidth?Object(h.jsx)(T,{}):void 0}),Object(h.jsx)(S,{}),Object(h.jsx)(R,{}),Object(h.jsx)(M,{})]})},I=(i(43),i(39));var W=function(e){var t=Object(n.b)(),i=Object(c.useState)(!1),r=Object(a.a)(i,2),s=r[0],o=r[1],l=Object(b.useTransition)(s,{from:{opacity:0,y:"0%",overflow:"hidden",width:"100%",display:"flex",alignItems:"center"},enter:{opacity:1,y:"0%",overflow:"hidden"},leave:{opacity:0,y:"-100%",overflow:"hidden"},config:{duration:150}});return Object(h.jsx)("div",{className:"filter-section__item",children:function(e){return Object(h.jsxs)("div",{className:"filter-section__item",children:[Object(h.jsx)("div",{onClick:function(){o(!s)},className:"filter-section__header",children:Object(h.jsx)("h3",{children:e.params.title})}),l((function(i,c){return c?Object(h.jsx)(b.animated.div,{style:i,className:"filter__wrapper",children:e.values.map((function(i){return Object(h.jsx)("div",{className:i.isCkecked?"active":"",onClick:function(){i.isCkecked=!i.isCkecked,!0===i.isCkecked?t({type:"ADD_FILTER",payload:{key:e.params.key,value:[i.value]}}):t(function(e){return{type:"REMOVE_FILTER",payload:e}}({key:e.params.key,value:[i.value]}))},children:i.value})}))}):""}))]})}(e.filterProp)})};var Z=function(){var e=Object(n.c)((function(e){return e.FilterKey})),t=Object(c.useState)({params:{title:"Rozmiar",icon:"",showFilterOptions:!0,style:{},key:"size"},values:[{value:"37",isCkecked:!1},{value:"38",isCkecked:!1},{value:"39",isCkecked:!1},{value:"40",isCkecked:!1},{value:"41",isCkecked:!1},{value:"42",isCkecked:!1},{value:"43",isCkecked:!1},{value:"44",isCkecked:!1},{value:"45",isCkecked:!1},{value:"46",isCkecked:!1},{value:"47",isCkecked:!1},{value:"48",isCkecked:!1},{value:"49",isCkecked:!1},{value:"50",isCkecked:!1}]}),i=Object(a.a)(t,1)[0],r=Object(c.useState)({params:{title:"Marka",icon:"",showFilterOptions:!0,style:{},key:"brand"},values:[{value:"Mizuno",isCkecked:!1},{value:"Asics",isCkecked:!1},{value:"Adidas",isCkecked:!1},{value:"Nike",isCkecked:!1}]}),s=Object(a.a)(r,2),o=s[0],l=(s[1],Object(c.useState)({params:{title:"Rozmiar",icon:"",showFilterOptions:!0,style:{},key:"size"},values:[{value:"S",isCkecked:!1},{value:"M",isCkecked:!1},{value:"L",isCkecked:!1},{value:"XL",isCkecked:!1},{value:"XXL",isCkecked:!1}]})),d=Object(a.a)(l,1)[0],p=Object(c.useState)({params:{title:"Kolor",icon:"",showFilterOptions:!1,style:{display:"flex",width:"30%",justifyContent:"center"},key:"color"},values:[{value:"red",isCkecked:!1},{value:"white",isCkecked:!1},{value:"black",isCkecked:!1},{value:"green",isCkecked:!1},{value:"yellow",isCkecked:!1},{value:"pink",isCkecked:!1}]}),j=Object(a.a)(p,1)[0],u=Object(c.useState)(!1),O=Object(a.a)(u,2),v=O[0],m=O[1],f=Object(b.useTransition)(v,{from:{opacity:0,y:"0%",overflow:"hidden",width:"100%",flexDirection:"column",display:"flex",alignItems:"center"},enter:{opacity:1,y:"0%",overflow:"hidden"},leave:{opacity:0,y:"-100%",overflow:"hidden"},config:{duration:150}});return Object(h.jsx)("div",{className:"filter-section__wrapper",children:Object(h.jsxs)("div",{className:"filter-section",children:[Object(h.jsxs)("div",{onClick:function(){return m(!v)},className:"title__wrapper",children:[Object(h.jsx)(I.a,{}),Object(h.jsx)("h3",{children:"Filtry"})]}),f((function(t,c){return c?Object(h.jsxs)(b.animated.div,{style:t,children:[Object(h.jsx)(W,{filterProp:"shoes"==e.filter((function(e){return"category"==e.key}))[0].value?i:d}),Object(h.jsx)(W,{filterProp:o}),Object(h.jsx)(W,{filterProp:j})]}):""}))]})})};var V=function(e){var t=Object(n.c)((function(e){return e.FilterKey})),i=Object(n.c)((function(e){return e.ProductDB})).filter((function(e,i){return t.every((function(t){return Array.isArray(e[t.key])?t.value.some((function(i){return e[t.key].includes(i)})):t.value.includes(e[t.key])}))})).map((function(e,t){return Object(h.jsxs)("div",{className:"product__wrapper",children:[" ",Object(h.jsx)(D,{product:e})]},t)}));return Object(h.jsxs)("div",{className:"products-section",children:[Object(h.jsx)(Z,{}),Object(h.jsx)("div",{className:"promoted-products__wrapper",children:i})]})},B=i(33),K=i(62),Y=i(63),U=i(11);i(90);var G=function(e){return Object(h.jsx)("button",{onClick:function(){e.setviewAll(!0)},className:"btn clear",children:"wyczy\u015b\u0107"})};i(91);var J=function(e){var t=Object(c.useRef)([]);t.current=[];var i=[],r=Object(c.useState)(!0),s=Object(a.a)(r,2),o=s[0],n=s[1],l=Object(c.useState)([]),d=Object(a.a)(l,2),p=d[0],j=d[1],u=Object(c.useState)({params:{title:"Rozmiar",icon:"",showFilterOptions:!0,style:{}},values:[{value:"37",isCkecked:!0},{value:"38",isCkecked:!0},{value:"39",isCkecked:!0},{value:"40",isCkecked:!0},{value:"41",isCkecked:!0},{value:"42",isCkecked:!0},{value:"43",isCkecked:!0},{value:"44",isCkecked:!0},{value:"45",isCkecked:!0},{value:"46",isCkecked:!0},{value:"47",isCkecked:!0},{value:"48",isCkecked:!0},{value:"49",isCkecked:!0},{value:"50",isCkecked:!0}]}),O=Object(a.a)(u,2),v=O[0],m=O[1],f=Object(c.useState)({params:{title:"Kolor",icon:"",showFilterOptions:!1,style:{display:"flex",width:"30%",justifyContent:"center"}},values:[{value:"red",isCkecked:!0},{value:"white",isCkecked:!0},{value:"black",isCkecked:!0},{value:"green",isCkecked:!0},{value:"yellow",isCkecked:!0},{value:"pink",isCkecked:!0}]}),k=Object(a.a)(f,2),x=k[0],y=k[1],g=function(e,t){return!!t.includes(e)},w=Object(c.useState)(!1),N=Object(a.a)(w,2),z=N[0],C=N[1],_=Object(b.useTransition)(z,{from:{opacity:0,y:"-100%",overflow:"hidden",width:"100%",justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center"},enter:{opacity:1,y:"0%",overflow:"hidden"},leave:{opacity:0,y:"-100%",overflow:"hidden"},config:{duration:150}}),A=function(e){e&&!t.current.includes(e)&&t.current.push(e)},S=function(e,i,c){return Object(h.jsxs)("div",{className:"filter-section__item",children:[Object(h.jsxs)("div",{className:"filter-section__header",children:[Object(h.jsx)("div",{className:"filter-section__header-title",children:Object(h.jsx)("p",{onClick:function(){i(Object(B.a)(Object(B.a)({},e),{},{params:Object(B.a)(Object(B.a)({},e.params),{},{showFilterOptions:!e.params.showFilterOptions})}))},children:e.params.title})}),Object(h.jsx)("div",{className:"filter-section__header-button__wrapper",children:Object(h.jsx)("button",{className:"",children:Object(h.jsx)(P.a,{})})})]}),Object(h.jsx)("div",{className:"filter__wrapper",children:e.params.showFilterOptions?e.values.map((function(i,r){return Object(h.jsx)("div",{style:e.params.style,ref:A,onClick:function(){var e;i.isCkecked?(e=i.value,j([].concat(Object(U.a)(p),[e])),t.current[r+c].style.backgroundColor="royalblue",i.isCkecked=!i.isCkecked,n(!1)):(!function(e){var t=p,i=p.indexOf(e);if(p.includes(e)){t[i];var c=Object(K.a)(t,[i].map(Y.a));j(Object.values(c))}}(i.value),t.current[r+c].style.backgroundColor="transparent",i.isCkecked=!i.isCkecked)},children:i.value})})):""})]})};return Object(h.jsxs)("div",{className:"flex mobile",children:[Object(h.jsx)("div",{className:"filter-section__wrapper",children:Object(h.jsxs)("div",{className:"filter-section",children:[Object(h.jsxs)("div",{onClick:function(){return C(!z)},className:"title__wrapper",children:[Object(h.jsx)(I.a,{}),Object(h.jsx)("h3",{children:"Filtry"})]}),_((function(e,t){return t?Object(h.jsxs)(b.animated.div,{style:e,children:[S(v,m,0),S(x,y,v.values.length),Object(h.jsx)(G,{viewAll:o,setviewAll:n})]}):Object(h.jsx)("div",{})}))]})}),o?Object(h.jsxs)("div",{className:"main-section",children:[Object(h.jsx)("div",{className:"section-title",children:"POLECAMY"}),H.map((function(t){return Object(h.jsxs)("div",{className:"promoted-products__wrapper",children:[t.shoes.map((function(t){return Object(h.jsx)(F,{total:e.total,setTotal:e.setTotal,size:t.size,photo:t.photo,price:t.price,title:t.title})}))," "]})}))]}):function(){H[0].shoes.filter((function(e){return Object.keys(e).map((function(t,c){Array.isArray(e[t])&&p.map((function(c){e[t].includes(c)&&(g(e,i)||i.push(e))}))})),i}));var e=[];return i.map((function(e){Object.keys(e).map((function(t,i){Array.isArray(e[t])&&e[t].map((function(t){g(t,e.filterProperties)||e.filterProperties.push(t)}))}))})),i.map((function(t){p.every((function(e){return t.filterProperties.includes(e)}))&&e.push(t)})),Object(h.jsxs)("div",{className:"promoted-products__wrapper",children:[" ",e.map((function(e){return Object(h.jsx)(F,{size:e.size,price:e.price,title:e.title,photo:e.photo})}))]})}()]})};var q=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),i=t[0],r=t[1],s=Object(n.b)(),o=function(){window.innerWidth<window.innerHeight?s({type:"SET_MOBILE"}):s({type:"SET_DESKTOP"})};o(),window.addEventListener("resize",o);var p=Object(c.useState)(),j=Object(a.a)(p,2),b=j[0],O=j[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(N,{total:i,setTotal:r,headerSize:b,setHeaderSize:O}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/shoesTest",component:function(){return Object(h.jsx)(J,{total:i,setTotal:r})}}),Object(h.jsx)(d.a,{path:"/shoes",component:function(){return Object(h.jsx)(V,{filter:s(u({key:"category",value:["shoes"]}))})}}),Object(h.jsx)(d.a,{path:"/clothes",component:function(){return Object(h.jsx)(V,{filter:s(u({key:"category",value:["shirts"]}))})}}),Object(h.jsx)(d.a,{path:"/accessories",component:function(){return Object(h.jsx)(V,{filter:s(u({key:"category",value:["accessories"]}))})}}),Object(h.jsx)(d.a,{path:"/women",component:function(){return Object(h.jsx)(V,{filter:s(u({key:"category",value:["women"]}))})}}),Object(h.jsx)(d.a,{path:"/",exact:!0,component:function(){return Object(h.jsx)(X,{filter:s(u({key:"promoted",value:[!0]}))})}})]})]})})},Q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,93)).then((function(t){var i=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),c(e),r(e),s(e),o(e)}))},$=i(40),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"MINUS":return parseInt(e-t.payload);default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(U.a)(e),[t.payload]);case"REMOVE":return e.filter((function(e){return e!==t.payload}));default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRUE":return!0;case"FALSE":return!1;default:return e}},ce=[{category:"shoes",brand:"Asics",photo:"as1.jpg",title:'Asics Sky Elite FF MT "Tokyo"',price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43","45","47"],color:["red"],filterProperties:[]},{category:"shoes",photo:"miz1.jpg",brand:"Mizuno",title:"Mizuno Wave Momentum",price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43","46","49"],color:["red","black"],filterProperties:[]},{category:"shoes",brand:"Mizuno",photo:"miz2.jpg",title:"Mizuno Wave Lightning Neo",price:399,desciption:"",id:"1",promoted:!0,size:["41","42","43"],color:["black"],filterProperties:[]},{category:"shoes",brand:"Nike",photo:"nk1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["38","39","40","45","42","43"],color:["white"],filterProperties:[]},{category:"shoes",brand:"Nike",photo:"nk1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!1,size:["41","42"],color:["white"],filterProperties:[]},{category:"shoes",brand:"Adidas",photo:"adi4.jpg",title:"Adidas Harden Vol.4 J x Star Wars Lightsaber",price:399,desciption:"",id:"1",promoted:!1,size:["41","42","43","40"],color:["black","purple"],filterProperties:[]},{category:"shoes",brand:"Adidas",photo:"adi3.jpg",title:"Adidas Harden Vol. 4",price:399,desciption:"",id:"1",promoted:!1,size:["48","42","43"],color:["white"],filterProperties:[]},{category:"shoes",brand:"Adidas",photo:"adi2.jpg",title:"adidas Harden Vol. 5 Futurenatural Volt Pink Navy",price:399,desciption:"",id:"1",promoted:!1,size:["46","39","43"],color:["yellow"],filterProperties:[]},{category:"shoes",brand:"Adidas",photo:"adi1.jpg",title:"Adidas Harden Vol. 5 Futurenatural",price:399,desciption:"",id:"1",promoted:!1,size:["37","38","39","40"],color:["pink","black"],filterProperties:[]},{category:"shoes",brand:"Mizuno",photo:"miz3.jpg",title:"Mizuno Wave Momentum 2",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","39","40","41"],color:["white","pink"],filterProperties:[]},{category:"",brand:"Asics",photo:"as2.jpg",title:"Asics Netburner Ballistic FF",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","51"],color:["black","blue","green"],filterProperties:[]},{category:"shoes",brand:"Asics",photo:"as3.jpg",title:"Asics Gel-Task",price:399,desciption:"",id:"1",promoted:!1,size:["38","45","51"],color:["blue"],filterProperties:[]},{category:"shirts",photo:"products photo/shirts/k1.jpg",title:"Nike Air Zoom Hyperace 2",price:399,desciption:"",id:"1",promoted:!0,size:["M","L","XL"],color:["red"]},{category:"shirts",photo:"products photo/shirts/k4.jpg",title:"Adidas Essentials Linear T-shirt",price:79.99,desciption:"",id:"1",promoted:!0,size:["M","L","XL"],color:["white"]},{category:"shirts",photo:"products photo/shirts/k3.jpg",title:"Koszulka adidas ESS 3S Tee",price:99.99,desciption:"",id:"1",promoted:!0,size:["M","L","XL"],color:["gray"]},{category:"shirts",brand:"Adidas",photo:"products photo/shirts/k2.jpg",title:"Adidas Trefoil Essentials Tee",price:399,desciption:"",id:"1",promoted:!0,size:["M","L","XL"],color:["black"]},{category:"shirts",brand:"Adidas",photo:"products photo/bluzy/adi1.jpg",title:"Adidas Essentials Logo Hoodie Grey",price:139.99,desciption:"",id:"1",promoted:!1,size:["M","L","XL","XXL"],color:["gray"]},{category:"shirts",brand:"Adidas",photo:"products photo/bluzy/adi2.jpg",title:"adidas Trefoil Hoodie",price:139.99,desciption:"",id:"1",promoted:!1,size:["L","XL","XXL"],color:["black"]},{category:"shirts",brand:"Adidas",photo:"products photo/bluzy/adi3.jpg",title:"Adidas Trefoil Hoodie M\u0119ska Czerwona",price:139.99,desciption:"",id:"1",promoted:!1,size:["L","XL","XXL"],color:["red"]},{category:"shirts",brand:"Reebok",photo:"products photo/spodnie/s1.jpg",title:"Reebok Training Essentials Marble",price:139.99,desciption:"",id:"1",promoted:!1,size:["L","XL","XXL"],color:["gray"]},{category:"shirts",brand:"Adidas",photo:"products photo/spodnie/s2.jpg",title:"Adidas Trefoil Pant",price:139.99,desciption:"",id:"1",promoted:!1,size:["L","XL","XXL"],color:["black"]},{category:"accessories",brand:"Adidas",photo:"products photo/akcesoria/cz1.jpg",title:"Czapka adidas 3S Cap",price:139.99,desciption:"",id:"1",promoted:!1,size:[],color:["red"]},{category:"accessories",brand:"Adidas",photo:"products photo/akcesoria/s1.jpg",title:"Adidas Treofil Liner 3 Pack",price:39.99,desciption:"",id:"1",promoted:!1,size:[],color:["white"]},{category:"accessories",brand:"Cep",photo:"products photo/akcesoria/s2.jpg",title:"Cep Socks For Recovery 2.0 M",price:99.99,desciption:"",id:"1",promoted:!1,size:[],color:["black"]},{category:"accessories",brand:"Adidas",photo:"products photo/akcesoria/t1.jpg",title:"Adidas Tiro Dufflebag M",price:99.99,desciption:"",id:"1",promoted:!1,size:[],color:["black"]},{category:"accessories",brand:"Nike",photo:"products photo/akcesoria/t2.jpg",title:"Nike Brasilia Training Duffel Bag",price:99.99,desciption:"",id:"1",promoted:!1,size:[],color:["red"]},{category:"accessories",brand:"Adidas",photo:"products photo/akcesoria/t3.jpg",title:"Adidas Adicolor Classic Backpack ",price:99.99,desciption:"",id:"1",promoted:!1,size:[],color:["red"]}],re=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PRODUCTS":return e.payload;default:return ce}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTER":if(!e.some((function(e){return e.key===t.payload.key})))return[].concat(Object(U.a)(e),[t.payload]);if(e.some((function(e){return e.key===t.payload.key}))){var i=e.filter((function(e){return e.key==t.payload.key}));if(!i[0].value.includes(t.payload.value[0]))return i[0].value=i[0].value.concat(t.payload.value),Object(U.a)(e)}case"REMOVE_FILTER":if(e.some((function(e){return e.value.includes(t.payload.value[0])&&e.value.length>1}))){var c=e.filter((function(e){return e.value.includes(t.payload.value[0])}));return c[0].value=c[0].value.filter((function(e){return e!==t.payload.value[0]})),Object(U.a)(e)}return e.filter((function(e){return JSON.stringify(e)!==JSON.stringify(t.payload)}));case"SET_CATEGORY":return[t.payload];default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOBILE":return!0;case"SET_DESKTOP":return!1;default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEADER_HEIGHT":return t.payload;default:return e}},ne=Object($.a)({counterReducer:ee,basketData:te,isBasketShown:ie,ProductDB:re,FilterKey:se,setMobileView:oe,headerHeight:ae}),le=Object($.b)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(n.a,{store:le,children:Object(h.jsx)(q,{})})}),document.getElementById("root")),Q()}},[[92,1,2]]]);
//# sourceMappingURL=main.bf6d7a7a.chunk.js.map