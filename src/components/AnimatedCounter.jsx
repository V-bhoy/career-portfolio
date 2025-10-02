import CountUp from "react-countup";
import { counterItems } from "../constants";

export function AnimatedCounter() {
    return (
      <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-4-cols">
          {counterItems.map((item) => (
            <div
              key={item.label}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-cenetr"
            >
              <div className="counter-number text-white text-4xl font-bold mb-2 text-shadow-xl">
                    <CountUp suffix={item.suffix} end={item.value}/>
              </div>
              <div className="text-white-50 text-lg">{item.label}</div>
              <p className="text-white-50 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
}