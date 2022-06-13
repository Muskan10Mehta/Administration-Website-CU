import React from "react";
import Layout from "./Layout";
import Title from "../../common/components/home/title";
import { getSus, getWaste, getWater } from "../admin/getPDF";
import Table from "./../../common/components/table/table";
import TableRow from "./../../common/components/table/row";
export default function Sustainability() {
  //const [clean, setClean] = React.useState([]);
  const [sus, setSus] = React.useState([]);
  const [waste, setWaste] = React.useState([]);
  const [water, setWater] = React.useState([]);

  React.useEffect(() => {
    // getClean()
    //   .then((res) => {
    //     setClean(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
    getSus()
      .then((res) => {
        setSus(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getWaste()
      .then((res) => {
        setWaste(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getWater()
      .then((res) => {
        setWater(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <Layout
      content={
        <>
          <Title title="Sustainability" />
          <div id="cleanliness">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Cleanliness
            </h1>
            {/* {clean.length > 0 ? (
              <Table
                rows={
                  <>
                    {clean.map((item) => (
                      <TableRow
                        content={
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.name}
                          </a>
                        }
                      />
                    ))}
                  </>
                }
              />
            ) : (
              <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                Coming soon
              </h3>
            )} */}
          </div>
          <br />
          <br />

          <div id="susreport">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Sustainability
            </h1>
            {sus.length > 0 ? (
              <Table
                rows={
                  <>
                    {sus.map((item) => (
                      <TableRow
                        content={
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.name}
                          </a>
                        }
                      />
                    ))}
                  </>
                }
              />
            ) : (
              <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                Coming soon
              </h3>
            )}
          </div>
          <br />
          <br />

          <div id="waste">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Waste Management
            </h1>
            {waste.length > 0 ? (
              <Table
                rows={
                  <>
                    {waste.map((item) => (
                      <TableRow
                        content={
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.name}
                          </a>
                        }
                      />
                    ))}
                  </>
                }
              />
            ) : (
              <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                Coming soon
              </h3>
            )}
          </div>
          <br />
          <br />
          <div id="water">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Water Management
            </h1>
            {water.length > 0 ? (
              <Table
                rows={
                  <>
                    {water.map((item) => (
                      <TableRow
                        content={
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.name}
                          </a>
                        }
                      />
                    ))}
                  </>
                }
              />
            ) : (
              <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                Coming soon
              </h3>
            )}
          </div>
        </>
      }
    ></Layout>
  );
}
