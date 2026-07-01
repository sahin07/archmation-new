"use client";

import ClientLogosSection from "@/components/ClientLogosSection";
import { HOME_CLIENTS_CONTENT } from "@/content/home/clients";

export default function ClientsSection() {
  return <ClientLogosSection content={HOME_CLIENTS_CONTENT} />;
}
