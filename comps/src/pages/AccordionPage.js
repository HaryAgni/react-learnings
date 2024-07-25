import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "accordion1",
      label: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React was developed by Facebook and is maintained by a community of individual developers and companies.",
    },
    {
      id: "accordion2",
      label: "React Components",
      content:
        "Components are the building blocks of a React application. A component is a JavaScript function or class that optionally accepts inputs (known as 'props') and returns a React element that describes how a section of the UI should appear. Components can be composed together to build complex UIs.",
    },
    {
      id: "accordion3",
      label: "State and Props",
      content:
        "State and props are two core concepts in React. Props are read-only inputs passed from a parent component to a child component, while state is a local data storage that is private to a component and can be changed by calling setState. Understanding how to manage state and props is crucial for building dynamic and interactive applications.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
