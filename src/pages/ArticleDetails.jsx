import { useNavigate, useParams } from "react-router-dom"

fetch



function ArticleDetails() {

    const {id} = useParams()

    const navigate = useNavigate()

    const handleArticle = () =>{
        console.log("Enviado")
        return navigate("/")
    }

  return (
    <div>
        <image></image>
        
        <h1>{id}</h1>
 
        <p>Descripción</p>
 
        <button onClick={handleArticle}>Enviar</button>
    </div>
  )
}

export default ArticleDetails