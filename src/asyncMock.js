const products = [

{
    id:"1",
    name:"Escoba",
    precio:234,
    category:'',
    img:'/image/Escoba.jpg',
    stock:0,
    descripcion:"loremasdsadf deifvd d8df dkfmslfd ddkf dkfslmflsd aioasnsssd fsd dksmvviii dskm dkls"
},{
    id:"2",
    name:"Pala",
    precio:1234,
    category:'',
    img:'/image/pala.jpg',
    stock:0,
    descripcion:"loremasdsadf deifvd d8df dkfmslfd ddkf dkfslmflsd aioasnsssd fsd dksmvviii dskm dkls"
},{
    id:"3",
    name:"Tacho",
    precio:12334,
    category:'',
    img:'/image/Tacho.jfif',
    stock:0,
    descripcion:"loremasdsadf deifvd d8df dkfmslfd ddkf dkfslmflsd aioasnsssd fsd dksmvviii dskm dkls"}
]

const hola = () =>{
    console.log("hola");
}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
            
        },2000)
    })
}

export const getProductByid = (id) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(products.find(prod => {
                return prod.id === id
            }))
            
        },2000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        },2000)
    })
}
