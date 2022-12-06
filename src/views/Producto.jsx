import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"

import { formatPrice } from "../utils/utils.js"

const Producto = ()=>{
    const { id } = useParams()
    const { menu, addToCart} = useContext(Context)

    const [pizza, setPizza] = useState({ingredients: [],price: 0, img: ''})
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(menu.length > 0){
            const pizza = menu.filter((item)=> item.id === id)
            setPizza(pizza[0])
            setLoading(false);
        }
      }, [id, menu])


return(
        <main>{loading 
            ? <h6>Cargando...</h6>
            : 
            <div className="pizza-view" >
                <section className="image"  style={{backgroundImage: `url(${pizza.img})`}}>
                </section>
                <article className="content" >
                    <h4>{pizza.name}</h4>
                    <p className="desc" >{pizza.desc}</p>

                    
                        <div className="price-row" >
                            <h3>Precio: ${ formatPrice(pizza.price ? pizza.price : 0)}</h3>

                            <button className="btn btn-primary" onClick={()=> addToCart(pizza)} > Añadir</button>

                        </div>

                </article>
            </div>
            }
        </main>

    )

}

export default Producto