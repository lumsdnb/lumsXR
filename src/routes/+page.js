export const load = ({ fetch }) => {
  const fetchImages = async () => {
    const res = await fetch("/api/images");
    const data = await res.json();
    return data;
  };

  return {
    images: fetchImages(),
  };
};
