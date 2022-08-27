import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef, useState, useEffect } from "react";
import './textEditor.css';

const TextEditor = () => {
  const [editorData, setEditorData] = useState(null);

//   useEffect(() => {
//     focusEditor();
//   }, []);

  const editorRef = useRef(null);

  function focusEditor() {
    editorRef.current.focus();
  }
  
  return (
    <div  className='textEditor'>
              {/* <h2> Welcome to the editor</h2> */}

      <Editor
        onClick={focusEditor}
        ref={editorRef}
        editorState={editorData}
        // onChange={(editorState) => setEditorData(editorState)}
        onEditorStateChange={(editorState) => setEditorData(editorState)}
      />
    </div>
  );
};

export default TextEditor;
