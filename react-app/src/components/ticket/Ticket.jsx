import { useEffect } from 'react';
function Ticket () {
    useEffect(() => {
        document.title = 'Ticket';
    },[]);
    return (
        <h1>Ticket</h1>
    )
}

export default Ticket;