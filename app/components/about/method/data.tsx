type Step = {
  title: string;
  text: string;
  hasArrow: boolean;
}

export const steps: Step[] = [
  {
    title: "Entender",
    text: "Converso com o cliente para compreender suas necessidades.",
    hasArrow: true,
  },
  {
    title: "Planejar",
    text: "Elaboro uma proposta personalizada.",
    hasArrow: true,
  },
  {
    title: "Executar",
    text: "Organizo e desenvolvo todas as atividades contratadas.",
    hasArrow: false,
  },
  {
    title: "Acompanhar",
    text: "Permaneço disponível para suporte e gestão contínua.",
    hasArrow: false,
  },
]