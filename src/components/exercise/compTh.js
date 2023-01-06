

const Th = (props) => {
    return(
        <div className="test1">
            <div className="test2">
                <div className="ccm">
                    <p>{props.month}</p>
                    <p>{props.year}</p>
                    <p>{props.day}</p>
                </div>
                <div className="cco">
                    <h1>{props.object}</h1>
                </div>
            </div>
            <div className="test3">
                <div className="ccp">
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Th;