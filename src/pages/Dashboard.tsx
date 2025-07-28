import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchScanEvents } from "../store/slices/scanEventsThunks";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useWebSocket from "../hooks/useWebSocket";
import ScanMap from "../components/Dashboard/ScanMap";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  // useWebSocket();
  const { events, isLoading } = useAppSelector((state) => state.scanEvents);
  useEffect(() => {
    dispatch(fetchScanEvents());
  }, [dispatch]);

  return (
    <div>{isLoading ? <p>init data ...</p> : <ScanMap events={events} />}</div>
  );
};

export default Dashboard;
