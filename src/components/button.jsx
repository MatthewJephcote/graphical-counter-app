export const Button = (props) => {
  return (
    <button className={props.styles}
    onClick={props.action}>
    {props.label}
    </button>
  );
}
