function Input({ primaryName, secondaryName, displayName, type}) {
    return (
        <div className={primaryName}>
            <label htmlFor={primaryName}>{displayName}</label>
            <input type={type} id={primaryName} name={secondaryName} />
        </div> 
    );
}

export default Input;