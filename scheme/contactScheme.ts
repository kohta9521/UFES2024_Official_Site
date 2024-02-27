import * as z from "zod";

/** Scheme */
const scheme = z.object({
  name: z.string().min(1, { message: "必須項目です" }),
  furigana: z.string().min(1, { message: "必須項目です" }),
  email: z
    .string()
    .email({ message: "emailが間違っています" })
    .min(1, { message: "必須項目です" }),
  school: z.string().min(1, { message: "必須項目です" }),
  grade: z.string({ invalid_type_error: "必須項目です" }),
  introduction: z
    .string()
    .min(1, { message: "必須項目です" })
    .refine((data) => data !== "選択してください", { message: "必須項目です" }),
  how_to_known: z.string(),
  is_join_group: z.string({ invalid_type_error: "必須項目です" }),
  group_name: z.string(),
  influencer: z.string({ invalid_type_error: "必須項目です" }),
  who_is_influencer: z.string(),
});

// React Form Hookで使用する型
export type Contact = z.infer<typeof scheme>;

// Formの送信先
export const FormURL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNA5Vk5o9uXcEOd4w0LcAzxXvSIaCRh_l1oOZtFXEfKS13lg/formResponse";

// UrlEncode用のオブジェクト
// TODO 名前相談
export const FormFieldNames: { [key: string]: string } = {
  name: "entry.877086558",
  furigana: "entry.632587184",
  email: "entry.418420924",
  school: "entry.121148839",
  grade: "entry.962801128",
  introduction: "entry.2606285",
  how_to_known: "entry.1424661284",
  is_join_group: "entry.1514863503",
  group_name: "entry.1087246575",
  influencer: "entry.998256793",
  who_is_influencer: "entry.2023563047",
};

export default scheme;
