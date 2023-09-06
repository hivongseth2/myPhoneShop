import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import "../styles/IntroItem.scss";
import "react-quill/dist/quill.snow.css";
import { Parser } from "html-to-react"; // Import thư viện html-to-react

const IntroItem = () => {
  const [value, setValue] = useState("");
  const [v, setV] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setValue(localStorage.getItem("content"));
  }, []);

  const renderHTML = (html) => {
    const htmlToReactParser = new Parser();
    return htmlToReactParser.parse(html);
  };

  const openEdit = () => {
    setStatus(true);
  };

  const modules = {
    clipboard: {
      matchVisual: false,
    },
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  const SaveContent = () => {
    localStorage.setItem("content", value);
    setStatus(false);
  };
  return (
    <div className="container-fluid shadow-none p-3 mb-5 bg-light rounded">
      <button className="btn btn-primary" onClick={() => openEdit()}>
        Sửa nội dung
      </button>

      <div
        className="row d-flex"
        // style={{ height: "800px" }}
      >
        {status ? ( // Nếu status là true, hiển thị trình soạn thảo
          <div className="col-8 editor text-center shadow-sm p-3 mb-5 bg-white rounded   ">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="editorInput"
              modules={modules}
              preserveWhitespace={true}
            />
            <button className="btn btn-primary" onClick={() => SaveContent()}>
              Lưu
            </button>
          </div>
        ) : (
          // Nếu status là false, hiển thị trước
          <div
            className="col-8 preview shadow-sm p-3 mb-5 bg-white rounded "
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
        )}
        <div className="col-4 shadow-sm p-3 mb-5 bg-white rounded">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Thông số kĩ thuật</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }, (_, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default IntroItem;
