import React from "react";

export default function LeaderBoard({ players, lastScraped }) {
  const participants = getParticipants();

  participants.forEach((participant) => {
    participant.players.forEach(player => {
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
  const player = players.find((x) => x?.name.toLowerCase() == name?.toLowerCase());
  return player ? parseFloat(player.points) : 0;
}

function getParticipants() {
  return [
    {
      name: "Dileep-Karthik",
      players: [
        { name: "Shreyas Iyer", points: 0 },
        { name: "Quinton De Kock", points: 0 },
        { name: "Moeen Ali", points: 0 },
        { name: "Ruturaj Gaikwad", points: 0 },
        { name: "Kieron Pollard", points: 0 },
        { name: "Deepak Chahar", points: 0 },
        { name: "Jos Buttler", points: 0 },
        { name: "Liam Livingstone", points: 0 },
        { name: "Aiden Markram", points: 0 },
        { name: "Shardul Thakur", points: 0 },
        { name: "Deepak Hooda", points: 0 },
        { name: "T Natarajan", points: 0 },
        { name: "Rovman Powell", points: 0 },
      ],
    },
    {
      name: "Hemanth-Mohan",
      players: [
        { name: "Rishabh Pant", points: 0 },
        { name: "Rohit Sharma", points: 0 },
        { name: "Shikhar Dhawan", points: 0 },
        { name: "MS Dhoni", points: 0 },
        { name: "Mitchell Marsh", points: 0 },
        { name: "Jason Holder", points: 0 },
        { name: "Kagiso Rabada", points: 0 },
        { name: "Bhuvneshwar Kumar", points: 0 },
        { name: "Shreyas Gopal", points: 0 },
        { name: "Tim David", points: 0 },
        { name: "Trent Boult", points: 0 },
      ],
    },
    {
      name: "Nikhil-Prakash",
      players: [
        { name: "Lokesh Rahul", points: 0 },
        { name: "Rahul Chahar", points: 0 },
        { name: "Kane Williamson", points: 0 },
        { name: "Jasprit Bumrah", points: 0 },
        { name: "Mayank Agarwal", points: 0 },
        { name: "Ravi Bishnoi", points: 0 },
        { name: "Devdutt Padikkal", points: 0 },
        { name: "Pat Cummins", points: 0 },
        { name: "Romario Shepherd", points: 0 },
        { name: "Jaydev Unadkat", points: 0 },
        { name: "Ravichandran Ashwin", points: 0 },
      ],
    },
    {
      name: "Avi-Abhi",
      players: [
        { name: "Rahul Tripathi", points: 0 },
        { name: "David Warner", points: 0 },
        { name: "Prithvi Shaw", points: 0 },
        { name: "Rashid-Khan", points: 0 },
        { name: "Abhishek Sharma", points: 0 },
        { name: "Yuzvendra Chahal", points: 0 },
        { name: "Mohammad Shami", points: 0 },
        { name: "Marcus Stoinis", points: 0 },
        { name: "Shubman Gill", points: 0 },
        { name: "Lockie Ferguson", points: 0 },
        { name: "Andrew Tye", points: 0 },
        { name: "Dinesh Karthik", points: 0 },
      ],
    },
    {
      name: "Kiran",
      players: [
        { name: "Ishan Kishan", points: 0 },
        { name: "Sanju Samson", points: 0 },
        { name: "Nicholas Pooran", points: 0 },
        { name: "Glenn Maxwell", points: 0 },
        { name: "Hardik Pandya", points: 0 },
        { name: "Andre Russell", points: 0 },
        { name: "Yashasvi Jaiswal", points: 0 },
        { name: "Mohammed Siraj", points: 0 },
        { name: "Axar Patel", points: 0 },
        { name: "Krunal Pandya", points: 0 },
        { name: "Mahipal Lomror", points: 0 },
        { name: "Nitish Rana", points: 0 },
        { name: "Washington Sundar", points: 0 },
        { name: "Rahul Tewatia", points: 0 },
        { name: "Sandeep Sharma", points: 0 },
      ],
    },
    {
      name: "CV-Vivek",
      players: [
        { name: "Venkatesh Iyer", points: 0 },
        { name: "Shahrukh Khan", points: 0 },
        { name: "Varun Chakravarthy", points: 0 },
        { name: "Faf Du Plessis", points: 0 },
        { name: "Avesh Khan", points: 0 },
        { name: "Wanindu Hasaranga", points: 0 },
        { name: "Abdul Samad", points: 0 },
        { name: "Josh Hazlewood", points: 0 },
        { name: "Ambati Rayudu", points: 0 },
        { name: "Anrich Nortje", points: 0 },
        { name: "Prasidh Krishna", points: 0 },
        { name: "Matthew Wade", points: 0 },
        { name: "Manish Pandey", points: 0 },
        { name: "Devon Conway", points: 0 },
      ],
    },
    {
      name: "JLV-Akhil",
      players: [
        { name: "Harshal Patel", points: 0 },
        { name: "Suryakumar Yadav", points: 0 },
        { name: "Virat Kohli", points: 0 },
        { name: "Ravindra Jadeja", points: 0 },
        { name: "Jonny Bairstow", points: 0 },
        { name: "Sunil Narine", points: 0 },
        { name: "Arshdeep Singh", points: 0 },
        { name: "Odean Smith", points: 0 },
        { name: "Chetan Sakariya", points: 0 },
        { name: "Shimron Hetmyer", points: 0 },
        { name: "Robin Uthappa", points: 0 },
      ],
    },
  ]
}
