function Answer({id, idText}) {
    return (
        <li>
            <input type="radio" name="answer" className="answer" id={id} />
            <label htmlFor={id} id={idText}>Answer</label>
        </li>
    );
}

export default Answer;