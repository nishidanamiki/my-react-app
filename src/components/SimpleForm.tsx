import { useForm, type SubmitHandler } from "react-hook-form";

// フォームのデータ型を定義
interface FormInput {
  firstName: string;
  lastName: string;
  age: number;
}

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  // バリデーションが成功した時に実行される関数
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    alert(`Hello, ${data.firstName} ${data.lastName}!`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 1. `register`で入力要素を登録 */}
      {/* 2. バリデーションルールを第2引数に指定 */}
      <div>
        <label>First Name</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        {/* 3. エラーがあればメッセージを表示 */}
        {errors.firstName && (
          <p style={{ color: "red" }}>First name is required.</p>
        )}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors.lastName && (
          <p style={{ color: "red" }}>Last name must be alphabet.</p>
        )}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        {errors.age && (
          <p style={{ color: "red" }}>Age must be between 18 and 99.</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
