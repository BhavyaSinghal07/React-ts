// tsx: tsx extension is use for typescript react components

function Message() {

    const name = 'bhavya';
    if(name)
        return <h1>Hello {name}</h1>;     // if name exists then it gives hello name else hello world
    return <h1>Hello World!</h1>;         // JSX: JavaScript XML, HTML code in JavaScript
}

export default Message;