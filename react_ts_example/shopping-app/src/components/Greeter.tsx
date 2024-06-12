
//? Common to make an interface to pass props:
interface GreeterProps {
    person: string;
}

// JSX.Element is inferred automatically but we're practicing!
function Greeter({ person }: GreeterProps): JSX.Element {
    return <h1>Hello, {person}!</h1>
}

export default Greeter;