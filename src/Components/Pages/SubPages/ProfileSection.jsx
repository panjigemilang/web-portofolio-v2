import React from "react"
import RenderSmoothImage from "render-smooth-image-react"
import moment from "moment"
import PP from "../../../Assets/img/About.jpeg"
import useCurrentWidth from "../../Utils/GetWidth"

export default function ProfileSection() {
  const width = useCurrentWidth()
  const profileStyle = {
    borderRadius: "20px",
    height: "395px",
    margin: "0 16px 0 auto",
    objectFit: "cover",
    width: "345px",
  }
  const ages = new moment().diff(moment("1998-12-03"), "years")

  return (
    <section className="s1">
      <header>
        <h3 className="m-0">
          <i>Assalamu'alaikum warahmatullah</i>
        </h3>
      </header>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div
            className={`profile-container ${width < 768 && "mobile"}`}
            style={profileStyle}
          >
            <RenderSmoothImage src={PP} alt="profile.jpg" objectFit="cover" />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h1 className="title">Panji Gemilang</h1>
          <table>
            <tbody>
              <tr>
                <th>Panggilan</th>
                <td>:</td>
                <td>Panji</td>
              </tr>
              <tr>
                <th>TTL</th>
                <td>:</td>
                <td>Malang, 03 Desember 1998</td>
              </tr>
              <tr>
                <th>Umur</th>
                <td>:</td>
                <td>{ages}</td>
              </tr>
              <tr>
                <th>Tinggi Badan</th>
                <td>:</td>
                <td>172 cm</td>
              </tr>
              <tr>
                <th>Berat Badan</th>
                <td>:</td>
                <td>59,6 kg (per 1, Agustus 2022)</td>
              </tr>
              <tr>
                <th>Riwayat Penyakit</th>
                <td>:</td>
                <td>Tidak ada</td>
              </tr>
              <tr>
                <th>Manhaj</th>
                <td>:</td>
                <td>Salaf</td>
              </tr>
              <tr>
                <th>Suku</th>
                <td>:</td>
                <td>Ayah (Jawa) - Ibu (Minang)</td>
              </tr>
              <tr>
                <th>Anak ke</th>
                <td>:</td>
                <td>Ke-3 dari 3 bersaudara</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>:</td>
                <td>Belum pernah menikah</td>
              </tr>
              <tr>
                <th>Pekerjaan</th>
                <td>:</td>
                <td>Pegawai swasta | Programmer</td>
              </tr>
              <tr>
                <th>Alamat Rumah</th>
                <td>:</td>
                <td>
                  Cluster Cesaragaza No.2 RT/RW 001/003 <br />
                  Kel. Cisaranten Kulon, Kec. Arcamanik <br />
                  Bandung, Jawa Barat <br />
                  40293
                </td>
              </tr>
              <tr>
                <th>No. HP/Whatsapp</th>
                <td>:</td>
                <td>0895801111085</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>:</td>
                <td>panjigemilang31298@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
