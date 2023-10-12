import React from "react";

export default function LeaderBoard({ players, lastScraped, test }) {
  const participants = getParticipants();

  participants.forEach((participant) => {
    participant.players.forEach((player) => {
      player.points += getPoints(players, player.name);
    });

    participant.players.sort(
      (player1, player2) => player2.points - player1.points
    );

    let count = 0;
    participant.players.forEach((player, index) => {
      if (index > 10) {
        player.inactive = true;
      } else {
        count += parseFloat(player.points) || 0;
      }
    });
    participant.totalPoints = count;
  });

  participants.sort((p1, p2) => p2.totalPoints - p1.totalPoints);
  if (players && players.length > 0) {
    players.sort((p1, p2) => p2.points - p1.points);
  }

  return (
    <div>
      {participants.map((participant, index) => (
        <div key={index}>
          <h3>
            {participant.name} {participant.totalPoints}
          </h3>
          <ol>
            {participant.players.map((player) => (
              <li style={{ color: player.inactive ? "grey" : "black" }}>
                {player.name} {player.points}
              </li>
            ))}
          </ol>
        </div>
      ))}

      <div>
        <h2>Actual LeaderBoard</h2>
        {players &&
          players.map((player, index) => (
            <div key={index}>
              {player.name} {player.points}
            </div>
          ))}
        <div>Last scraped: {lastScraped}</div>
      </div>
    </div>
  );
}

function getPoints(players, name) {
  if (!players) {
    return 0;
  }
  const player = players.find(
    (x) => x?.name?.toLowerCase() == name?.toLowerCase()
  );
  return player ? parseFloat(player.points) : 0;
}

function getParticipants() {
  return [
    {
      name: "Abhishek",
      players: [
        { name: "Jos Butler", points: 0 },
        { name: "Rassie van der Dussen", points: 0 },
        { name: "Dawid Malan", points: 0 },
        { name: "Mark Wood", points: 0 },
        { name: "Temba Bavuma", points: 0 },
        { name: "Liam Livingstone", points: 0 },
        { name: "Heinrich Klaasen", points: 0 },
        { name: "Rahmanullah Gurbaz", points: 0 },
        { name: "Jasprit Bumrah", points: 0 },
        { name: "Logan van Beek", points: 0 },
        { name: "Tom Latham", points: 0 },
        { name: "Shakib Al Hasan", points: 0 },
        { name: "Josh Hazlewood", points: 0 },
        { name: "Maheesh Theekshana", points: 0 },
      ],
    },
    {
      name: "Mohan",
      players: [
        { name: "DEVON CONWAY", points: 0 },
        { name: "Virat Kohli", points: 0 },
        { name: "Ravindra Jadeja", points: 0 },
        { name: "Kane Williamson", points: 0 },
        { name: "Trent Boult", points: 0 },
        { name: "Ben Stokes", points: 0 },
        { name: "Moeen Ali", points: 0 },
        { name: "Chris Woakes", points: 0 },
        { name: "Fakhar Zaman", points: 0 },
        { name: "Litton Das", points: 0 },
        { name: "Andile Phehlukwayo", points: 0 },
        { name: "Mitchell Starc", points: 0 },
        { name: "Mohammad Nabi", points: 0 },
        { name: "Harry Brook", points: 0 },
      ],
    },
    {
      name: "Gautham",
      players: [
        { name: "Quinton de Kock", points: 0 },
        { name: "Rohit Sharma", points: 0 },
        { name: "Babar Azam", points: 0 },
        { name: "Mohammed Siraj", points: 0 },
        { name: "Pathum Nissanka", points: 0 },
        { name: "David Miller", points: 0 },
        { name: "Haris Rauf", points: 0 },
        { name: "Lockie ferguson ", points: 0 },
        { name: "Shadab Khan", points: 0 },
        { name: "Mitchell Santner", points: 0 },
        { name: "Sam Curran", points: 0 },
        { name: "Glenn Phillips", points: 0 },
        { name: "Ravichandran Ashwin", points: 0 },
        { name: "Surya Kumar Yadav", points: 0 },
      ],
    },
    {
      name: "Nikhil",
      players: [
        { name: "Kagiso Rabada", points: 0 },
        { name: "Mohammad Rizwan", points: 0 },
        { name: "Rashid Khan", points: 0 },
        { name: "Joe Root", points: 0 },
        { name: "Imam-ul-Haq", points: 0 },
        { name: "Shaheen Afridi", points: 0 },
        { name: "Jonny Bairstow", points: 0 },
        { name: "Kusal Mendis", points: 0 },
        { name: "Mehidy Hasan", points: 0 },
        { name: "Marnus Labuschagne", points: 0 },
        { name: "Mujeeb Ur Rahman", points: 0 },
        { name: "Dhananjaya de Silva", points: 0 },
      ],
    },
    {
      name: "Dileep",
      players: [
        { name: "Shubman Gill", points: 0 },
        { name: "Shreyas Iyer", points: 0 },
        { name: "Kuldeep Yadav", points: 0 },
        { name: "Glenn Maxwell", points: 0 },
        { name: "Pat Cummins", points: 0 },
        { name: "Hardik Pandya", points: 0 },
        { name: "Mushfiqur Rahim", points: 0 },
        { name: "Adil Rashid", points: 0 },
        { name: "Ish Sodhi", points: 0 },
        { name: "Marco Jansen", points: 0 },
        { name: "Iftikhar Ahmed", points: 0 },

        { name: "Daryl Mitchell", points: 0 },

        { name: "Will Young", points: 0 },

        { name: "Dasun Shanaka", points: 0 },
      ],
    },
    {
      name: "Pushpa",
      players: [
        { name: "David Warner", points: 0 },
        { name: "Steve Smith", points: 0 },
        { name: "Mitchel Marsh", points: 0 },
        { name: "Adam Zampa", points: 0 },
        { name: "KL Rahul", points: 0 },
        { name: "Aiden Markram", points: 0 },
        { name: "Neesham", points: 0 },
        { name: "Tabraiz Shamsi", points: 0 },
        { name: "Mohammed Shami", points: 0 },
        { name: "Cameroon Green", points: 0 },
        { name: "Alex Carey", points: 0 },
        { name: "Marcus Stoinis", points: 0 },
        { name: "Reeza Hendricks", points: 0 },
        { name: "Dunith Wellalage", points: 0 },
      ],
    },
  ];
}
