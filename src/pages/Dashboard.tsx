import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchScanEvents } from "../store/slices/scanEventsThunks";
import type { IScanEvent } from "../interfaces/IScan";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useWebSocket from "../hooks/useWebSocket";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  //useWebSocket();
  const { events, isLoading } = useAppSelector((state) => state.scanEvents);
  useEffect(() => {
    dispatch(fetchScanEvents());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4"> Scan Events Dashboard</h1>
      {isLoading ? (
        <p>init data ...</p>
      ) : (
        <ul>
          {events.map((event: IScanEvent) => (
            <li key={event.id}>
              {event.type} + {event.status} + {event.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
