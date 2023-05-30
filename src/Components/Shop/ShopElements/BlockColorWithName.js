
export const BlockColorWithName = ({element}) =>{
    const {background, name} = element;
    return(<div>
        <div style={{background: background, width: '100px', height: "100px"}}></div>
        <p>{name}</p>
    </div>)
}