import { ApiResponse } from "../types/type";

const fetchData = async (): Promise<ApiResponse[]> => {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${url}/visits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ApiResponse[] = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Puedes lanzar el error para que sea manejado en otro lugar si es necesario.
  }
};

export default fetchData;
