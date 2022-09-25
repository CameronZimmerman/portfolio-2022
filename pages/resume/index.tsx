import type { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <div>
      <object
        data="./resume.pdf"
        type="application/pdf"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      >
        <p>
          Cameron Zimmerman Resume <a href="./resume.pdf" />
        </p>
      </object>
    </div>
  );
};

export default Resume;
