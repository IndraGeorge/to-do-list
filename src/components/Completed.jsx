
function Completed(props) {
    return (
        <div className="collapse">
            <p>Completed({props.number})</p>
            {props.children}
        </div>
    )
}

export default Completed;
