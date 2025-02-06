const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1]">
      {/* Fondo para el tema claro */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/light.webp')] dark:hidden" />
      {/* Fondo para el tema oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/dark.webp')] hidden dark:block" />
    </div>
  );
};

export default Background;
