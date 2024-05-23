import Header from "./Header.tsx"
import "../css/Events.css"
import {useState, useEffect} from 'react';

function Events() {
    //Variables
    const [events, setEvents] = useState<Event[]>();
    
    //Types
    type Event = {
        id: string,
        name: string,
        startDate: Date,
        endDate: Date,
        region: string,
        stages: Stage[],
        liquipedia: string
    }

    type Stage = {
        id: string,
        name: string,
        startDate: Date,
        endDate: Date,
        liquipedia: string
    }

    type JsonEvent = {
        _id: string,
        slug: string,
        name: string,
        startDate: Date,
        endDate: Date,
        region: string,
        mode: number,
        prize: {
            amount: number,
            currency: string
        },
        tier: string,
        image: string,
        groups: string[],
        stages: JsonStage[]
    }

    type JsonStage = {
        _id: string,
        name: string,
        region: string,
        startDate: Date,
        endDate: Date,
        prize: {
            amount: number,
            currency: string
        },
        liquipedia: string,
        qualifier: boolean
    }

    //Functions
    useEffect(() => {
        if (events == undefined)
            getEvents();
    });

    function getEvents() {
        let eventArray: Event[] = [];
        try {
            fetch("https://zsr.octane.gg/events?tier=S&tier=A&after=" + getFirstOfYear())
                .then(response => response.json())
                .then(json => {
                    console.log(json.events);
                    eventArray = json.events.map((event: JsonEvent) => mapJsonToEvent(event));

                    //Filter out past events
                    const today: Date = new Date();
                    eventArray = eventArray.filter((event: Event) => {return new Date(event.endDate) >= today});

                    eventArray.sort(sortEventsByDate);
                    setEvents(eventArray);
                })
        }
        catch (error) {
            console.log(error)
        }  
    }

    function getFirstOfYear(): string {
        const today: Date = new Date();
        const firstOfYear: string = `${today.getFullYear()}-01-01`
        return firstOfYear;
    }

    function mapJsonToEvent(jsonObject: JsonEvent): Event {
        const eventObject: Event = {
            id: jsonObject._id,
            name: jsonObject.name,
            startDate: jsonObject.startDate,
            endDate: jsonObject.endDate,
            region: jsonObject.region,
            stages: [],
            liquipedia: jsonObject.stages[jsonObject.stages.length - 1].liquipedia
        }
        return eventObject;
    }

    function sortEventsByDate(firstEvent: Event, secondEvent: Event) {
        return firstEvent.startDate > secondEvent.startDate ? 1 : -1;
    }

    function getClasses(event: Event) {
        let classes: string = "event-card";
        if (event.liquipedia != undefined)
            classes = classes + " has-link";
        return classes;
    }

    return (
        <div className="main">
            <Header title="Events"/>
            <h4>Upcoming:</h4>
            <ul className="events-container">{events?.map(x=><a key={x.id} className={getClasses(x)} href={x.liquipedia}><li>{x.name}</li></a>)}</ul>
        </div>
    )
}

export default Events