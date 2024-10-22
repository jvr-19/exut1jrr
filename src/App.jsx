import React from 'react';
import Noticia from './components/Noticia';
import Container from '@mui/material/Container';
import './App.css';

function App() {

  const noticias = [
    {
      id: 1,
      avatar: './avatar01.png',
      altavatar: 'avatar noticia 1',
      titulo: 'Titulo 1',
      fecha: '19 de octubre de 2024',
      imagen: './sky.jpg',
      alt: 'imagen de noticia 1',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likesdefault: 5,
    },
    {
      id: 2,
      avatar: './avatar02.png',
      altavatar: 'avatar noticia 2',
      titulo: 'Titulo 2',
      fecha: '19 de octubre de 2024',
      imagen: './sea.jpg',
      alt: 'imagen de noticia 2',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likesdefault: 30,
    },
    {
      id: 3,
      avatar: './avatar03.png',
      altavatar: 'avatar noticia 3',
      titulo: 'Titulo 3',
      fecha: '19 de octubre de 2024',
      imagen: './tux.jpg',
      alt: 'imagen de noticia 3',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likesdefault: 36,
    },
    {
      id: 4,
      avatar: './avatar04.png',
      altavatar: 'avatar noticia 4',
      titulo: 'Titulo 4',
      fecha: '19 de octubre de 2024',
      imagen: './mario.jpg',
      alt: 'imagen de noticia 4',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      likesdefault: 44,
    }
  ]

  return (
    <>
      <Container>
        {noticias.map((noticia) => (
          <Noticia
            key={noticia.id}
            avatar={noticia.avatar} 
            altavatar={noticia.altavatar} 
            titulo={noticia.titulo} 
            fecha={noticia.fecha} 
            imagen={noticia.imagen} 
            alt={noticia.alt} 
            noticia={noticia.noticia}
            likesdefault={noticia.likesdefault} 
          />
        ))}
      </Container>
    </>
  )
}

export default App
