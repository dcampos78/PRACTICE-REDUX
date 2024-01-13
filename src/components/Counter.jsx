import {connect} from "react-redux";

function Counter ({count, increment, decrement}) {
    return <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <p>Contador:{count} </p>

    </div>
}

const mapStateProps=(state)=>{
    return{count: state.count}
} //se mapean las prodiedades del store, para par pasarla por props al componente para conectarlo al store//

const mapDispatch = (dispatch)=>{
    return {
        increment : ()=>{ dispatch({type: "INCREMENT"})},
        decrement : ()=>{ dispatch({type: "DECREMENT"})}
    }
}//Solo se indican las funciones que usara este componente

export default connect(mapStateProps,mapDispatch)(Counter);//para conectar el componente al store se indica la funcion connecty asi se exporta el componente connect() y la conexion al store. ES necesario porque no todos los hijos necesitaran del store, asi defines cual lo necesita; es la diferencia con el context, que siempre lo comparte con todo//
//en connect indicamos a donde se conecatar por 2 parametros, 1/ las propiedades del estado, en este caso solo count y 2/ las acciones, en este caso solo una el INCREMENT.