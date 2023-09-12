export type ApiResponse = {
  id: string;
  visitorId: string;
  departmentId: string;
  date: string;
  time: string;
  visitPurpose: string;
  visitComments: string;
  visitStatus: string;
  visitor: {
    id: string;
    name: string;
    lastname: string;
    cedula: number;
  };
  department: {
    id: string;
    department: string;
  };
};
