import React from "react";
import { getAchievement } from "../admin/getPDF";

export default function Layout(props) {
  const [achievement, setAchievement] = React.useState([]);

  React.useEffect(() => {
    getAchievement()
      .then((res) => {
        setAchievement(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <div id="latest" class="flex h-full">
        <div class="flex-1 flex flex-col overflow-hidden">
          <div class="xl:flex h-full">
            <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14 scrollbar-hide">
              <div class="flex w-full h-full mx-auto px-6 py-8 scrollbar-hide">
                <div class="flex flex-col w-full h-full text-gray-900 text-xl scrollbar-hide">
                  {props.content}
                </div>
              </div>
            </main>

            <nav class="sticky h-auto xl:w-96  bg-red-600 sm:w-0 xs:w-0 invisible xl:visible">
              {achievement.length > 0 ? (
                <ul className="list-style-none">
                  {achievement.map((item) => (
                    <li>
                      <img
                        className="w-3/4 h-3/4  mx-auto mb-4 mt-4"
                        src={item.url}
                        alt="certificate"
                      ></img>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                  Coming soon
                </h3>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
