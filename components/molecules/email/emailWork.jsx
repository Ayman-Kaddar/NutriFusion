import "@/styles/emailStyle.css";
// style={{}} for inline styles on pure css
const EmailWork = ({ formData }) => {
  console.log("formData email work", formData);
  return (
    <div className="table-container">
      <p className="table-title">Detalles del Contacto: </p>
      <table className="table1">
        <tbody>
          {Object.entries(formData)?.map(([key, value]) => (
            <tr key={key}>
              <td className="td1">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </td>
              <td className="td1">
                {key === "Curriculum" ? (
                  <a href={value}>Link para el curriculum</a>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailWork;
