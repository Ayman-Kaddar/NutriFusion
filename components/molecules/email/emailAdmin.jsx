import "@/styles/emailStyle.css";
// style={{}} for inline styles on pure css
const EmailAdmin = ({ formData }) => {
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
              <td className="td1">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailAdmin;
