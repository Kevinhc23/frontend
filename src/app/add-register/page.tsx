import NewVisit from "@/components/new-user";
import AuthHandler from "@/hooks/useAuthHandler";

const AddRegisterPage = () => {
  return (
    <AuthHandler>
      <NewVisit />
    </AuthHandler>
  );
};

export default AddRegisterPage;
