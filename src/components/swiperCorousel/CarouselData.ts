interface ImageData {
    id: string;
    image: string; 
    
  }
  // Estrutura criada para simular um banco de dados com imagens
  // Podemos como implementação futura, criar um banco de dados para armazenar essas imagens
  const carouselData: ImageData[] = [

    { id: '1', image: 'https://cdn2.unrealengine.com/egs-prince-of-persia-lost-crown-carousel-desktop-1920x1080-c7ae57efc8ab.jpg?h=720&quality=medium&resize=1&w=1280' 
},
    { id: '2', image: 'https://cdn2.unrealengine.com/egs-skull-and-bones-carousel-desktop-1248x702-8814fa009b18.jpg?h=720&quality=medium&resize=1&w=1280'},
    { id: '3', image: 'https://cdn2.unrealengine.com/egs-stalker-2-carousel-desktop-1920x1080-5c65e98f5d81.jpg?h=720&quality=medium&resize=1&w=1280'},
    { id: '4', image: 'https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-desktop-1920x1080-358478b6468a.jpg?h=720&quality=medium&resize=1&w=1280'},
    { id: '5', image: 'https://bluesol.com.br/wp-content/uploads/2016/08/banner-curso-05.jpg'},

];
  
  export { carouselData };