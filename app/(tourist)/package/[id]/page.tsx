export default async function TouristPackageDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Package Details: {id}</h1>
    </main>
  );
}
