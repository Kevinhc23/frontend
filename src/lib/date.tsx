export const DateNow = () => {
  const now = new Date();

  const fecha = (): React.ReactNode => {
    return now.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <>
      <p className="text-xl dark:text-white mr-8">{fecha()}</p>
    </>
  );
};
