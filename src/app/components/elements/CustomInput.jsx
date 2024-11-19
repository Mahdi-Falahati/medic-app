import { IoWarningOutline } from "react-icons/io5";

export default function CustomInput({
  title,
  register,
  placeholder,
  type = "text",
  error = "",
  required = false,
  pattern,
  name,
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text text-xl">{title}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered input-md w-full max-w-xs"
        {...register(name, { required: required })}
      />
      {error && (
        <div className="label justify-end">
          <span className="label-text-alt text-red-600 flex items-center">
            <IoWarningOutline className="ml-1 text-yellow-600" />
            {error}
          </span>
        </div>
      )}
    </label>
  );
}
