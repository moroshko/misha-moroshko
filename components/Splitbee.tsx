import { useEffect } from "react";

// Types source: https://github.com/splitbee/splitbee-js/blob/master/splitbee-web/src/types.ts
type Data = { [key: string]: string | number | boolean };

export type SplitbeeOptions = {
  disableCookie?: boolean;
  token?: string;
  apiUrl?: string;
  scriptUrl?: string;
};

export type Splitbee = {
  track: (event: string, data?: Data) => Promise<void>;
  user: {
    set: (data: Data) => Promise<void>;
  };
  init: (config?: SplitbeeOptions) => void;
  enableCookie: () => void;
};

declare global {
  interface Window {
    splitbee: Splitbee;
  }
}

export type QueueData = {
  type: "user" | "event" | "enableCookie";
  payload: any;
};

const SPLITBEE_SCRIPT_ID = "moroshko-splitbee";

function isSplitbeeEnabled() {
  return window.location.host === "www.moroshko.me";
}

export function trackEvent(eventName: string) {
  if (isSplitbeeEnabled()) {
    window.splitbee.track(eventName);
  }
}

export default function Splitbee() {
  useEffect(() => {
    if (!isSplitbeeEnabled()) {
      return;
    }

    const script = document.createElement("script");

    script.id = SPLITBEE_SCRIPT_ID;
    script.async = true;
    script.src = "https://cdn.splitbee.io/sb.js";

    document.body.appendChild(script);

    return () => {
      const script = document.getElementById(SPLITBEE_SCRIPT_ID);

      if (script !== null) {
        script.remove();
      }
    };
  }, []);

  return null;
}
