import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassnames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return <div {...rest} className={finalClassnames} >{children}</div>
}

export default Panel;
