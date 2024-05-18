import Header from "./Header.tsx"
import {useState} from 'react';

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
        stages: Stage[]
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
    function getEvents() {
        let eventArray: Event[] = [];
        try {
            fetch("https://zsr.octane.gg/events?tier=S&tier=A&after=" + getFirstOfYear())
                .then(response => response.json())
                .then(json => {
                    console.log(json.events);
                    eventArray = json.events.map((event: JsonEvent) => mapJsonToEvent(event));
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
            stages: []
        }
        return eventObject;
    }

    return (
        <div className="main">
            <Header title="Events"/>
            <button onClick={getEvents}>Get Events</button>
            <ul>{events?.map(x=><li key={x.id}>{x.name}</li>)}</ul>
        </div>
    )
}

export default Events