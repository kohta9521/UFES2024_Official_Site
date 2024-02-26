import * as z from "zod";

/** Scheme */
const scheme = z.object({
  name: z.string(),
  furigana: z.string(),
  school: z.string(),
  grade: z.string(),
  introduction: z.string(),
  how_to_known: z.string(),
  is_join_group: z.string(),
  group_name: z.string(),
  influencer: z.string(),
  who_is_influencer: z.string(),
});

// const email = z
//   .string()
//   .min(1, { message: "入力必須の項目です" })
//   .email({ message: "emailの形式が間違っているようです" });
// const name = z.string().min(1, { message: "入力必須の項目です" });
// const ruby = z.string().min(1, { message: "入力必須の項目です" });
// const company = z.string().min(1, { message: "入力必須の項目です" });
// const department = z.string().min(1, { message: "入力必須の項目です" });
// const tel = z.string().min(1, { message: "入力必須の項目です" });
// const subject = z.string().min(1, { message: "入力必須の項目です" });
// const message = z.string().min(1, { message: "入力必須の項目です" });
// const privacy = z.string({
//   invalid_type_error: "個人情報の取り扱いに同意するにチェックしてください",
// });

// const contactSchema = z.object({
//   email,
//   name,
//   ruby,
//   company,
//   department,
//   tel,
//   subject,
//   message,
//   privacy,
// });

// React Form Hookで使用する型
export type Contact = z.infer<typeof scheme>;

// Formの送信先
export const FormURL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNA5Vk5o9uXcEOd4w0LcAzxXvSIaCRh_l1oOZtFXEfKS13lg/formResponse";

// UrlEncode用のオブジェクト
export const FormFieldNames: { [key: string]: string } = {
  name: "entry.877086558",
  furigana: "entry.632587184",
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
