import { z } from "zod";

export const loginInputValidator = z.object({
  name: z.string(),
});
