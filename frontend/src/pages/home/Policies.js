import React from "react";
import Layout from "./Layout";
import Title from "../../common/components/home/title";
import { getPolicies } from "../admin/getPDF";
import Table from "./../../common/components/table/table";
import TableRow from "./../../common/components/table/row";

export default function Policies() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getPolicies()
      .then((res) => {
        setData(res.data);
        
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  if (data.length > 0) {
    return (
      <>
        <Layout
          content={
            <>
              <Title title="Policies and Procedures" />
              <Table
                rows={
                  <>
                    {data.map((item) => (
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
            </>
          }
        ></Layout>
      </>
    );
  } else {
    return (
      <Layout
        content={
          <>
            <Title title="Policies and Procedures" />
            <h3 class="text-xl md:text-3xl mt-10 text-red-600 text-center">
              Coming Soon
            </h3>
          </>
        }
      ></Layout>
    );
  }
}
