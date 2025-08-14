export default function Main(props) {
  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[90%] gap-4 p-4 ">
          {props.array.length > 0 ? (
            props.array.map((e) => (
              <div className=" p-1 rounded-sm bg-black/50 relative">
                <img
                  className="h-full w-full object-cover"
                  src={e.urls.regular}
                  alt={e.alt_description}
                />
                <div className="flex flex-col absolute inset-0 justify-center items-center text-black/0 hover:bg-black/50 transition duration-300  hover:text-white p-1">
                  <h2 className="text-xl text-center">Autor</h2>
                  <h3 className="text-xl text-center">{e.user.name}</h3>
                  <p className="text-center">{e.alt_description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </section>
    </>
  );
}
