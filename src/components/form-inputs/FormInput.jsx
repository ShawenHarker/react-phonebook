import colors from "../../utils/colors";
import fontTypes from "../../utils/fontTypes";

function FormInput({ title, value, type, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px 25px "}}>
      <label
        style={{
          fontSize: "1rem",
          textAlign: 'center',
          color: colors.green,
          fontFamily: fontTypes.main,
        }}
      >
        {title}
      </label>
      <input
      title={title}
      value={value}
      onChange={onChange}
      type={type}
      style={{
        borderRadius: "8px",
        color: colors.green,
        border: `2px solid ${colors.orange}`,
        padding: "10px 20px",
        fontFamily: fontTypes.main
      }}
      />
    </div>
  );
}

export default FormInput;
