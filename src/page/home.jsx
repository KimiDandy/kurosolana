import { MyFooter } from "../components/footer/footermodels";
import { SectionModel1 } from "../components/section/models1";
import { SectionModel2 } from "../components/section/models2";
import { SectionModel3 } from "../components/section/models3";
import { SectionModel5 } from "../components/section/section5";

export function HomePage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('cat/chibi3.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <SectionModel1 />
        <SectionModel5 />
        <SectionModel2 />
        <SectionModel3 />
        <MyFooter />
      </div>
    </div>
  );
}
