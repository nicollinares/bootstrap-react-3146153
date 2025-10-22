export function ListaPeliculas ({image,nombrePelicula,descripcion}) {

    return(
       <>
       <h1>{nombrePelicula}</h1>
       <img src= {image} alt="" width="150"/>
       <small>{nombrePelicula}</small>
       <p>{descripcion}</p>
       </>

    )
}
