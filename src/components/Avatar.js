import { useEffect, useRef, useState } from "react";

export const Avatar = () => {
  const referencia = useRef();
  const uploadFiles = () => {
    referencia.current.click();
  };
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  return (
    <div className="img">
      <header className="header">
        <input
          type="file"
          // name="image"
          // id="image"
          accept="image/*"
          ref={referencia}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        {image ? (
          <img
            src={preview}
            alt="imagen"
            onClick={uploadFiles}
            style={{ width: "1", height: "1" }}
          />
        ) : null}
      </header>
    </div>
  );
};
