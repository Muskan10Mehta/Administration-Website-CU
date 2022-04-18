import React from "react";
import Layout from "./Layout";
import { getTeam } from "../admin/getPDF";
import Title from "../../common/components/home/title";
import FullCard from "./../../common/components/cards/fullcard";

export default function Team() {
  const [team, setTeam] = React.useState([]);

  React.useEffect(() => {
    getTeam()
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <Layout
      content={
        <>
          <Title title="Team" />
          {team.map((team) => (
            <FullCard pdfLink={team.url} />
          ))}
        </>
      }
    ></Layout>
  );
}
