import colors from "../utils/colors";
import fontTypes from "../utils/fontTypes";
function PhoneBookWrapper({ children }) {
  return (
    <div style={{ padding: "10px" }}>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          fontWeight: "bolder",
          fontFamily: fontTypes.header,
          color: colors.green,
          backgroundColor: colors.orange,
          margin: "0%",
          borderRadius: "16px 16px 0px 0px",
          height: "100px",
          boxShadow: `5px 7px 20px ${colors.black}`,
        }}
      >
        PhoneBook
      </h1>
      <div
        style={{
          display: "flex",
          fontSize: "2rem",
          fontWeight: "bolder",
          fontFamily: fontTypes.main,
          backgroundColor: colors.tale,
          height: "80vh",
          borderRadius: "0px 0px 16px 16px",
          boxShadow: `5px 5px 20px ${colors.black}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PhoneBookWrapper;
