import {
  decrement,
  increment,
  incrementByNumber,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-between gap-4 border rounded-lg border-b-orange-600  p-10">
        <button
          onClick={() => dispatch(incrementByNumber(5))}
          className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white"
        >
          IncrementByNumber
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h2 className="text-3xl font-bold">{count}</h2>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
