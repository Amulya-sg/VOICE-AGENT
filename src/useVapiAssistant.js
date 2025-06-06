import { useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";

export function useVapiAssistant(publicKey, assistantId) {
  const vapiRef = useRef(null);

  useEffect(() => {
    if (!publicKey || !assistantId) return;

    vapiRef.current = new Vapi(publicKey);

    vapiRef.current.on("call-start", () => console.log("Call started"));
    vapiRef.current.on("call-end", () => console.log("Call ended"));
    vapiRef.current.on("message", (msg) => {
      if (msg.type === "transcript") {
        console.log(`${msg.role}: ${msg.transcript}`);
      }
    });

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
        vapiRef.current = null;
      }
    };
  }, [publicKey, assistantId]);

  const startCall = () => {
    if (vapiRef.current) {
      vapiRef.current.start(assistantId);
    }
  };

  const stopCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  return { startCall, stopCall };
}
