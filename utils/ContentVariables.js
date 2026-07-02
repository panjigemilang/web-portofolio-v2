// Structural portfolio data: years, dates, categories, images, and links.
// Ordered latest → oldest, both across year groups and within each year.
// All display text (titles, descriptions, functions, technologies, captions)
// lives in translations/portfolio/{en,id,ja}.js, keyed by each item's `key`.
// Each image's `captionKey` points into that project's `imageCaptions`.
(function () {
  var IMG = "./img/";

  function monthsSince(iso) {
    var s = new Date(iso), n = new Date();
    return (n.getFullYear() - s.getFullYear()) * 12 + (n.getMonth() - s.getMonth());
  }

  window.PORTFOLIO_DATA = [
    {
      year: "2026",
      items: [
        {
          key: "haikalManagement",
          cat: "Business Management System",
          date: "Jan 2026",
          link: "https://haikal-management.vercel.app",
          images: [
            { src: IMG + "haikal-ss1.png", captionKey: "src" },
            { src: IMG + "haikal-ss2.png", captionKey: "src2" },
            { src: IMG + "haikal-ss3.png", captionKey: "src3" },
          ],
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          key: "opsileave",
          cat: "Internal Company System",
          date: "Dec 2025",
          link: "https://opsileave.vercel.app",
          images: [
            { src: IMG + "opsileave-ss1.png", captionKey: "src" },
            { src: IMG + "opsileave-ss2.png", captionKey: "src2" },
            { src: IMG + "opsileave-ss3.png", captionKey: "src3" },
          ],
        },
        {
          key: "kaneKashite",
          cat: "Personal SaaS",
          date: "Dec 2025",
          link: "https://okane-kashite.vercel.app",
          images: [
            { src: IMG + "okane-ss1.png", captionKey: "src" },
            { src: IMG + "okane-ss2.png", captionKey: "src2" },
            { src: IMG + "okane-ss3.png", captionKey: "src3" },
          ],
        },
      ],
    },
    {
      year: "2021 — NOW",
      items: [
        {
          key: "opsigo",
          cat: "Full-time Employment",
          date: "Feb 2021 - Current . " + monthsSince("2021-02-01") + " Mos",
          link: null,
          images: [
            { src: IMG + "fotbar-opsigo.jpg", captionKey: "team" },
            { src: IMG + "dev-opsicorp.png", captionKey: "system" },
          ],
        },
      ],
    },
    {
      year: "2020",
      items: [
        {
          key: "iniDiaLo",
          cat: "Personal Project",
          date: "Dec 2020 . 1 Mo",
          link: null,
          images: [{ src: IMG + "Blog kita-cropped.jpg" }, { src: IMG + "blog.jpg" }],
        },
        {
          key: "bolehDicobaDigital",
          cat: "Company CMS",
          date: "Sep - Dec 2020 . 3 Mos",
          link: "https://bolehdicoba.com",
          images: [
            { src: IMG + "bdd.jpg" },
            { src: IMG + "bdd-dashboard.jpg", captionKey: "dashboard" },
            { src: IMG + "bdd-form.jpg", captionKey: "form" },
          ],
        },
        {
          key: "bloomBrowser",
          cat: "US Client Project",
          date: "May - Jul 2020 . 2 Mos",
          link: "https://bloombrowser.com/",
          images: [{ src: IMG + "Bloombrowser.png" }],
        },
        {
          key: "fkhapps",
          cat: "University Project",
          date: "Feb - May 2020 . 3 Mos",
          link: null,
          images: [
            { src: IMG + "fkhapps.png" },
            { src: IMG + "login_page.jpg", captionKey: "login" },
            { src: IMG + "dashboard.jpg", captionKey: "dashboard" },
          ],
        },
        {
          key: "hoping",
          cat: "International Internship",
          date: "Feb - Mar 2020 . 5 Weeks",
          link: null,
          images: [
            { src: IMG + "hoping.jpg", captionKey: "friends" },
            { src: IMG + "Bandara Kansai.jpeg", captionKey: "arrived" },
            { src: IMG + "company.jpg", captionKey: "company" },
            { src: IMG + "Osaka castle.jpeg", captionKey: "osakaCastle" },
            { src: IMG + "jembatan.jpeg", captionKey: "kyoto" },
            { src: IMG + "balik.JPG", captionKey: "goingBack" },
          ],
        },
      ],
    },
    {
      year: "2019",
      items: [
        {
          key: "kampungDesa",
          cat: "Client Project",
          date: "Aug - Oct 2019 . 2 Mos",
          link: "http://kampungcerdasbersahaja.com/",
          images: [{ src: IMG + "kampung desa.png" }],
        },
        {
          key: "ptpnx",
          cat: "Internship",
          date: "Jul - Aug 2019 . 2 Mos",
          link: "https://ptpnxdjoembang.herokuapp.com/",
          images: [{ src: IMG + "Ptpnx.png" }, { src: IMG + "Presentation.jpg" }],
        },
        {
          key: "devkami",
          cat: "Personal Project",
          date: "Mar - May 2019 . 2 Mos",
          link: "https://devkami.herokuapp.com/",
          images: [{ src: IMG + "Dev Kami.png" }],
        },
      ],
    },
  ];
})();
