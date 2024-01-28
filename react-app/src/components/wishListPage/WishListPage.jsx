import React, { useEffect, useState } from "react";
function WishListPage () {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        let items = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.indexOf('event-')) {
                let eventItem = JSON.parse(localStorage.getItem(key));
                items.push(eventItem)
            }
        }
        setEvents(items);
    }, []);
    if (events) {
        const items = events.map((event) => {
            return (
                <div key={event.id} className="event">
                    <img src={event.images[4].url} alt={event.images[0].url}/>
                    <h2>x{event.name}</h2>

                </div>)
        });

        return (

            <div>{items}</div>
        );
    }
}
export default WishListPage;