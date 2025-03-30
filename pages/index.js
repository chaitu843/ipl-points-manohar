import React from "react";
import Container from "@material-ui/core/Container";
import NextLink from "next/link";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import LeaderBoard from "./components/LeaderBoard";

import cheerio from "cheerio";
import axios from "axios";

export default function Index(props) {
  return (
    <Container maxWidth="sm">
      <Box mt={2}>
        <Link>
          <NextLink href="/fantasy">
            <a>Old Mvp LeaderBoard</a>
          </NextLink>
        </Link>
      </Box>
      <Box my={4}>
        <LeaderBoard players={props.players} lastScraped={props.lastScraped} />
      </Box>
    </Container>
  );
}

export async function getServerSideProps() {
  // const { data } = await axios.get(
  //   "https://fantasy.iplt20.com/season/services/feed/player/stats",
  //   {
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json;charset=utf-8",
  //       "User-Agent": "PostmanRuntime/7.24.1",
  //     },
  //   }
  // );

  const { data: {Data : {Value: fixturesList = [] = {}} = {}} = {} } = await axios.get(
    "https://fantasy.iplt20.com/classic/api/feed/tour-fixtures",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "User-Agent": "PostmanRuntime/7.24.1",
      },
    }
  );

  const { TourGamedayId = 75, TeamGamedayId = 75 } = fixturesList.find(({MatchStatus}) => !MatchStatus) ?? {};
  const { data: {Data : {Value: {Players: playersStats= []} = {}} = {}} = {} } = await axios.get(
      `https://fantasy.iplt20.com/classic/api/feed/gamedayplayers?lang=en&tourgamedayId=${TourGamedayId - 1}&teamgamedayId=${TeamGamedayId - 1}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
          "User-Agent": "PostmanRuntime/7.24.1",
        },
      }
    );

  let players = [];

  playersStats &&
    playersStats.forEach((player) => {
      players.push({
        name: player.Name,
        points: parseFloat(player.OverallPoints),
      });
    });

  const lastScraped = new Date().toISOString();
  return {
    props: { players, lastScraped },
  };
}
