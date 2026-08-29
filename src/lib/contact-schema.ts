import { z } from "zod";
import { contactReasons } from "@/lib/contact-options";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),
  reason: z.enum(contactReasons),
  message: z
    .string()
    .trim()
    .min(20, "Please provide a little more detail.")
    .max(4000, "Message must be 4000 characters or fewer."),
  website: z.string().trim().max(0, "Spam detected.").optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
