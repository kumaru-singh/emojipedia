import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createEntry(emojipedia) {
  return (
    <Entry>
      key={emojipedia.id}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    </Entry>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {/* {emojipedia.map(createEntry)} */}
      <Entry
        name={emojipedia[0].name}
        emoji={emojipedia[0].emoji}
        meaning={emojipedia[0].meaning}
      />
      <Entry
        name={emojipedia[1].name}
        emoji={emojipedia[1].emoji}
        meaning={emojipedia[1].meaning}
      />
      <Entry
        name={emojipedia[2].name}
        emoji={emojipedia[2].emoji}
        meaning={emojipedia[2].meaning}
      />
      <Entry
        name={emojipedia[3].name}
        emoji={emojipedia[3].emoji}
        meaning={emojipedia[3].meaning}
      />
      <Entry
        name={emojipedia[4].name}
        emoji={emojipedia[4].emoji}
        meaning={emojipedia[4].meaning}
      />
      <Entry
        name={emojipedia[5].name}
        emoji={emojipedia[5].emoji}
        meaning={emojipedia[5].meaning}
      />
      <Entry
        name={emojipedia[6].name}
        emoji={emojipedia[6].emoji}
        meaning={emojipedia[6].meaning}
      />
      <Entry
        name={emojipedia[7].name}
        emoji={emojipedia[7].emoji}
        meaning={emojipedia[7].meaning}
      />
    </div>
  );
}

export default App;
