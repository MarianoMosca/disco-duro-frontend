export const getAllFilesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.file;
};

export const deleteFileService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/files/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
