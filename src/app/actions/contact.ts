"use server";

import { prisma } from "@/lib/db";

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
  };
}

export async function submitContactForm(
  name: string,
  email: string,
  message: string
): Promise<ContactResponse> {
  // Simple validations
  if (!name || name.trim() === "") {
    return { success: false, message: "TRANSMISSION_ERROR: Name parameter is required." };
  }

  if (!email || !email.includes("@")) {
    return { success: false, message: "TRANSMISSION_ERROR: Invalid destination channel (email address)." };
  }

  if (!message || message.trim() === "") {
    return { success: false, message: "TRANSMISSION_ERROR: Data body cannot be null." };
  }

  try {
    const newMessage = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      },
    });

    return {
      success: true,
      message: "COMMS_SECURED: Message successfully encrypted and written to core database.",
      data: {
        id: newMessage.id,
        name: newMessage.name,
        email: newMessage.email,
        createdAt: newMessage.createdAt,
      },
    };
  } catch (error: any) {
    console.error("SERVER ACTION DB WRITE FAILURE:", error);
    return {
      success: false,
      message: `SYSTEM_ERROR: Database handshake failed. Detail: ${error?.message || "Unknown error"}`,
    };
  }
}
