import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p className="mt-4" >
        Welcome to the world of React, a powerful JavaScript library for
        building user interfaces. React, developed and maintained by Facebook,
        has revolutionized the way developers think about building web
        applications. At its core, React allows you to create reusable
        components that manage their own state, making it easy to build complex
        and interactive UIs efficiently. The component-based architecture
        encourages the development of small, reusable pieces of code, which can
        be composed together to form larger applications. This approach not only
        improves code readability and maintainability but also promotes the
        reuse of code, saving time and effort in the long run. One of the key
        concepts in React is the use of "props" and "state." Props, short for
        properties, are read-only inputs passed from a parent component to a
        child component. They allow data to flow down the component tree and
        ensure that each component remains predictable and consistent. State, on
        the other hand, is a local data storage that is private to a component
        and can be changed over time. By using the setState method, you can
        update the state and trigger a re-render of the component, ensuring that
        the UI remains in sync with the underlying data. React also introduces
        the concept of a "virtual DOM," a lightweight representation of the
        actual DOM. When the state of a component changes, React updates the
        virtual DOM and then efficiently determines the minimal set of changes
        required to update the actual DOM. This process, known as
        reconciliation, significantly improves the performance of web
        applications by reducing the number of direct manipulations to the DOM,
        which can be costly. In addition to these core concepts, React provides
        a rich ecosystem of tools and libraries to enhance your development
        experience. For example, React Router allows you to manage navigation
        and rendering of different components based on the URL, making it easy
        to build single-page applications with multiple views. Redux, a
        predictable state container, helps you manage the state of your
        application in a scalable and maintainable way. Furthermore, tools like
        Create React App streamline the setup and configuration of your
        development environment, allowing you to focus on writing code without
        worrying about build tools and configurations. React's popularity and
        widespread adoption are also due to its strong community support and
        extensive documentation. Whether you are a beginner or an experienced
        developer, you can find a wealth of resources, tutorials, and best
        practices to help you along your React journey. The vibrant community
        also means that there are numerous third-party libraries and components
        available, enabling you to leverage existing solutions and accelerate
        your development process. In summary, React is a powerful and flexible
        library that empowers developers to build modern web applications with
        ease. Its component-based architecture, efficient rendering, and rich
        ecosystem make it an excellent choice for creating interactive and
        high-performance user interfaces. As you dive deeper into React, you
        will discover its potential to transform the way you develop web
        applications and unlock new levels of productivity and creativity.
      </p>
    </div>
  );
}

export default ModalPage;
