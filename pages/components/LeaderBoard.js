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
      name: "Avinash/Abhishek",
      players: [
          { name: "Sam Curran", points: 0 },
          { name: "Jasprit Bumrah", points: 0 },
          { name: "David Warner", points: 0 },
          { name: "Pat Cummins", points: 0 },
          { name: "Aiden Markram", points: 0 },
          { name: "Andre Russell", points: 0 },
          { name: "Jonny Bairstow", points: 0 },
          { name: "Glenn Phillips", points: 0 },
          { name: "Rahmanullah Gurbaz", points: 0 },
          { name: "Rachin Ravindra", points: 0 },
          { name: "Imad Wasim", points: 0 },
          { name: "Keshav Maharaj", points: 0 },
          { name: "David Miller", points: 0 },
          { name: "Ish Sodhi", points: 0 },
          { name: "Tristan Stubbs", points: 0 }
      ],
    },
    {
      name: "Mohan",
      players: [
          { name: "Travis Head", points: 0 },
          { name: "Jofra Archer", points: 0 },
          { name: "Yuzvendra Chahal", points: 0 },
          { name: "Mohammad Rizwan", points: 0 },
          { name: "Dasun Shanaka", points: 0 },
          { name: "Phil Salt", points: 0 },
          { name: "Shaheen Afridi", points: 0 },
          { name: "Fakhar Zaman", points: 0 },
          { name: "Arshdeep Singh", points: 0 },
          { name: "Rovman Powell", points: 0 },
          { name: "Pathum Nissanka", points: 0 },
          { name: "Cameron Green", points: 0 },
          { name: "Shakib Al Hasan", points: 0 },
          { name: "Gerald Coetzee", points: 0 },
          { name: "Matt Henry", points: 0 }
      ],
    },
    {
      name: "Prakash/Nikhil",
      players: [
          { name: "Yashasvi Jaiswal", points: 0 },
          { name: "Jos Buttler", points: 0 },
          { name: "Babar Azam", points: 0 },
          { name: "Kuldeep Yadav", points: 0 },
          { name: "Adam Zampa", points: 0 },
          { name: "Trent Boult", points: 0 },
          { name: "Shai Hope", points: 0 },
          { name: "Matheesha Pathirana", points: 0 },
          { name: "Naveen-ul-Haq", points: 0 },
          { name: "Mustafizur Rahman", points: 0 },
          { name: "Tabraiz Shamsi", points: 0 }
      ],
    },
    {
      name: "Susheel",
      players: [
          { name: "Virat Kohli", points: 0 },
          { name: "Nicholas Pooran", points: 0 },
          { name: "Reeza Hendricks", points: 0 },
          { name: "Glenn Maxwell", points: 0 },
          { name: "Adil Rashid", points: 0 },
          { name: "Kagiso Rabada", points: 0 },
          { name: "Marco Jansen", points: 0 },
          { name: "Ravindra Jadeja", points: 0 },
          { name: "Mohammed Siraj", points: 0 },
          { name: "Mark Wood", points: 0 },
          { name: "Mitchell Santner", points: 0 },
          { name: "Harry Brook", points: 0 },
          { name: "Haris Rauf", points: 0 },
          { name: "Josh Inglis", points: 0 },
          { name: "Josh Hazlewood", points: 0 }
      ],
    },
    {
      name: "Gowtham",
      players: [
          { name: "Mitchell Starc", points: 0 },
          { name: "Rishabh Pant", points: 0 },
          { name: "Quinton De Kock", points: 0 },
          { name: "Corey Anderson", points: 0 },
          { name: "Marcus Stoinis", points: 0 },
          { name: "Rashid Khan", points: 0 },
          { name: "Reece Topley", points: 0 },
          { name: "Will Jacks", points: 0 },
          { name: "Brandon King", points: 0 },
          { name: "David Wiese", points: 0 },
          { name: "Johnson Charles", points: 0 },
          { name: "Devon Conway", points: 0 },
          { name: "Kusal Mendis", points: 0 },
          { name: "Finn Allen", points: 0 }
      ],
    },
    {
      name: "Hemanth",
      players: [
          { name: "Rohit Sharma", points: 0 },
          { name: "Wanindu Hasaranga", points: 0 },
          { name: "Heinrich Klaasen", points: 0 },
          { name: "Daryl Mitchell", points: 0 },
          { name: "Maheesh Theekshana", points: 0 },
          { name: "Kane Williamson", points: 0 },
          { name: "Max O'Dowd", points: 0 },
          { name: "Shadab Khan", points: 0 },
          { name: "Dunith Wellalage", points: 0 },
          { name: "Litton Das", points: 0 },
          { name: "Chris Jordan", points: 0 }
      ],
    }
  ];
}
