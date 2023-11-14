export async function getProductsData() {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL);
    return data.json();
  } catch (error) {
    return { error: error };
  }
}
