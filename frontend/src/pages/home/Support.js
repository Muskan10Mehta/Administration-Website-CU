import React from "react";
import Layout from "./Layout";
import Title from "../../common/components/home/title";
import Table from "./../../common/components/table/table";
import TableRow from "./../../common/components/table/row";

import {
  getSpace,
  getMaintain,
  getSanit,
  getHouse,
  getFacilities,
  getInven,
  getPantries,
  getDFF,
  getCommon,
} from "../admin/getPDF";

export default function Support() {
  const [space, setSpace] = React.useState([]);
  const [maintain, setMaintain] = React.useState([]);
  const [sanit, setSanit] = React.useState([]);
  const [house, setHouse] = React.useState([]);
  const [facilities, setFacilities] = React.useState([]);
  const [inven, setInven] = React.useState([]);
  const [pantries, setPantries] = React.useState([]);
  const [dff, setDff] = React.useState([]);
  const [common, setCommon] = React.useState([]);
  React.useEffect(() => {
    getSpace()
      .then((res) => {
        setSpace(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getMaintain()
      .then((res) => {
        setMaintain(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getSanit()
      .then((res) => {
        setSanit(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getHouse()
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getFacilities()
      .then((res) => {
        setFacilities(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getInven()
      .then((res) => {
        setInven(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getPantries()
      .then((res) => {
        setPantries(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getDFF()
      .then((res) => {
        setDff(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    getCommon()
      .then((res) => {
        setCommon(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <Layout
      content={
        <>
          <Title title="Support" />

          <div id="venues">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Common Venues
            </h1>
            {common.length > 0 ? (
              <Table
                rows={
                  <>
                    {common.map((item) => (
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

          <div id="demandff">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Demand for Furniture/Renovation
            </h1>
            {dff.length > 0 ? (
              <Table
                rows={
                  <>
                    {dff.map((item) => (
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

          <div id="facilities">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Facilities
            </h1>
            {facilities.length > 0 ? (
              <Table
                rows={
                  <>
                    {facilities.map((item) => (
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

          <div id="maintenance">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Maintenance - Housekeeping - sanitization
            </h1>
            {/* Maintenance */}
            <h1 className="text-2xl font-bold text-left text-red-600 ml-10 mt-10 border-l border-red-600 pl-5">
              Maintenance
            </h1>
            {maintain.length > 0 ? (
              <Table
                rows={
                  <>
                    {maintain.map((item) => (
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

            {/* Housekeeping */}
            <h1 className="text-2xl font-bold text-left text-red-600 ml-10 mt-10 border-l border-red-600 pl-5">
              Housekeeping
            </h1>
            {house.length > 0 ? (
              <Table
                rows={
                  <>
                    {house.map((item) => (
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

            {/* Sanitization */}
            <h1 className="text-2xl font-bold text-left text-red-600 ml-10 mt-10 border-l border-red-600 pl-5">
              Sanitization
            </h1>
            {sanit.length > 0 ? (
              <Table
                rows={
                  <>
                    {sanit.map((item) => (
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

          <div id="pantries">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Pantries
            </h1>
            {pantries.length > 0 ? (
              <Table
                rows={
                  <>
                    {pantries.map((item) => (
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

          <div id="support">
            <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
              Space Allotment & Inventory
            </h1>

            {/* Space allotment */}
            <h1 className="text-2xl font-bold text-left text-red-600 ml-10 mt-10 border-l border-red-600 pl-5">
              Space Allotment
            </h1>
            {space.length > 0 ? (
              <Table
                rows={
                  <>
                    {space.map((item) => (
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

            {/* Inventory */}
            <h1 className="text-2xl font-bold text-left text-red-600 ml-10 mt-10 border-l border-red-600 pl-5">
              Inventory
            </h1>
            {inven.length > 0 ? (
              <Table
                rows={
                  <>
                    {inven.map((item) => (
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
        </>
      }
    ></Layout>
  );
}
