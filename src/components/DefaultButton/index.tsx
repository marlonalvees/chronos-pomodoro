import styles from "./styles.module.css";

type DefaultButton = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultButton({ id, type, labelText, ...rest }: DefaultButton) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
