import { useEffect, useState } from 'react';
import EventCard from './EventCard';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setFiltered(events.filter(event => event.name.toLowerCase().includes(query)));
  };

  return (
    <section className="event-list" id="events">
      <h2>Featured Events</h2>
      <input
        type="text"
        placeholder="Search events by name..."
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="event-grid">
        {filtered.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
