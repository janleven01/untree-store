import { FormProps } from "@/types";

const Form = ({
  label,
  type,
  id,
  name,
  placeholder,
  contactForm,
  isContact,
  minLength,
  maxLength,
  min,
  max,
  noLabel,
  isRequired,
}: FormProps) => {
  const formStyles =
    "px-3 py-2.5 border border-black outline-none focus:border-purple placeholder:text-sm";

  return (
    <div className="flex flex-col gap-2">
      {noLabel ? (
        <input
          type={type}
          id={id}
          name={name}
          aria-label={label}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          placeholder={placeholder}
          className={isContact ? contactForm : formStyles}
          required
          autoComplete="off"
        />
      ) : (
        <>
          <label
            htmlFor={id}
            className={`
          ${isRequired ? "required" : 'text-base' }
        `}
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            aria-label={label}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            placeholder={placeholder}
            className={formStyles}
            required
            autoComplete="off"
          />
        </>
      )}
    </div>
  );
};

export default Form;
