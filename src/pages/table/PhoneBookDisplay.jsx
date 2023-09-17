import colors from "../../utils/colors";
import fontTypes from "../../utils/fontTypes";

function PhoneBookDisplay({ contacts }) {
  const header = ["First Name", "Last Name", "Phone Number"];
  const tableDataStyle = {
    textAlign: "center",
    fontFamily: fontTypes.main,
    fontSize: "14px",
    backgroundColor: colors.tale
  };
  const sortContactList = contacts.sort((a, b) => {
    const nameA = a.firstName.toUpperCase();
    const nameB = b.firstName.toUpperCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: colors.white,
        borderRadius: "0px 16px 16px 0px",
        padding: "0px 15px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: colors.green,
          fontFamily: fontTypes.main,
        }}
      >
        Contact List
      </h3>
      <table>
        <thead>
          <tr>
            {header.map((item) => (
              <th
                key={item}
                style={{
                  textAlign: "center",
                  fontFamily: fontTypes.main,
                  fontSize: "24px",
                  backgroundColor: colors.green,
                  color: colors.white
                }}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortContactList.map((contact, index) => (
            <tr key={index}>
              <td style={tableDataStyle}>{contact.firstName}</td>
              <td style={tableDataStyle}>{contact.lastName}</td>
              <td style={tableDataStyle}>{contact.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PhoneBookDisplay;
