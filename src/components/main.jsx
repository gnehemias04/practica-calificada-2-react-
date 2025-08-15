export default function Main(props) {
  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  w-[90%] gap-4 p-4 ">
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
            <div className="w-full h-full col-span-5 flex flex-col justify-center items-center">
              {/* <img
              className="w-full h-full"
              src="https://i.pinimg.com/originals/1d/69/6f/1d696f941d33a44dad5dd921c9a29215.gif"
              alt=""
            /> */}
              <p>Cargando...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
