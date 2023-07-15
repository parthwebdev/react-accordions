import { useRef } from "react";

interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    content: string;
  };
  active: number | null;
  handleToggle: (id: number) => void;
}

function AccordionItem({ item, active, handleToggle }: AccordionItemProps) {
  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <li className="accordion-item">
      <div>
        <h2 onClick={() => handleToggle(item.id)} className="accordion-title">
          {item.title} <span>{item.id === active ? "-" : "+"}</span>
        </h2>
      </div>
      <div
        ref={contentEl}
        className={`accordion-content ${active === item.id ? "active" : ""}`}
        style={
          active === item.id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{item.content}</p>
      </div>
    </li>
  );
}
export default AccordionItem;
