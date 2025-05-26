"use client";

import { AssistantModal } from "@/components/assistant-modal";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { ReactNode } from "react";

interface AssistantWrapperProps {
  children: ReactNode;
}

export default function AssistantWrapper({ children }: AssistantWrapperProps) {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
      <AssistantModal />
    </AssistantRuntimeProvider>
  );
}
