function Message(){
    const name = "Dhruvil";
    if (name)
        return <h1>Hello {name}</h1>;
    else
        return <h1>Hello Guest</h1>;
}

export default Message;