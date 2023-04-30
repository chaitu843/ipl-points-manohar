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
  const player = players.find((x) => x?.name?.toLowerCase() == name?.toLowerCase());
  return player ? parseFloat(player.points) : 0;
}

function getParticipants() {
  return [
    {
      name: "Nikhil",
      players: [
        { name: "Suryakumar Yadav", points: 0 },
        { name: "Sanju Samson", points: 0 },
        { name: "Glenn Maxwell", points: 0 },
        { name: "Ruturaj Gaikwad", points: 0 },
        { name: "Marcus Stoinis", points: 0 },
        { name: "Rahul Chahar", points: 0 },
        { name: "Khaleel Ahmed", points: 0 },
        { name: "Umesh Yadav", points: 0 },
        { name: "Vijaykumar Vyshak", points: 0 },
        { name: "Shimron Hetmyer", points: 0 },
        { name: "Nicholas Pooran", points: 0 },
        { name: "Manish Pandey", points: 0 },
        { name: "Narayan Jagadeesan", points: 0 },
        { name: "Wriddhiman Saha", points: 0 }, 
      ],
    },
    {
      name: "jlv-mohan",
      players: [
        { name: "Moeen Ali", points: 0 },
        { name: "Shivam Dube", points: 0 },
        { name: "Shikhar Dhawan", points: 0 },
        { name: "faf du plessis", points: 0 },
        { name: "Wanindu Hasaranga", points: 0 },
        { name: "Ishan Kishan", points: 0 },
        { name: "Harshal Patel", points: 0 },
        { name: "glenn phillips", points: 0 },
        { name: "Deepak hooda", points: 0 },
        { name: "Jason Roy", points: 0 },
        { name: "Avesh khan", points: 0 },
        { name: "Devdutt Padikkal", points: 0 },
        { name: "Josh Hazlewood", points: 0 },                                  
      ],
    },
    {
      name: "Dileep",
      players: [
        { name: "Rovman Powell", points: 0 },
        { name: "Shubman Gill", points: 0 },
        { name: "Deepak Chahar", points: 0 },
        { name: "Ambati Rayudu", points: 0 },
        { name: "Shardul Thakur", points: 0 },
        { name: "Jofra Archer", points: 0 },
        { name: "Aiden Markram", points: 0 },
        { name: "Rahul Tripathi", points: 0 },
        { name: "Jason Holder", points: 0 },
        { name: "Axar Patel", points: 0 },    
        { name: "Mark Wood", points: 0 },
        { name: "Jitesh Sharma", points: 0 },
        { name: "Mahipal Lomror", points: 0 },  
      ],
    },
    {
      name: "Avi",
      players: [
        { name: "KL Rahul", points: 0 },
        { name: "Prithvi Shaw", points: 0 },
        { name: "Abhishek Sharma", points: 0 },
        { name: "Cameron Green", points: 0 },
        { name: "Washington Sundar", points: 0 },
        { name: "Tilak Varma", points: 0 },
        { name: "Kagiso Rabada", points: 0 },
        { name: "Mohammed Siraj", points: 0 },
        { name: "Rahmanullah Gurbaz", points: 0 },
        { name: "Dwaine Pretorius", points: 0 },    
        { name: "Rashid Khan", points: 0 },
        { name: "T Natarajan", points: 0 },
        { name: "Riyan Parag", points: 0 },                                               
      ],
    },
    {
      name: "Gautham",
      players: [
        { name: "David Warner", points: 0 },
        { name: "Quinton de kock", points: 0 },
        { name: "Mitchell Marsh", points: 0 },
        { name: "Kuldeep Yadav", points: 0 },
        { name: "MS Dhoni", points: 0 },
        { name: "Devon Conway", points: 0 },
        { name: "Bhuvneshwar Kumar", points: 0 },
        { name: "Rahul Tewatia", points: 0 },
        { name: "Tim David", points: 0 },
        { name: "David Miller", points: 0 },
        { name: "Lockie Ferguson", points: 0 },
        { name: "Trent Boult", points: 0 },
        { name: "Anrich Nortje", points: 0 },                                                                                           
      ],
    },
    {
      name: "Vatsav",
      players: [
        { name: "Hardik Pandya", points: 0 },
        { name: "Yuzvendra Chahal", points: 0 },
        { name: "Liam Livingstone", points: 0 },
        { name: "Dasun Shanaka", points: 4 },
        { name: "Ravindra Jadeja", points: 0 },
        { name: "Mohammad Shami", points: 0 },
        { name: "Krunal Pandya", points: 0 },
        { name: "Maheesh Theekshana", points: 0 },
        { name: "Marco Jansen", points: 0 },
        { name: "Shivam Mavi", points: 0 },
        { name: "Shahrukh Khan", points: 0 },
        { name: "Alzarri Joseph", points: 0}, 
      ],
    },
    {
      name: "Susheel",
      players: [
        { name: "Rohit Sharma", points: 0 },
        { name: "Andre Russell", points: 0 },
        { name: "Ben Stokes", points: 0 },
        { name: "Sunil Narine", points: 0 },
        { name: "Ravi Bishnoi", points: 0 },
        { name: "Mayank Agarwal", points: 0 },
        { name: "Dinesh Karthik", points: 0 },
        { name: "Nitish Rana", points: 0 },
        { name: "Yashasvi Jaiswal", points: 0 },
        { name: "Ravichandran Ashwin", points: 0 },
        { name: "Bhanuka Rajapaksa", points: 0 },
      ],
    },
    {
      name: "Kiran",
      players: [
        { name: "Sai Sudharsan", points: 0 },
        { name: "Virat Kohli", points: 0 },
        { name: "Jos Buttler", points: 0 },
        { name: "Shahbaz Ahmed", points: 0 },
        { name: "Rinku Singh", points: 0 },
        { name: "Venkatesh Iyer", points: 0 },
        { name: "Sam Curran", points: 0 },
        { name: "Varun Chakaravarthy", points: 0 },
        { name: "Arshdeep Singh", points: 0 },
        { name: "Lalit Yadav", points: 0 },
        { name: "Mohsin Khan", points: 0 },
        { name: "Kuldeep Sen", points: 0 }, 
        { name: "Umran Malik", points: 0},
        { name: "Dewald Brevis", points: 0},
        { name: "Harry Brook", points: 0},                             
      ],
    },
  ]
}
