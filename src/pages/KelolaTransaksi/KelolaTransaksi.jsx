import React, { useState } from "react";
import NavbarTop from "../../components/NavbarTop";
import NewSidebar from "../../components/sidebar/NewSidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Button} from "react-bootstrap";
import { TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import Pagination from "../../components/Pagination";
import CardTopTransaksi from "./CardTopTransaksi";
import ItemRiwayatTransaksi from "./ItemRiwayatTransaksi";
import AddTransaksi from "./AddTransaksi";

const KelolaTransaksi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [posts, setPosts] = useState([
    {
      nama: "diaken",
      email: "d@wow",
      role: "admin",
      poin: "1000",
    },
    {
      nama: "dery",
      email: "der@wow",
      role: "admin",
      poin: "2000",
    },
    {
      nama: "dik",
      email: "dik@wow",
      role: "admin",
      poin: "3000",
    },
  ]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //   };

  //   fetchPosts();
  // }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="mt-4 ps-3 pe-3 w-100">
          <p className="mb-4 mt-1 pt-3" style={{ fontSize: '22px', color: '#' }}>Riwayat Transaksi</p>
          <div>
            <CardTopTransaksi />
          </div>

          <Box>
            <Typography>
              <div className="w-100">
              {isOpen && <AddTransaksi handleClose={togglePopUp} />}
                <div className="d-flex flex-row justify-content-between mb-3 mt-3">
                  <Button variant="success" onClick={togglePopUp}>
                    <AiOutlinePlusSquare
                      style={{
                        width: "20px",
                        height: "25px",
                        paddingBottom: "3px",
                        marginRight: "10px",
                      }}
                    />
                    Tambah Transaksi
                  </Button>
                  <div className="d-flex flex-row gap-2">
                    <div className="">
                      <TextField
                        id="search"
                        variant="outlined"
                        label={
                          <p style={{ fontSize: "13px", fontWeight: "540" }}>
                            <BiSearch
                              style={{ height: "20px", width: "20px" }}
                            />
                            Cari
                          </p>
                        }
                        size="small"
                      />
                    </div>
                    
                  </div>
                </div>
                <table
                  class="table table-borderless "
                  
                >
                  <thead style={{
                    border: "1px solid"
                  }}>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#D8DADC", color: "#013B75", }}
                    >
                      <th className="text-start">tanggal</th>
                        <th>Nama</th>
                        <th>Tipe</th>
                        <th>Metode</th>
                        <th>Produk</th>
                        <th>Nilai(Rp)</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-center" style={{ color: "#013B75" }}>
                    {currentPosts.map((item, index) => (
                      <ItemRiwayatTransaksi data={item} index={index}></ItemRiwayatTransaksi>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
                {/* <div className="">
                    <Button href="/kelolaPengguna/detaileditpengguna/user">
                      Detail User Tes
                    </Button>
                    User
                  </div> */}
              </div>
            </Typography>
          </Box>
        </div>
      </div>

    </div>
  );
};

export default KelolaTransaksi;
