import React from "react";
import { BiLayer } from "react-icons/bi";
import Header from "./components/Header";
import JournalEntry from "./components/JournalEntry";
import data from "./data";

const entries = data.map((entry) => {
  return (
    <JournalEntry
      key={entry.id}
      title={entry.title}
      location={entry.location}
      googleMapsUrl={entry.googleMapsUrl}
      startDate={entry.startDate}
      endDate={entry.endDate}
      description={entry.description}
      imageUrl={entry.imageUrl}
    />
  );
});

const App = () => {
  return (
    <div id="app">
      <Header title="my.travel.journal" />
      <section className="entries">{entries}</section>
    </div>
  );
};

export default App;
