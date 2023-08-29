interface FormGroupProps {
  /**
   * This is a number value as a string.
   */
  value: string;
}

/**
 * Child Component:
 * Reason: Because `FormGroup` is called inside `Form`.
 */
function FormGroup(props: FormGroupProps) {
  const { value } = props;

  return (
    <div className='form-group'>
      <label htmlFor={value}>{value}</label>
      <input type='text' name={value} id={value} />
    </div>
  );
}

/**
 * Parent Component:
 * Reason: Because `FormGroup` is called inside `Form`.
 */
function Form() {
  return (
    <form>
      <FormGroup value='1' />

      <FormGroup value='2' />

      <FormGroup value='3' />
    </form>
  );
}

<Form />;
