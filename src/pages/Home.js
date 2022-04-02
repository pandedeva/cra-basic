import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Halo Selamat Datang Di Website ku</h1>
      <p className="section-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iusto asperiores facilis accusantium delectus alias repudiandae perferendis pariatur fugiat tempora laudantium quod sint, maiores, quasi, eaque harum magni corrupti
        tenetur.
      </p>
    </section>
  );
}
