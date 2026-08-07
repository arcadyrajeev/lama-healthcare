"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
      });
    })();
  }, []);

  return (
    <Cal
      calLink="yourusername/discovery-call"
      style={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
      }}
    />
  );
}
