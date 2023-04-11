export const Refresh = () => {
  const handleRefresh = () => {
    window.location.reload(); // Recarga la página
  };
  return (
    <button onClick={handleRefresh}>Actualizar la lista de ficheros</button>
  );
};
