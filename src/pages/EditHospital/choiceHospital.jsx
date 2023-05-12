import { useHistory } from "react-router-dom";
import ChoicePatient from "../../components/ChoiceHospital";

export default function ChoiceHospitalEdit() {
  const history = useHistory();

  const onChoosing = (hospital) => {
    history.push(`/edithospital/${hospital.id}`);
  };

  return (
    <ChoiceHospitak
      title="Selecione o Hospital que deseja editar"
      onChoosing={onChoosing}
    />
  );
}
