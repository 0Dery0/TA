import { NavLink } from "react-router-dom";
import "../../assets/styles/Button.css";

const ItemPelanggan = ({ data, index }) => {
  return (
    <tr
      style={
        index % 2 == 0
          ? { backgroundColor: "#ececee" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-3 text-center">{data.name}</td>
      <td className="col-3">{data.email}</td>
      <td className="col-2">{data.points}</td>
      <td className="col-1">
        <NavLink to ={`/kelolaPengguna/pelanggan/detailpengguna/${data.id}`}
        key={data.id}
        className="bi bi-file-earmark-text file-button"></NavLink>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemPelanggan;