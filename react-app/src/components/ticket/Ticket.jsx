import { useEffect } from 'react';
import '../../assets/scss/style.scss';
function Ticket () {
    useEffect(() => {
        document.title = 'Ticket';
    },[]);
    return (
        <div className="ticket"></div>
    )
}

export default Ticket;