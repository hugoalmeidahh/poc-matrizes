import { json } from "stream/consumers";
import { MapJson } from "./data";

export default function Home() {
  /// 0. [] = base-map
  /// 1. [] = blocks-globals
  /// 2. [] = area-blocks
  /// 3. [] = space-area
  const map = MapJson;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="container-matriz">
          {map.map((blocks, keyBlock) => (
            <div key={keyBlock} className="blocks-globals">
              {blocks.map((area, keyArea) => (
                <div key={keyArea} className="area-blocks">
                  {area.map((space, keySpace) => (
                    <div key={keySpace} className="space-area">
                      {space.map((item, keyItem) => (
                        <div key={keyItem} className="item-space">
                          {item.type === "F" ? (
                            <span className="florest">{item.type}</span>
                          ) : item.type === "B" ? (
                            <span className="barbarian">{item.type}</span>
                          ) : (
                            <span className="village">{item.type}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
