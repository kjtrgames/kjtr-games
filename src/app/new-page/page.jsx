"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [tables, setTables] = useState([]);
  const quillRef = useRef(null);

  // Quill のツールバー設定
  const KJTRCLRS = [
    '#988500', 'chocolate', 'maroon', 'purple', 'navy', 'darkslategray', 'darkgreen',
    '#BA0', '#DE8500', 'crimson', 'mediumorchid', 'mediumblue', 'cadetblue', 'green',
    '#DC0', 'orange', 'red', 'magenta', 'blue', 'cyan', 'lime',
    'khaki', 'navajowhite', 'pink', 'plum', 'lightskyblue', 'paleturquoise', 'lightgreen',
    'black', 'dimgray', 'gray', 'silver', 'lightgray', 'gainsboro', 'white'
  ];

  const toolbarOptions = [
    [{ header: [2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: KJTRCLRS }, { background: KJTRCLRS }],
    ['link', 'image', 'video'],
    [{ script: 'sub' }, { script: 'super' }],
    [{ size: ['small', false, 'large'] }],
    ['formula', 'code-block'],
    ['clean'],
  ];

  // 表の追加
  const addTable = () => {
    setTables([...tables, { id: Date.now(), title: "", rows: 3, cols: 2 }]);
  };

  // HTML出力
  const createHTMLFile = () => {
    const editor = quillRef.current.getEditor();
    const html = editor.root.innerHTML;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = title || "untitled.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article style={{ padding: "1rem" }}>
      <div id="editor_all">
        <div id="editor_main">
          <input
            type="text"
            placeholder="タイトルを入力…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />

          <ReactQuill
            ref={quillRef}
            theme="snow"
            placeholder="本文を入力…"
            modules={{
              toolbar: toolbarOptions,
            }}
            defaultValue={`<p>どうもみなさんこんにちは！&lt;user-name&gt;です！</p>`}
            style={{ height: "300px", marginBottom: "2rem" }}
          />
        </div>

        {/* ダウンロード設定 */}
        <div id="download-settings">
          <h2>ダウンロードページの編集</h2>
          {tables.map((t) => (
            <div key={t.id} style={{ marginBottom: "1rem" }}>
              <input
                type="text"
                placeholder="バージョン名を入力…"
                value={t.title}
                onChange={(e) => {
                  const updated = tables.map((tb) =>
                    tb.id === t.id ? { ...tb, title: e.target.value } : tb
                  );
                  setTables(updated);
                }}
                style={{ width: "100%" }}
              />
              <table border="1" style={{ width: "100%", marginTop: "0.5rem" }}>
                {[...Array(t.rows)].map((_, r) => (
                  <tr key={r}>
                    {[...Array(t.cols)].map((_, c) => (
                      <td key={c}>
                        <input
                          type="text"
                          placeholder={r === 0 ? "ヘッダー" : "URLまたはテキスト"}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          ))}
          <button onClick={addTable}>＋</button>
        </div>
      </div>

      <br />
      <div className="center">
        <button className="l-r" onClick={createHTMLFile}>
          HTML を出力
        </button>
      </div>
    </article>
  );
}
