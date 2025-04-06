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
        { name: "Yashasvi Jaiswal", "points": 0 },
        { name: "KL Rahul", "points": 0 },
        { name: "Varun Chakravarthy", "points": 0 },
        { name: "Hardik Pandya", "points": 0 },
        { name: "Shivam Dube", "points": 0 },
        { name: "Liam Livingstone", "points": 0 },
        { name: "Harshal Patel", "points": 0 },
        { name: "Deepak Chahar", "points": 0 },
        { name: "T Natarajan", "points": 0 },
        { name: "Dhruv Jurel", "points": 0 },
        { name: "Rasikh Salam", "points": 0 },
        { name: "Vaibhav Arora", "points": 0 }
      ]    
    },
    {
      name: "Mohan",
      players: [
        { name: "Rajat Patidar", "points": 0 },
        { name: "Suryakumar Yadav", "points": 0 },
        { name: "Andre Russell", "points": 0 },
        { name: "Nicholas Pooran", "points": 0 },
        { name: "Prabhsimran Singh", "points": 0 },
        { name: "Yuzvendra Chahal", "points": 0 },
        { name: "Mukesh Kumar", "points": 0 },
        { name: "Jofra Archer", "points": 0 },
        { name: "Rahul Tripathi", "points": 0 },
        { name: "Krunal Pandya", "points": 0 },
        { name: "Shimron Hetmyer", "points": 0 },
        { name: "Faf du Plessis", "points": 0 }
      ]    
    },
    {
      name: "Prakash/Nikhil",
      players: [
        { name: "Tilak Varma", "points": 0 },
        { name: "Ruturaj Gaikwad", "points": 0 },
        { name: "Shreyas Iyer", "points": 0 },
        { name: "Mohammed Shami", "points": 0 },
        { name: "Josh Hazlewood", "points": 0 },
        { name: "Mitchell Starc", "points": 0 },
        { name: "Sai Sudharsan", "points": 0 },
        { name: "Kuldeep Yadav", "points": 0 },
        { name: "Arshdeep Singh", "points": 0 },
        { name: "Avesh Khan", "points": 0 },
        { name: "Adam Zampa", "points": 0 }
      ]    
    },
    {
      name: "Susheel / Sriram",
      players: [
        { name: "Virat Kohli", "points": 0 },
        { name: "Ravindra Jadeja", "points": 0 },
        { name: "Abhishek Sharma", "points": 0 },
        { name: "Sunil Narine", "points": 0 },
        { name: "Jos Buttler", "points": 0 },
        { name: "Nitish Rana", "points": 0 },
        { name: "Matheesha Pathirana", "points": 0 },
        { name: "Jake Fraser-McGurk", "points": 0 },
        { name: "Wanindu Hasaranga", "points": 0 },
        { name: "Glenn Phillips", "points": 0 },
        { name: "Devon Conway", "points": 0 },
        { name: "Abishek Porel", "points": 0 },
        { name: "Aiden Markram", "points": 0 },
        { name: "Ryan Rickelton", "points": 0 }
      ]    
    },
    {
      name: "Kiran",
      players: [
        { name: "Nitish Kumar Reddy", "points": 0 },
        { name: "Jasprit Bumrah", "points": 0 },
        { name: "Rachin Ravindra", "points": 0 },
        { name: "Heinrich Klaasen", "points": 0 },
        { name: "Will Jacks", "points": 0 },
        { name: "Rinku Singh", "points": 0 },
        { name: "Pat Cummins", "points": 0 },
        { name: "Ravi Bishnoi", "points": 0 },
        { name: "Rahul Chahar", "points": 0 },
        { name: "Mohammed Siraj", "points": 0 },
        { name: "Kumar Kartikeya", "points": 0 },
        { name: "Yash Dayal", "points": 0 },
        { name: "Khaleel Ahmed", "points": 0 },
        { name: "Ramandeep Singh", "points": 0 }
      ]
    },
    {
      name: "JLV",
      players: [
        { name: "Kagiso Rabada", "points": 0 },
        { name: "Rohit Sharma", "points": 0 },
        { name: "Glenn Maxwell", "points": 0 },
        { name: "Axar Patel", "points": 0 },
        { name: "MS Dhoni", "points": 0 },
        { name: "Rishabh Pant", "points": 0 },
        { name: "Ajinkya Rahane", "points": 0 },
        { name: "Rahul Tewatia", "points": 0 },
        { name: "Riyan Parag", "points": 0 },
        { name: "Marco Jansen", "points": 0 },
        { name: "Maheesh Theekshana", "points": 0 },
        { name: "Josh Inglis", "points": 0 },
        { name: "Nehal Wadhera", "points": 0 }
      ]
    },
    {
      name: "Nova (G)",
      players: [
        { name: "Ishan Kishan", "points": 0 },
        { name: "Sanju Samson", "points": 0 },
        { name: "Trent Boult", "points": 0 },
        { name: "Bhuvneshwar Kumar", "points": 0 },
        { name: "Mitchell Marsh", "points": 0 },
        { name: "Marcus Stoinis", "points": 0 },
        { name: "David Miller", "points": 0 },
        { name: "Shashank Singh", "points": 0 },
        { name: "Ravichandran Ashwin", "points": 0 },
        { name: "Sam Curran", "points": 0 },
        { name: "Ashutosh Sharma", "points": 0 },
        { name: "Prasidh Krishna", "points": 0 },
        { name: "Jitesh Sharma", "points": 0 },
        { name: "Tim David", "points": 0 },
        { name: "Sandeep Sharma", "points": 0 }
      ]
    },
    {
      name: "Dileep & Karthik",
      players: [
        { name: "Travis Head", "points": 0 },
        { name: "Shubman Gill", "points": 0 },
        { name: "Rashid Khan", "points": 0 },
        { name: "Phil Salt", "points": 0 },
        { name: "Quinton de Kock", "points": 0 },
        { name: "Venkatesh Iyer", "points": 0 },
        { name: "Harshit Rana", "points": 0 },
        { name: "Tristan Stubbs", "points": 0 },
        { name: "Washington Sundar", "points": 0 },
        { name: "Mitchell Santner", "points": 0 },
        { name: "Devdutt Padikkal", "points": 0 },
        { name: "Vijay Shankar", "points": 0 },
        { name: "Noor Ahmad", "points": 0 },
        { name: "Shahbaz Ahmed", "points": 0 }
      ]
    }
  ];
}
