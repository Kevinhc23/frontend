import { Button, AlertDialog, Box } from "@radix-ui/themes";
import { Toaster, toast } from "sonner";

export const DeleteVisit = ({ idVisit }: { idVisit: string }) => {
  const handleDelete = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL;
      const urlFull = `${url}/visits/${idVisit}`;

      const response = await fetch(urlFull, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Visita eliminada con exito");
        window.location.reload();
      } else {
        toast.error("Error al eliminar visita");
      }
    } catch (error) {
      console.error("Error al eliminar visita:", error);
    }
  };

  return (
    <>
      <Button color="red" onClick={handleDelete}>
        Eliminar
      </Button>
      <Toaster position="bottom-right" />
    </>
  );
};

export const FinalizarVisit = ({
  idVisit,
  status,
}: {
  idVisit: string;
  status: string;
}) => {
  const handleFinalizar = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL;
      const urlFull = `${url}/visits/${idVisit}`;
      const response = await fetch(urlFull, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visitStatus: "Finalizada" }),
      });
      if (response.ok) {
        toast.success("Visita finalizada con éxito");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("Error al finalizar visita");
      }
    } catch (error) {
      console.error("Error al finalizar visita:", error);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          {status === "Pendiente" ? (
            <Button>Finalizar</Button>
          ) : (
            <Button disabled>Finalizar</Button>
          )}
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Finalizar visita</AlertDialog.Title>
          <AlertDialog.Description>
            ¿Desea finalizar la visita?
          </AlertDialog.Description>
          <Box className="space-x-4 py-4">
            <AlertDialog.Cancel>
              <Button>Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={handleFinalizar}>
                Finalizar
              </Button>
            </AlertDialog.Action>
          </Box>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};
