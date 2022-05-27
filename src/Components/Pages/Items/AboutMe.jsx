import React from "react"
import moment from "moment"

export default function AboutMe() {
  const [headerActive, setHeaderActive] = React.useState(null)
  const [showCaption, setShowCaption] = React.useState([
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
    {
      show: false,
    },
  ])
  const years = new moment().diff(moment("2021-02-08"), "years")
  const months = new moment().diff(moment("2021-02-08"), "months") % 12
  const toggleCaption = (idx) => {
    let temp = [...showCaption]

    temp[idx].show = !temp[idx].show
    setHeaderActive(idx)
    setShowCaption(temp)
  }

  React.useEffect(() => {
    const active = showCaption.filter((caption) => caption.show === true)

    if (active.length < 1) setHeaderActive(null)
  }, [showCaption])

  return (
    <div className="about-me text-content">
      <p>
        &emsp;Di sini saya akan sekilas menceritakan tentang diri saya dalam
        bentuk pertanyaan dan jawaban.
      </p>
      <div className="content">
        <ul onClick={() => toggleCaption(0)}>
          <li className="title">
            <h3 className={headerActive === 0 && "active"}>
              <strong>Saya orangnya seperti apa? Jujur!</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[0].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Kalo saya yang tentukan sendiri kayaknya kurang meyakinkan,
            jadi saya akan sebutkan apa saja yang biasa orang katakan ke saya :
          </p>
          <ol>
            <li>&ensp;Berlogika</li>
            <li>&ensp;Suka bercanda</li>
            <li>&ensp;Senyum terus</li>
            <li>&ensp;Gak bisa marah</li>
            <li>&ensp;Gak bisa bohong</li>
            <li>&ensp;Kurang inisiatif/cuek</li>
            <li>&ensp;Harus disuruh dulu baru mengerjakan</li>
            <li>&ensp;Kalo ngomong suaranya keras</li>
            <li>&ensp;Gak merokok atau vape</li>
            <li>&ensp;Gak suka makan jeroan dan cumi</li>
          </ol>
          <p>
            &emsp;Kira-kira itu yang biasa saya dengar tentang saya dari ayah,
            ibu, saudara, teman, dan sahabat saya. Jika ingin tau langsung dari
            wali saya (ibu) silahkan hubungi nomor berikut:
            <a
              href="https://wa.me/6289617393777?text="
              rel="noopener noreferrer"
            >
              +62 896-1739-3777
            </a>
          </p>
        </div>
        <ul onClick={() => toggleCaption(1)}>
          <li className="title">
            <h3 className={headerActive === 1 && "active"}>
              <strong>Bagaimana pekerjaan saya?</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[1].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Saat ini saya bekerja sebagai programmer di sebuah perusahaan
            bergerak di bidang travel, Opsigo. Saya sudah bekerja selama {years}{" "}
            tahun{months > 0 && ` dan ${months} bulan`}. Saya setiap hari
            bekerja di rumah (WFE). Alhamdulillah jam kerja saya sangat
            fleksibel dan saya sering menyelesaikan tugas saya lebih cepat dari
            waktu yang ditentukan sehingga saya memiliki banyak waktu luang.
            Saya suka memanfaatkan waktu luang saya hehe! 👍👍
          </p>
        </div>
        <ul onClick={() => toggleCaption(2)}>
          <li className="title">
            <h3 className={headerActive === 2 && "active"}>
              <strong>Apa yang biasa saya lakukan pada waktu weekend?</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[2].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Saya suka jalan-jalan, ngajak sodara saya makan di luar atau
            kadang sepedaan sore-sore sendiri, eksplor tentang pemrograman,
            nonton video youtube, chatting/telponan dengan sodara, sama
            disuruh-suruh.
          </p>
          <p>
            &emsp;Dulu waktu kuliah saya tiap abis maghrib sampai isya sering
            datang ke kajian agama, sabtu dan ahad biasanya ikut kajian rutin.
            Tapi sejak saya lulus kuliah dan ayah saya telah meninggal sekarang
            saya lebih sering menemani ibu saya karena ibu saya orangnya gak
            tenang, selalu berpikir berlebihan, semuanya dipikirin. Ibu saya
            sering bertentangan dengan saya soal agama jadi sekarang saya hanya
            sering mendengar kajian lewat youtube.
          </p>
        </div>
        <ul onClick={() => toggleCaption(3)}>
          <li className="title">
            <h3 className={headerActive === 3 && "active"}>
              <strong>Apa yang membuat saya menerima manhaj salaf?</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[3].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Dulu sejak SMA saya gak terlalu berpikir soal agama, sampai
            kelas 3 SMA saya mulai coba membiasakan shalat berjamaah di masjid.
            Lalu ketika kuliah saat saya sedang bengong di jendela kelas sambil
            menunggu dosen tiba-tiba teman saya yang mualaf menghampiri dan
            berkata{" "}
            <pre>
              “hidup tuh sebentar ya ji. Di dunia mungkin 1000 tahun setara
              berapa menit doang di akhirat”.
            </pre>
            Sejak saat itu saya mulai menghadiri dan mendengar berbagai kajian
            agama.
          </p>
          <p>
            &emsp;Qadarullah setelah saya menghadiri berbagai macam kajian saya
            paling menerima kajian salaf karena kajian salaf selalu didasari
            kitab dan pemahaman orang shaleh terdahulu. Ustad salaf gak pernah
            mengutarakan pemikiran pribadinya tetapi hanya menyampaikan apa yang
            ada dalam dalil dan bagaimana pemahaman para orang shaleh terdahulu.
            Dari situ saya mulai belajar bahwa segala sesuatu harus ada dalilnya
            dan dalil itu kembali pada Al qur'an dan sunah sesuai pemahaman para
            sahabat.
          </p>
        </div>
        <ul onClick={() => toggleCaption(4)}>
          <li className="title">
            <h3 className={headerActive === 4 && "active"}>
              <strong>Kenapa anda harus memilih saya?</strong>
              &ensp;<i class="fa-solid fa-caret-right"></i>
            </h3>
          </li>
        </ul>
        <div
          className={`content-container ${
            showCaption[4].show ? "show" : "hide"
          }`}
        >
          <p>
            &emsp;Saya orangnya tidak mudah terbawa emosi dan mau mendengarkan,
            saya orangnya fleksibel dan mau berubah menjadi lebih baik. Saya
            saat ini “mengaku” bermanhaj salaf tetapi mungkin banyak perbuatan
            saya belum sesuai salaf, oleh karena itu harapan saya kedepannya
            yaitu saya memiliki <i>partner </i>
            hidup yang memiliki visi misi yang sama, bersama kita berlomba-lomba
            dan saling mengingatkan dalam kebaikan, saling <i>support </i>
            satu sama lain untuk dunia dan akhirat kita. Mari berkomunikasi
            dengan saya!
          </p>
          <h3 className="text-center">
            Akankah <span className="love">KAMU </span>
            menjadi pelengkap dari kisah hidup <span className="me">KU</span>
            ?
            <br />
            <span className="love">❤❤❤</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
