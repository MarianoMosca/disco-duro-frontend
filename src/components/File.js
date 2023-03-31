export const File = ({ file }) => {
  return (
    <article className="file">
      <p>{file.name} Habrá que cambiar el nombre en la base de datos</p>
      <p>Estudiar una vista previa del archivo</p>
      <p>
        Propiedad de {file.email} subido el{" "}
        {new Date(file.created.at).toLocaleString()};
      </p>
    </article>
  );
};
