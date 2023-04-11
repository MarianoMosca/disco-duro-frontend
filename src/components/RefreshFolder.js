export const RefreshFolder = () => {
  const handleRefresh = () => {
    window.location.reload(); // Recarga la página
  };
  return (
    <button onClick={handleRefresh}>Actualizar la lista de carpetas</button>
  );
};
