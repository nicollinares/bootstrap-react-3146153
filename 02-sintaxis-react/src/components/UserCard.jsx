//crear la función con e, nombre UserCard

export function UserCard ({image,userName}) {

    return(
       <>
       <h1>{userName}</h1>
       <img src= {image} alt="" width="150"/>
       <small>{userName}</small>
       </>

    )
}
