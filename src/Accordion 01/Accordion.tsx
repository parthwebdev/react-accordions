import { useState } from "react";
import data from "./data";
import AccordionItem from "./AccordionItem";
import "./styles.css";

function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  function handleToggle(index: number) {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  }

  return (
    <div className="container">
      <h1>Accordion 01</h1>
      <ul className="accordion">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            active={active}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}
export default Accordion;
