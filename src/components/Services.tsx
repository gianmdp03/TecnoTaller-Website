import useService from "../hooks/useService";
import type { Service } from "../types/Service";

const Services = () => {
  const { data, error, isLoading } = useService();
  if (error) return <h2>{error.message} :(</h2>;
  if (isLoading) return <h2>Cargando...</h2>;

  const printServices = (
    data: Service[],
    category: "HARDWARE" | "SOFTWARE" | "REMOTE",
  ) => {
    const services = data.filter((d) => d.category === category);
    return services.map((d) => (
      <div
        key={d.id}
        className="card bg-base-100 shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
      >
        <figure className="hover-3d">
          <img
            src={
              d.imageUrl ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{d.name}</h2>
          <p>{d.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Contactar</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6 text-primary">
        Hardware
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {printServices(data, "HARDWARE")}
      </div>

      <h2 className="text-center text-3xl font-bold mb-6 text-primary">
        Software
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {printServices(data, "SOFTWARE")}
      </div>

      <h2 className="text-center text-3xl font-bold mb-6 text-primary">
        Remoto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {printServices(data, "REMOTE")}
      </div>
    </div>
  );
};

export default Services;
