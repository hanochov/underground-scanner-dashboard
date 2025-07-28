import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchScanEvents } from "../store/slices/scanEventsThunks";
import type { IScanEvent } from "../interfaces/IScan";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { events, isLoading } = useAppSelector((state) => state.scanEvents);

  useEffect(() => {
    dispatch(fetchScanEvents());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4"> Scan Events Dashboard</h1>
      {isLoading ? (
        <p>טוען נתונים...</p>
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
