import * as z from "zod";

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

export function getContactFormSchema(t?: (key: string) => string) {
  return z.object({
    name: z.string().min(2, {
      message: t ? t("required") : "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: t ? t("invalid") : "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
      message: t ? t("min") : "Message must be at least 10 characters.",
    }),
  });
}

export type ContactFormValues = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
