export const GET = async ({ request, url }) => {
  const id = Number(url.searchParams.get("id") ?? "1");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?id=${id}`
  );
  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
};
