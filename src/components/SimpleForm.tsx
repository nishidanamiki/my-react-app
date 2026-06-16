import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// 入力項目とバリデーションルールをまとめる
const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(20),
  lastName: z.string().regex(/^[A-Za-z]+$/i, "Last name must be alphabet"),
  age: z.coerce.number().min(18, "Age must be between 18 and 99").max(99),
});

// スキーマから型を生成
type FormInput = z.input<typeof FormSchema>;
type FormOutput = z.output<typeof FormSchema>;

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput, unknown, FormOutput>({
    // 3.resolverをuseFormに設定
    resolver: zodResolver(FormSchema),
  });

  // バリデーションが成功した時に実行される関数
  const onSubmit: SubmitHandler<FormOutput> = (data) => {
    console.log(data);
    alert(`Hello, ${data.firstName} ${data.lastName}!`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 1. `register`で入力要素を登録 */}
      {/* 2. バリデーションルールを第2引数に指定 */}
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {/* 3. エラーがあればメッセージを表示 */}
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age")} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
