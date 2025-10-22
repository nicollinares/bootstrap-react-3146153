//vamos a importar los estilos y el componente InfoCard
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"
import "./App.css"
import { ListaPeliculas } from "./components/ListaPeliculas"


export function App () {

  return(

    <div>   
     <h1>App</h1>
      <InfoCard/>
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/667.jpeg"
      userName="Defiance Beth"
      />
       <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/622.jpeg"
      userName="Sarge"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/347.jpeg"
      userName="President Curtis"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/25.jpeg"
      userName="Morty"
      />
      <ListaPeliculas
      image="https://i.postimg.cc/t4d6kWGr/A-dos-metros-de-ti.jpg"
      nombrePelicula="A dos metros de ti"
      descripcion="Película romántica que cuenta la historia de Stella y Will, dos adolescentes con fibrosis quística que se enamoran mientras están hospitalizados."
      />
    </div>
  )
}

