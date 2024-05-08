
const products = [
    {
        id: '1',
        nombre: "PlayStation 5", 
        precio: 1500000,
        img: "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       
        categoria: "consola",
        detalles: "Puedes descargar juegos digitales de PS5 y PS4 desde PlayStation® Store Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica, gatillos adaptables y audio 3D*, además de una generación completamente nueva de juegos de PlayStation. Muévete por los mundos del juego con un realismo increíble. Una velocidad de fotogramas alta y fluida de hasta 120 fps para los juegos compatibles, con soporte para salida de 120 Hz en pantallas 4K, disfruta de gráficos 4K nítidos. PS5. Almacenamiento 825GB SSD. La consola PS5 hace posibles nuevas formas de juego que jamas habias imaginado. Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefiniran lo que una consola PlayStation puede hacer. Juegos asombrosos: Maravillate con asombrosos graficos y descubre las nuevas funciones de PS5. Inmersion impresionante: Descubre una experiencia de juego mas inmersiva con soporte para respuesta haptica, gatillos adaptables y tecnologia de audio en 3D. Hasta 120 fps con salida de 120 Hz. Salida de 8K. Tempest 3D AudioTech. Gatillos adaptativos. La caja contiene: Control Inalambrico DualSense - Base - Cable HDMI - Cable AC- Cable USB - Manuales.",
        stock: 15,
    },
    {
        id: '2',
        nombre: "Joystick Ps4", 
        precio: 25000,
        img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoria: "accesorios",
        detalles: "Descubre una experiencia de juego más profunda y envolvente* que hace que la acción cobre vida en las palmas de tus manos. El control inalámbrico DualSense™ Midnight Black ofrece retroalimentación háptica inmersiva**, gatillos adaptativos dinámicos** y un micrófono incorporado, todo integrado en un diseño icónico y cómodo.",
        stock: 20,
    },
    {
        id: '3',
        nombre: "Juego Xbox star wars ",      
        precio: 15000,
        img: "https://images.unsplash.com/photo-1680209632103-744a845bea0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoria: "juegos",
        detalles:  "Star Wars Outlaws es un juego de acción y aventura en mundo abierto para consolas PlayStation 5, Xbox Series y PC desarrollado por Ubisoft.",
        stock: 10,
    },
    {
        id: '4',
        nombre: "Juego Fortnite",      
        precio: 23000,
        img: "https://www.lanacion.com.ar/resizer/v2/epic-games-el-creador-de-fortnite-debera-pagar-2Q3PLEEKVFEYFHF3NQRXA56BXA?auth=0964f11b6803e0b414adb6616f73403f72cbbd03df3ccf9ea7bda5750daceb7f&width=880&height=586&quality=70&smart=true",
        categoria: "juegos",
        detalles:  "Star Wars Outlaws es un juego de acción y aventura en mundo abierto para consolas PlayStation 5, Xbox Series y PC desarrollado por Ubisoft.",
        stock: 5,
    },
    {
        id: '5',
        nombre: "Mini Consola Portatil",      
        precio: 52000,
        img: "https://images.pexels.com/photos/1367036/pexels-photo-1367036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   
        categoria: "consola",
        detalles: "lleva tu juegos a donde vaya, con esta consola podes distritar de una cantidad de 50000 juegos precargados ",
        stock: 15,
    },
    {
        id: '6',
        nombre: "Controlador y gafas vr.",      
        precio: 290000,
        img: "https://img.freepik.com/free-photo/high-angle-controller-vr-glasses_23-2149829130.jpg?t=st=1715199573~exp=1715203173~hmac=53cce566fd4bcd8daa81e896441c5f19d2b5cc89bb15cfc9b304c764d0bb30a1&w=1060",
   
        categoria: "accesorios",
        detalles: "Controlador de ángulo alto y gafas vr. para vivir tus juegos en 3 dimencion ",
        stock: 15,
    },
    {
        id: '7',
        nombre:"mando Xbox",
        precio: 45000,
        img: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoria:"accesorios",
        detalles: "mando para consolas Xbox",
        stock: 10,
    },
    {
        id: '8',
        nombre: "Consola X-Box",
        precio: 1200000,
        img: "https://images.pexels.com/photos/12339571/pexels-photo-12339571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoria: "consola",
        detalles: "procesador central basado en el procesador Intel Pentium III. El sistema también incorpora un lector de DVD, un disco duro interno, puerto ethernet y por último el sistema dispone de cuatro conectores para los mandos.",
        stock: 7,
    },
    {
        id: '9',
        nombre: "Mario Bros",
        precio: 12000,
        img: "https://i.blogs.es/83542c/5a770b7772fa9/650_1200.webp",
        categoria: "juegos",
        detalles: "juegos mario bros para ps4 ",
        stock: 15,
    },





]


export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)

    })
    
}


export const getProductById =(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (products.find(prod =>prod.id === productId))
        }, 500)
    })
}