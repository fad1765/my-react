function CounterButton({onIncrease,onDecrease}) {
    return(
        <>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default CounterButton