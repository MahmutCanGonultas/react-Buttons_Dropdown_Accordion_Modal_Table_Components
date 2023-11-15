import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "l41",
      label: "Can i use React",
      content: "React React React React React React React",
    },
    {
      id: "l42",
      label: "Can i use Javascript",
      content:
        "Javascript Javascript Javascript Javascript Javascript Javascript Javascript",
    },
    {
      id: "l43",
      label: "Can i use Tailwind",
      content: "Tailwind Tailwind Tailwind Tailwind Tailwind Tailwind Tailwind",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
