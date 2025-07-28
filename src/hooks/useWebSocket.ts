import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { addEvent } from "../store/slices/scanEventsSlice";
import type { IScanEvent } from "../interfaces/IScan";

const useWebSocket = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      try {
        const data: IScanEvent = JSON.parse(event.data);
        console.log("New event from WS:", data);
        dispatch(addEvent(data));
      } catch (err) {
        console.error("WebSocket message error", err);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error", err);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      socket.close();
    };
  }, [dispatch]);
};

export default useWebSocket;
